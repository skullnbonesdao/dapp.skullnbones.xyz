import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { useLocalStorage } from '@vueuse/core';
import axios from 'axios';
import { I_Token, I_TokenList } from 'stores/I_TokenList';

export const RPC_NETWORKS = [
  {
    name: 'mainnet.alchemy',
    url: 'https://solana-mainnet.g.alchemy.com/v2/hhh3czrJbOnssV11HBINkPZSe-HzR3Jy',
  },
  { name: 'mainnet.extrnode', url: 'https://solana-mainnet.rpc.extrnode.com' },
  { name: 'devnet.ankr', url: 'https://rpc.ankr.com/solana_devnet' },
];

export const NULL_WALLET = '11111111111111111111111111111111';

export const WHITELIST_CREATOR_WALLET = new PublicKey(
  'adm1rpWxyo8u9y2Q2wxxfqaVDLE2gD1N9PbZbbhokTP',
);

export const FEE_WALLET = new PublicKey(import.meta.env.VITE_FEE_WALLET);

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useGlobalStore = defineStore('globalstore', {
  state: () => ({
    rpc_selected: useLocalStorage('rpc_selected', RPC_NETWORKS[0]),
    connection: {} as Connection,
    admins: import.meta.env.VITE_ADMINS?.split(',') as Array<string>,
    token_list: [] as I_Token[],
  }),

  getters: {
    is_admin(self) {
      return self.admins.some(
        (entry) => entry === useWallet().publicKey.value?.toString(),
      );
    },
  },
  actions: {
    update_connection() {
      console.log('RPC is set to: ' + this.rpc_selected.url);

      this.connection = new Connection(this.rpc_selected.url, {
        commitment: 'confirmed',
      });
    },
    async load_token_list() {
      axios
        .get(
          'https://cdn.jsdelivr.net/gh/solflare-wallet/token-list@latest/solana-tokenlist.json',
        )
        .then((response) => {
          const data: I_TokenList = response.data;
          this.token_list = data.tokens;
        });
    },
  },
});
