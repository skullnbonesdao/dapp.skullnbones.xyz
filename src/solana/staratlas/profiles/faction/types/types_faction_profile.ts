import { PublicKey } from '@solana/web3.js';
import { BN } from '@coral-xyz/anchor';

export enum Faction { "Unaligned" , "MUD" , "ONI" , "Ustur" };

export type ProfileFactionAccount = {
  version: number;
  profile: PublicKey;
  faction: number;
  bump: number;
};