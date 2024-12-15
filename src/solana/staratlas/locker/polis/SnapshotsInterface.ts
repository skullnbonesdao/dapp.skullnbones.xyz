import { PublicKey, SystemProgram } from '@solana/web3.js';
import snapshotsIDL from './snapshots.0.30.1.json';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { getSigner } from 'src/solana/squads/SignerFinder';

import { findEscrow } from 'src/solana/staratlas/locker/polis/LockedVoterInterface';
import * as anchor from '@coral-xyz/anchor';
import { BN, web3 } from '@coral-xyz/anchor';
import { LOCKER } from 'src/solana/staratlas/locker/polis/consts';

export const SNAPSHOTS_ID = new PublicKey(snapshotsIDL.address);

export function findEscrowHistory(era: number) {
  return web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('EscrowHistory'),
      findEscrow()[0].toBuffer(),
      new BN(era).toArrayLike(Buffer).reverse(),
    ],
    SNAPSHOTS_ID,
  );
}

export function duration_2_ERAs(duration_sec: number): number[] {
  const START_AT = 3;
  const intervals = duration_sec / 60 / 60 / 24 / 255;
  const result = [];

  for (let i = 0; i < intervals; i++) {
    result.push(START_AT + i);
  }

  return result;
}

export async function instruction_createEscrowHistory(era: number) {
  const pg_snapshots = useWorkspaceAdapter()?.pg_snapshots.value;

  return pg_snapshots?.methods
    .createEscrowHistory(era)
    .accountsPartial({
      escrow: findEscrow()[0],
      escrowHistory: findEscrowHistory(era)[0],
      payer: getSigner(),
      systemProgram: SystemProgram.programId,
    })
    .transaction();
}

export async function instruction_sync(era: number) {
  const pg_snapshots = useWorkspaceAdapter()?.pg_snapshots.value;

  const lockerHistory = (await pg_snapshots!.account.lockerHistory.all()).find(
    (lh) => lh.account.era == era,
  )!.publicKey;

  return pg_snapshots?.methods
    .sync()
    .accountsPartial({
      locker: LOCKER,
      escrow: findEscrow()[0],
      lockerHistory: lockerHistory,
      escrowHistory: findEscrowHistory(era)[0],
    })
    .transaction();
}
