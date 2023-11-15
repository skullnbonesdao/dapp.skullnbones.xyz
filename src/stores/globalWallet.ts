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

export const NULL_WALLET = '11111111111111111111111111111111';

export const DAPP_ADMIN_WALLET = new PublicKey(
  '3x5vrFFTspsicxrYHMA8SNVW71RMhVkALemXrJFfeQo1',
);

export const RAFLLE_WHITELIST_NAME = 'Crew';

export interface I_AccountMap {
  pubkey: string;
  meta: I_Token;
  info: I_AccountParsedInfo;
  account: AccountInfo<ParsedAccountData>;
}

export const useGlobalWalletStore = defineStore('walletStore', {
  state: () => ({
    _updateCount: 0 as number,
    is_loading: false,
    token_accounts: [],
    token_map: [] as I_AccountMap[],
  }),

  getters: {
    get_account_map(state) {
      console.log(state.token_accounts.account);

      return state.token_accounts.map((account) => {
        const info = account.account.data.parsed.info as I_AccountParsedInfo;

        return {
          pubkey: account.pubkey.toString(),
          info: info,
          account: account,
          meta: useGlobalStore().token_list.find(
            (token) => token.address === info.mint,
          ),
        } as I_AccountMap;
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
          await useGlobalStore().connection.getParsedTokenAccountsByOwner(
            useWallet().publicKey.value!,
            {
              programId: TOKEN_PROGRAM_ID,
            },
          )
        ).value;
      }
      this.is_loading = false;
    },
  },
});
