import { PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';

import wrapperIDL from './wrapper_factory.0.30.1.json';
import { MPL_TOKEN_METADATA_PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';

const ID = new PublicKey(wrapperIDL.address);

export interface IGroup {
  name: PublicKey;
  owner: PublicKey;
}

export interface IWrapper {
  seed: BN;
  group: PublicKey;
  admin: PublicKey;
  onlyCreatorCanUnwrap: boolean;
  mintUnwrapped: PublicKey;
  mintWrapped: PublicKey;
  wrappedDecimals: number;
  allowWrap: boolean;
  allowUnwrap: boolean;
  useLimit: boolean;
  amountAbleToWrap: BN;
  ratio: [BN, 2];
  useWhitelist: boolean;
  whitelist: PublicKey;
}

export function findVaultAddress(wrapper: PublicKey, mintUnwrapped: PublicKey) {
  const [vault, bump] = PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('wrapper_vault'),
      wrapper.toBytes(),
      mintUnwrapped.toBytes(),
    ],
    ID,
  );
  return vault;
}

export function findMetadataAddress(mintWrapped: PublicKey) {
  const [metadataAddress, metadata_bump] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('metadata'),
      new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.toString()).toBuffer(),
      mintWrapped.toBytes(),
    ],
    new PublicKey(MPL_TOKEN_METADATA_PROGRAM_ID.toString()),
  );
  return metadataAddress;
}

export function findATA(owner: string, mint: string) {
  const [ata, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      new PublicKey(owner).toBuffer(),
      TOKEN_PROGRAM_ID.toBuffer(),
      new PublicKey(mint).toBuffer(),
    ],
    ASSOCIATED_PROGRAM_ID,
  );
  return ata;
}