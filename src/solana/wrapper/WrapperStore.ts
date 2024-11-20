import { defineStore } from 'pinia';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { Group, WrapperInterface } from 'src/solana/wrapper/WrapperInterface';
import { PublicKey } from '@solana/web3.js';

export const RAFLLE_WHITELIST_NAME = 'Crew';

export interface GroupAccount {
  publicKey: PublicKey;
  account: Group;
}

export interface WrapperAccount {
  publicKey: PublicKey;
  account: WrapperInterface;
}

export const useWrapperStore = defineStore('wrapperStore', {
  state: () => ({
    wrapperSelected: {} as WrapperAccount,
    groupSelected: {} as GroupAccount,
    wrapper: [] as WrapperAccount[],
    groups: [] as GroupAccount[],
  }),

  getters: {},
  actions: {
    async updateStore() {
      if (useWorkspaceAdapter()) {
        const { pg_wrapper } = useWorkspaceAdapter()!;

        this.groups = (await pg_wrapper.value.account.group.all()) as never;
        this.wrapper = (await pg_wrapper.value.account.wrapper.all()) as never;
        console.log('[Updated] WrapperStore');
      }
    },
  },
});
