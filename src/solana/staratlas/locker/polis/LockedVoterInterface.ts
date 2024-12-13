import { PublicKey, SystemProgram } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import lockedVoterIDL from './locked_voter.0.30.1.json';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { web3 } from '@coral-xyz/anchor';
import {
  findProxy,
  findProxyEscrow,
  PROXY_REWARDER_ID,
} from 'src/solana/staratlas/locker/polis/ProxyRewarderInterface';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { POLIS } from 'stores/globalStarAtlasLockerStore';
import {
  LOCKER,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
} from 'src/solana/staratlas/locker/polis/consts';

export const LOCKED_VOTER_ID = new PublicKey(lockedVoterIDL.address);

export function findEscrow() {
  return web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('Escrow'),
      LOCKER.toBuffer(),
      findProxy()[0].toBuffer(),
    ],
    LOCKED_VOTER_ID,
  );
}

export function findEscrowATA() {
  return web3.PublicKey.findProgramAddressSync(
    [findEscrow()[0].toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), POLIS.toBuffer()],
    SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  );
}

export async function instruction_newEscrow() {
  const pg_lockedVoter = useWorkspaceAdapter()?.pg_lockedVoter.value;

  return pg_lockedVoter?.methods
    .newEscrow(findEscrow()[1])
    .accountsPartial({
      locker: LOCKER,
      escrow: findEscrow()[0],
      escrowOwner: findProxy()[0],
      payer: getSigner(),
      systemProgram: SystemProgram.programId,
    })
    .transaction();
}
