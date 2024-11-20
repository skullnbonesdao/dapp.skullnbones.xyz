import { PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import raffleIDL from 'src/solana/raffle/raffle.0.30.1.json';

const ID = new PublicKey(raffleIDL.address);

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

export function findRaffleAddress(name: string, seed: BN) {
  const raffle = anchor.web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('raffle'),
      anchor.utils.bytes.utf8.encode(name),
      seed.toArrayLike(Buffer).reverse(),
    ],
    ID,
  );
  return raffle[0];
}

export function findEntransAddress(raffle: PublicKey) {
  const entrants = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('entrants'), raffle.toBytes()],
    ID,
  );
  return entrants[0];
}

export function findProceedsAddress(raffle: PublicKey) {
  const proceeds = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('proceeds'), raffle.toBytes()],
    ID,
  );
  return proceeds[0];
}

export function findTicketsAddress(raffle: PublicKey) {
  const tickets = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('tickets'), raffle.toBytes()],
    ID,
  );
  return tickets[0];
}

export function findPrizeVaultAddress(raffle: PublicKey) {
  const prizeVault = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('vaultPrize'), raffle.toBytes()],
    ID,
  );
  return prizeVault[0];
}

export function findTicketsVaultAddress(raffle: PublicKey) {
  const ticketsVault = anchor.web3.PublicKey.findProgramAddressSync(
    [anchor.utils.bytes.utf8.encode('vaultTickets'), raffle.toBytes()],
    ID,
  );
  return ticketsVault[0];
}
