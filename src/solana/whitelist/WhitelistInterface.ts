import { PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import whitelistIDL from 'src/solana/whitelist/whitelist.0.30.1.json';
import { getSigner } from 'src/solana/squads/SignerFinder';

const ID = new PublicKey(whitelistIDL.address);

export const WHITELIST_CREATOR_WALLET = new PublicKey(
  'adm1rpWxyo8u9y2Q2wxxfqaVDLE2gD1N9PbZbbhokTP',
);
export const RAFLLE_WHITELIST_NAME = 'Crew';

export interface Whitelist {
  authority: PublicKey;
  name: string;
  hasChilds: boolean;
  accessCount: number;
}

export interface WhitelistEntry {
  parent: PublicKey;
  whitelisted: PublicKey;
}

export function findWhitelistAddress() {
  const whitelist = anchor.web3.PublicKey.findProgramAddressSync(
    [
      WHITELIST_CREATOR_WALLET.toBuffer(),
      anchor.utils.bytes.utf8.encode(RAFLLE_WHITELIST_NAME),
    ],
    ID,
  );
  return whitelist[0];
}

export function findWhitelistEntryAddress(whitelist: PublicKey) {
  const whitelistEntry = anchor.web3.PublicKey.findProgramAddressSync(
    [getSigner().toBytes(), whitelist.toBytes()],
    ID,
  );
  return whitelistEntry[0];
}
