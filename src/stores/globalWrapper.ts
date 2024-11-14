import { defineStore } from 'pinia';
import { PublicKey } from '@solana/web3.js';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';

export const WRAPPER_FEE_ACCOUNT = new PublicKey(
  'subA4tNLV18htV8xACaZyMMKkAm1AQS4EhiPYPV4zbH',
);

export const useWrapperStore = defineStore('wrapperStore', {
  state: () => ({
    selectedGroup: {},
    groups: [{}],
  }),

  getters: {},
  actions: {
    async load_groups() {
      const pg_wrapper = useWorkspaceAdapter()!.pg_wrapper.value;

      this.groups = await pg_wrapper.account.group.all();
    },
  },
});
