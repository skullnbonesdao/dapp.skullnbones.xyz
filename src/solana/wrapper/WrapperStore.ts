import { defineStore } from 'pinia';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { IGroup, IWrapper } from 'src/solana/wrapper/WrapperInterface';
import { PublicKey } from '@solana/web3.js';

export const RAFLLE_WHITELIST_NAME = 'Crew';

export interface GroupAccount {
  publicKey: PublicKey;
  account: IGroup;
}

export interface WrapperAccount {
  publicKey: PublicKey;
  account: IWrapper;
}

export const useWrapperStore = defineStore('wrapperStore', {
  state: () => ({
    wrapperSelected: {} as WrapperAccount | undefined,
    groupSelected: {} as GroupAccount | undefined,
    wrapper: [] as WrapperAccount[],
    groups: [] as GroupAccount[],
  }),

  getters: {
    getWrapperByGroup: (state) => {
      return (group: GroupAccount | undefined) =>
        state.wrapper.filter(
          (w) => w.account.group.toString() == group?.publicKey.toString(),
        );
    },
  },
  actions: {
    async updateStore() {
      if (useWorkspaceAdapter()) {
        const { pg_wrapper } = useWorkspaceAdapter()!;

        this.groups = (await pg_wrapper.value.account.group.all()) as never;
        this.wrapper = (await pg_wrapper.value.account.wrapper.all()) as never;

        if (!this.groupSelected) this.groupSelected = this.groups[0];
        console.log('[Updated] WrapperStore');
      }
    },
  },
});