import { PublicKey } from '@solana/web3.js';
import { BN } from '@coral-xyz/anchor';

export interface IRaffle {
  seed: BN;
  bump: number;
  creator: PublicKey;
  name: string;
  description: string;
  url: string;
  ticket_mint: PublicKey;
  state: any;
  ticket_price: BN;
  ticket_decimals: number;
  prize_mint: PublicKey;
  prize_vault_count: BN;
  prize_decimals: number;
  tickets: PublicKey;
  winner: PublicKey;
  randomness: any;
  use_whitelist: any;
  whitelist: any;
}
