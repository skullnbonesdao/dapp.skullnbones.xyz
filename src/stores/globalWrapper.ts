import { defineStore } from 'pinia';
import { PublicKey } from '@solana/web3.js';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import * as anchor from '@coral-xyz/anchor';
import { ProgramAccount } from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';

export const WRAPPER_FEE_ACCOUNT = new PublicKey(
  'subA4tNLV18htV8xACaZyMMKkAm1AQS4EhiPYPV4zbH',
);

export type WrapperGroup = ProgramAccount<{
  name: string;
  owner: PublicKey;
}>;

export type WrapperFactory = {
  publicKey: PublicKey;
  account: {
    group: PublicKey;
    admin: PublicKey;
    onlyCreatorCanUnwrap: boolean;
    mintUnwrapped: PublicKey;
    mintWrapped: PublicKey;
    wrappedDecimals: number;
    allowWrap: boolean;
    allowUnwrap: boolean;
    useLimit: boolean;
    amountAbleToWrap: number;
    ratio: [number, number];
    useWhitelist: boolean;
    whitelist: PublicKey;
  };
};

export const useWrapperStore = defineStore('wrapperStore', {
  state: () => ({
    selectedGroup: ({} as WrapperGroup) || undefined,
    selectedFactory: ({} as WrapperFactory) || undefined,
    groups: [] as WrapperGroup[],
    factories: [] as WrapperFactory[],
  }),

  getters: {
    getVault(state) {
      const [vault, bumo] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          anchor.utils.bytes.utf8.encode('wrapper_vault'),
          useWrapperStore().selectedFactory?.publicKey.toBytes(),
          useWrapperStore().selectedFactory?.account.mintUnwrapped.toBytes(),
        ],
        useWorkspaceAdapter()!.pg_wrapper.value.programId!,
      );
      return vault;
    },

    getFactoriesByGroup(state) {
      if (!state.selectedGroup.account) return state.factories;
      else
        return state.factories.filter(
          (f) =>
            f.account.group.toString() ==
            state.selectedGroup.publicKey.toString(),
        );
    },
  },
  actions: {
    async load_groups() {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;
      this.groups = await pg_wrapper.account.group.all();
    },

    async load_wrapper() {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;
      this.factories = await pg_wrapper.account.wrapper.all();
    },
  },
});

export const getATA = (owner: string, mint: string) => {
  const [ata, bump] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      new PublicKey(owner).toBuffer(),
      TOKEN_PROGRAM_ID.toBuffer(),
      new PublicKey(mint).toBuffer(),
    ],
    ASSOCIATED_PROGRAM_ID,
  );
  return ata;
};

export const getVault = (wrapper: string, mintUnwrapd: string) => {
  const [vault, bumo] = anchor.web3.PublicKey.findProgramAddressSync(
    [
      anchor.utils.bytes.utf8.encode('wrapper_vault'),
      new PublicKey(wrapper).toBytes(),
      new PublicKey(mintUnwrapd).toBytes(),
    ],
    useWorkspaceAdapter()!.pg_wrapper.value.programId!,
  );
  return vault;
};
