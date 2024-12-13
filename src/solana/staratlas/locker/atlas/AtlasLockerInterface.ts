import { getRegisteredStake, getStakingAccount } from '@staratlas/factory';
import {
  ATLAS_LOCKER,
  ATLAS_LOCKER_PROGRAM_AUTH,
  ATLAS,
  POLIS,
} from 'src/solana/staratlas/locker/atlas/consts';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';
import * as anchor from '@coral-xyz/anchor';

export async function findRegisteredStakeAtlas() {
  return await getRegisteredStake(
    ATLAS_LOCKER,
    ATLAS_LOCKER_PROGRAM_AUTH,
    ATLAS,
    POLIS,
  );
}

export async function findStakingAccount(type: 'ATLAS' | 'POLIS') {
  return await getStakingAccount(
    type == 'ATLAS' ? ATLAS_LOCKER : ATLAS_LOCKER,
    getSigner(),
    (await findRegisteredStakeAtlas())[0],
  );
}

export function findATA(owner: PublicKey, mint: PublicKey) {
  const [ata, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [owner.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
    ASSOCIATED_PROGRAM_ID,
  );
  return ata;
}
