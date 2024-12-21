import { PublicKey, SystemProgram } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import playerProfileIDL from './player_profile.0.30.1.json';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { ProfilePermissions } from '@staratlas/player-profile';

export const PLAYERPROFILE_ID = new PublicKey(playerProfileIDL.address);

export function findProfile() {
  const profile = anchor.web3.PublicKey.findProgramAddressSync(
    [getSigner().toBytes()],
    PLAYERPROFILE_ID,
  );
  return profile[0];
}

export function findPlayerName(profile: PublicKey) {
  return anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from('player_name'), profile.toBuffer()],
    PLAYERPROFILE_ID,
  );
}

export async function instruction_playerProfile_create(profile: PublicKey) {
  const playerProfile = useWorkspaceAdapter()?.pg_playerProfile.value;

  return playerProfile?.methods
    .createProfile(
      [
        {
          scope: PLAYERPROFILE_ID,
          expireTime: new BN(-1),
          permissions: ProfilePermissions.all().getPermissions(),
        },
      ],
      1,
    )
    .accountsPartial({
      funder: getSigner(),
      profile: profile,
      systemProgram: SystemProgram.programId,
    })
    .remainingAccounts([
      {
        pubkey: getSigner(),
        isSigner: true,
        isWritable: false,
      },
    ])
    .transaction();
}

export async function instruction_playerProfile_setName(
  label: string,
  key: PublicKey,
  profile: PublicKey,
) {
  const playerProfile = useWorkspaceAdapter()?.pg_playerProfile.value;

  return playerProfile?.methods
    .setName(0, anchor.utils.bytes.base64.decode(label))
    .accountsPartial({
      key: key,
      funder: getSigner(),
      profile: profile,
      name: findPlayerName(profile)[0],
      systemProgram: SystemProgram.programId,
    })

    .transaction();
}
