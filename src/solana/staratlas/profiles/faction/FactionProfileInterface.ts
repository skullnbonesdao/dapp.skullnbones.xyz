import { PublicKey, SystemProgram } from '@solana/web3.js';
import factionProfileIDL from './faction_profile.0.30.1.json';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { Faction } from 'src/solana/staratlas/profiles/faction/types/types_faction_profile';
import { getAnchorEnum } from 'src/solana/extra';

export const FACTIONPROFILE_ID = new PublicKey(factionProfileIDL.address);

export function findPlayerFaction(profile: PublicKey) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from('player_faction'), profile.toBuffer()],
    FACTIONPROFILE_ID,
  );
}

export async function instruction_factionProfile_chooseFaction(
  profile: PublicKey,
  faction: Faction,
) {
  const factionProfile = useWorkspaceAdapter()?.pg_factionProfile.value;

  console.log('sdjksal');
  return factionProfile?.methods
    .chooseFaction(0, getAnchorEnum(Faction, faction))
    .accountsPartial({
      key: getSigner(),
      funder: getSigner(),
      profile: profile,
      faction: findPlayerFaction(profile)[0],
      systemProgram: SystemProgram.programId,
    })
    .transaction();
}
