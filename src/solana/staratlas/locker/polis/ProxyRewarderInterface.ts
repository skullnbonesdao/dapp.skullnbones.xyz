import {
  PublicKey,
  SystemProgram,
  SYSVAR_INSTRUCTIONS_PUBKEY,
} from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import proxyRewarderIDL from './proxy_rewarder.0.30.1.json';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { BN, web3 } from '@coral-xyz/anchor';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import {
  findEscrow,
  findEscrowATA,
  LOCKED_VOTER_ID,
} from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import { findATA } from 'src/solana/wrapper/WrapperInterface';
import {
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  POLIS,
  LOCKER,
  REGISTERED_LOCKER,
  TREASURY_TOKEN_ACCOUNT,
} from 'src/solana/staratlas/locker/polis/consts';
import { findEscrowHistory } from 'src/solana/staratlas/locker/polis/SnapshotsInterface';

export const PROXY_REWARDER_ID = new PublicKey(proxyRewarderIDL.address);

export type Proxy = {
  escrow: string; // Pubkey
  owner: string; // Pubkey
  tokenMint: string; // Pubkey
  bump: number; // u8
  proxyTokenAccount: string; // Pubkey
};

export function findProxyEscrow() {
  return web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('ProxyEscrow'), getSigner().toBuffer()],
    PROXY_REWARDER_ID,
  );
}

export function findProxy() {
  return web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('Proxy'),
      findProxyEscrow()[0].toBuffer(),
      getSigner().toBuffer(),
    ],
    PROXY_REWARDER_ID,
  );
}

export function findProxyATA() {
  return web3.PublicKey.findProgramAddressSync(
    [findProxy()[0].toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
}

export async function instruction_newProxyEscrow() {
  const pg_proxyRewarder = useWorkspaceAdapter()?.pg_proxyRewarder.value;

  return pg_proxyRewarder?.methods
    .newProxyEscrow(findProxyEscrow()[1])
    .accountsPartial({
      escrowOwner: getSigner(),
      proxyEscrow: findProxyEscrow()[0],
      payer: getSigner(),
      systemProgram: SystemProgram.programId,
    })
    .transaction();
}

export async function instruction_newProxy() {
  const pg_proxyRewarder = useWorkspaceAdapter()?.pg_proxyRewarder.value;

  return pg_proxyRewarder?.methods
    .newProxy(findProxy()[1])
    .accountsPartial({
      proxyEscrow: findProxyEscrow()[0],
      proxy: findProxy()[0],
      tokenMint: POLIS,
      proxyOwner: getSigner(),
      systemProgram: SystemProgram.programId,
    })
    .transaction();
}

export async function instruction_proxyLock(amount: BN, duration: BN) {
  const pg_proxyRewarder = useWorkspaceAdapter()?.pg_proxyRewarder.value;

  return pg_proxyRewarder?.methods
    .proxyLock(amount, duration)
    .accountsPartial({
      locker: LOCKER,
      escrow: findEscrow()[0],
      userTokenAccount: findATA(getSigner().toString(), POLIS.toString()),
      proxyTokenAccount: findProxyATA()[0],
      escrowTokenAccount: findEscrowATA()[0],
      proxy: findProxy()[0],
      payer: getSigner(),
      lockedVoterProgram: LOCKED_VOTER_ID,
      tokenProgram: TOKEN_PROGRAM_ID,
      registeredLocker: REGISTERED_LOCKER,
    })
    .transaction();
}

export async function instruction_claimRewards(era: number) {
  const pg_proxyRewarder = useWorkspaceAdapter()?.pg_proxyRewarder.value;
  const pg_snapshots = useWorkspaceAdapter()?.pg_snapshots.value;

  const lockerHistory = (await pg_snapshots!.account.lockerHistory.all()).find(
    (lh) => lh.account.era == era,
  )!.publicKey;

  const treasuryAuthority = (
    await pg_proxyRewarder!.account.treasuryAuthority.all()
  ).find((lh) => lh.account.locker.toString() == LOCKER.toString())!.publicKey;

  return pg_proxyRewarder?.methods
    .claimRewards()
    .accountsPartial({
      escrow: findEscrow()[0],
      locker: LOCKER,
      proxy: findProxy()[0],
      proxyEscrow: findProxyEscrow()[0],
      escrowHistory: findEscrowHistory(era)[0],
      lockerHistory: lockerHistory,
      treasuryTokenAccount: TREASURY_TOKEN_ACCOUNT,
      registeredLocker: REGISTERED_LOCKER,
      treasuryAuthority: treasuryAuthority,
      userTokenAccount: findATA(getSigner().toString(), POLIS.toString()),
      escrowOwner: getSigner(),
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .transaction();
}

export async function instruction_proxyExit() {
  const pg_proxyRewarder = useWorkspaceAdapter()?.pg_proxyRewarder.value;

  return pg_proxyRewarder?.methods
    .proxyExit()
    .accountsPartial({
      locker: LOCKER,
      escrow: findEscrow()[0],
      proxy: findProxy()[0],
      escrowTokenAccount: findEscrowATA()[0],
      proxyTokenAccount: findProxyATA()[0],
      userTokenAccount: findATA(getSigner().toString(), POLIS.toString()),
      payer: getSigner(),
      lockedVoterProgram: LOCKED_VOTER_ID,
      tokenProgram: TOKEN_PROGRAM_ID,
      registeredLocker: REGISTERED_LOCKER,
    })
    .transaction();
}
