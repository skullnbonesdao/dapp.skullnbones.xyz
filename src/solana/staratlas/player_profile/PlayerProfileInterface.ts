import { PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import playerProfileIDL from './player_profile.0.30.1.json';
import { getSigner } from 'src/solana/squads/SignerFinder';

export const PLAYERPROFILE_ID = new PublicKey(playerProfileIDL.address);

export function findProfile() {
  const profile = anchor.web3.PublicKey.findProgramAddressSync(
    [getSigner().toBytes()],
    PLAYERPROFILE_ID,
  );
  return profile[0];
}

export function findPlayerNameAddress(profile: PublicKey) {
  const account = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('wrapper_token'), profile.toBytes()],
    PLAYERPROFILE_ID,
  );
  return account[0];
}
