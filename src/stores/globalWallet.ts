import { defineStore } from 'pinia';
import {
  AccountInfo,
  Connection,
  ParsedAccountData,
  PublicKey,
} from '@solana/web3.js';
import { useWallet } from 'solana-wallets-vue';
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { useGlobalStore } from 'stores/globalStore';
import { I_Token } from 'stores/I_TokenList';
import { I_AccountParsedInfo } from 'stores/I_AccountParsedInfo';
import { getParsedNftAccountsByOwner } from '@nfteyez/sol-rayz';
import { I_AccountNFT } from 'stores/I_AccountNFT';
import axios from 'axios';
import { getTokenAccount } from '@staratlas/factory';
import { useRPCStore } from 'stores/rpcStore';

export const NULL_WALLET = '11111111111111111111111111111111';

export const DAPP_ADMIN_WALLET = new PublicKey(
  '3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1',
);

export const RAFLLE_WHITELIST_NAME = 'Crew';

export interface I_TokenMap {
  pubkey: string;
  meta: I_Token;
  info: I_AccountParsedInfo;
  account: AccountInfo<ParsedAccountData>;
}

export interface I_NFTMap {
  pubkey: string;
  meta: I_AccountNFT;
  data: any;
  info: I_AccountParsedInfo;
  account: AccountInfo<ParsedAccountData>;
}

export const useGlobalWalletStore = defineStore('walletStore', {
  state: () => ({
    _updateCount: 0 as number,
    is_loading: false,
    token_accounts: [],
    nft_accounts: [],
    nft_in_wallet: [] as I_AccountNFT[],
    token_map: [] as I_TokenMap[],
    nft_map: [] as I_NFTMap[],
  }),

  getters: {
    get_account_map(state) {
      return state.token_accounts.map((account) => {
        const info = account.account.data.parsed.info as I_AccountParsedInfo;
        return {
          pubkey: account.pubkey.toString(),
          info: info,
          account: account,
          meta: useGlobalStore().token_list.find(
            (token) => token.address === info.mint,
          ),
        } as I_TokenMap;
      });
    },
  },
  actions: {
    async update_accounts() {
      this.is_loading = true;
      this.token_accounts = [];

      if (useWallet().publicKey.value) {
        this.token_accounts = [];
        this.token_accounts = (
          await useRPCStore().connection.getParsedTokenAccountsByOwner(
            useWallet().publicKey.value!,
            {
              programId: TOKEN_PROGRAM_ID,
            },
          )
        ).value;
      }
      this.is_loading = false;
    },
    async update_accounts_nft(force = false) {
      if (useWallet().publicKey.value || !this.nft_map.length || force) {
        this.is_loading = true;
        this.nft_in_wallet = [];

        this.nft_map = [];
        this.nft_in_wallet = (await getParsedNftAccountsByOwner({
          publicAddress: useWallet().publicKey.value!.toString(),
          connection: useRPCStore().connection as Connection,
        })) as I_AccountNFT[];

        for (const meta of this.nft_in_wallet) {
          const largestAccounts =
            await useRPCStore().connection.getTokenLargestAccounts(
              new PublicKey(meta.mint),
            );
          const largestAccountInfo =
            await useRPCStore().connection.getParsedAccountInfo(
              largestAccounts.value[0].address,
            );

          const info = largestAccountInfo.value.data.parsed
            .info as I_AccountParsedInfo;

          this.nft_map.push({
            pubkey: largestAccounts.value[0].address.toString(),
            account: largestAccountInfo.value,
            info: info,
            meta: meta,
            data: await fetch_data_url(meta.data.uri),
          });
        }
      }
      this.is_loading = false;
    },
  },
});

async function fetch_data_url(url: string) {
  try {
    return await axios.get(url).then((resp) => {
      return resp.data;
    });
  } catch (err) {
    console.warn(err);
    return undefined;
  }
}
