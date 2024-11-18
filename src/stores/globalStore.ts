import { defineStore } from 'pinia';
import { PublicKey } from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import axios from 'axios';
import { I_TokenList, I_Tokens } from 'stores/I_TokenList';
import { I_StarAtlasNFT } from 'stores/I_StarAtlasNFT';

export const STARATLASAPI_URL = 'https://galaxy.staratlas.com/nfts';

export const WHITELIST_CREATOR_WALLET = new PublicKey(
  'adm1rpWxyo8u9y2Q2wxxfqaVDLE2gD1N9PbZbbhokTP',
);
export const FEE_WALLET = new PublicKey(import.meta.env.VITE_FEE_WALLET);
export const SERVICE_FEE = 100000;
export const RAFLLE_WHITELIST_NAME = 'Crew';

export const useGlobalStore = defineStore('globalstore', {
  state: () => ({
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

export const calcAmountToTransfer = (amount: number, decimals: number) => {
  return amount * 10 ** decimals;
};
