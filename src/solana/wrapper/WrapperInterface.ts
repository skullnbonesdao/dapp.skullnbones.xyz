import { PublicKey } from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';

import wrapperIDL from './wrapper_factory.0.30.1.json';

import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';

export const MPL_TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
);

const ID = new PublicKey(wrapperIDL.address);

export interface IGroup {
  name: string;
  owner: PublicKey;
}

export interface IWrapper {
  seed: BN;
  group: PublicKey;
  admin: PublicKey;
  onlyAdminCanWrap: boolean;
  onlyAdminCanUnwrap: boolean;
  mintUnwrapped: PublicKey;
  mintWrapped: PublicKey;
  wrappedDecimals: number;
  allowWrap: boolean;
  allowUnwrap: boolean;
  useLimit: boolean;
  limitAmountUnwrapped: BN;
  ratio: [BN, 2];
  useWhitelist: boolean;
  whitelist: PublicKey;
}

export function findWrapperAddress(mintUnwrapped: PublicKey, admin: PublicKey) {
  const wrapper = PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('wrapper'),
      mintUnwrapped.toBytes(),
      admin.toBytes(),
    ],
    ID,
  );
  return wrapper[0];
}

export function findMintWrappedAddress(wrapper: PublicKey, seed: BN) {
  const mintWrapped = PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('wrapper_token'),
      wrapper.toBytes(),
      seed.toArrayLike(Buffer).reverse(),
    ],
    ID,
  );
  return mintWrapped[0];
}

export function findVaultAddress(
  wrapper: PublicKey | undefined,
  mintUnwrapped: PublicKey | undefined,
) {
  const [vault, bump] = PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('wrapper_vault'),
      wrapper!.toBytes(),
      mintUnwrapped!.toBytes(),
    ],
    ID,
  );
  return vault;
}

export function findMetadataAddress(mintWrapped: PublicKey) {
  const [metadataAddress, metadata_bump] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('metadata'),
      MPL_TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mintWrapped.toBuffer(),
    ],
    MPL_TOKEN_METADATA_PROGRAM_ID,
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
