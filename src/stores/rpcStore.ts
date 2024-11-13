import { defineStore } from 'pinia';
import { Connection } from '@solana/web3.js';
import { RPC_NETWORKS } from './interfaces/RPC_Networks';
import { useLocalStorage } from '@vueuse/core';

export const useRPCStore = defineStore('rpcStore', {
  state: () => ({
    rpc_stored_name: useLocalStorage('rpc_store_0', RPC_NETWORKS[0].name),
    rpc_selected:
      RPC_NETWORKS.find((rpc) =>
        rpc.name.includes(useLocalStorage('rpc_store_0', RPC_NETWORKS[0].name)),
      ) ?? RPC_NETWORKS[0],
    connection: new Connection(
      RPC_NETWORKS.find((rpc) =>
        rpc.name.includes(useLocalStorage('rpc_store_0', RPC_NETWORKS[0].name)),
      )?.url ?? RPC_NETWORKS[0].url,
    ),
  }),
  actions: {
    update_connection() {
      this.rpc_selected =
        RPC_NETWORKS.find((rpc) => rpc.name.includes(this.rpc_stored_name)) ??
        RPC_NETWORKS[0];

      console.log('RPC is set to: ' + this.rpc_selected.name);
      this.connection = new Connection(this.rpc_selected.url, {
        commitment: 'confirmed',
      });
    },
  },
});
