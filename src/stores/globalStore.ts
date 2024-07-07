import { defineStore } from 'pinia';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import { useLocalStorage } from '@vueuse/core';
import axios from 'axios';
import { I_TokenList, I_Tokens } from 'stores/I_TokenList';
import { I_StarAtlasNFT } from 'stores/I_StarAtlasNFT';

export const STARATLASAPI_URL = 'https://galaxy.staratlas.com/nfts';

export const RPC_NETWORKS = [
  {
    name: 'mainnet.helius',
    url: 'https://mainnet.helius-rpc.com/?api-key=2f63b517-5c14-4618-be86-4c918b7a8073',
  },
  { name: 'devnet.ankr', url: 'https://rpc.ankr.com/solana_devnet' },
];

export const NULL_WALLET = '11111111111111111111111111111111';

export const WHITELIST_CREATOR_WALLET = new PublicKey(
  'adm1rpWxyo8u9y2Q2wxxfqaVDLE2gD1N9PbZbbhokTP',
);

export const FEE_WALLET = new PublicKey(import.meta.env.VITE_FEE_WALLET);
export const SERVICE_FEE = 100000;

export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useGlobalStore = defineStore('globalstore', {
  state: () => ({
    rpc_selected: useLocalStorage('rpc_selected11', RPC_NETWORKS[0]),
    connection: {} as Connection,

    admins: import.meta.env.VITE_ADMINS?.split(',') as Array<string>,
    token_list: [] as I_Tokens[],
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
      // await axios
      //   .get(
      //     'https://cdn.jsdelivr.net/gh/solflare-wallet/token-list@latest/solana-tokenlist.json',
      //   )
      //   .then((response) => {
      //     const data: I_TokenList = response.data;
      //     this.token_list = data.tokens;
      //   });

      const token_list = (
        await axios.get('https://token-list-api.solana.cloud/v1/list')
      ).data as I_TokenList;
      this.token_list = token_list.content;

      const data_sa = (await axios.get(STARATLASAPI_URL))
        .data as I_StarAtlasNFT[];

      data_sa.forEach((asset) =>
        this.token_list.push({
          name: asset.name,
          address: asset.mint,
          chainId: 0,
          decimals: 0,
          extensions: undefined,
          holders: null,
          logoURI: asset.image,
          symbol: asset.symbol,
          tags: [],
          verified: true,
        }),
      );
    },
  },
});
