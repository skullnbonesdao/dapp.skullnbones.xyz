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
    nft_accounts: [] as I_AccountNFT[],
    token_map: [] as I_TokenMap[],
    nft_map: [] as I_NFTMap[],
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
    async update_accounts_nft() {
      if (useWallet().publicKey.value) {
        this.nft_accounts = (await getParsedNftAccountsByOwner({
          publicAddress: useWallet().publicKey.value!.toString(),
          connection: useGlobalStore().connection as Connection,
        })) as I_AccountNFT[];

        this.nft_map = [];

        for (const meta of this.nft_accounts) {
          try {
            const ata = (
              await getTokenAccount(
                useGlobalStore().connection as Connection,
                useWallet().publicKey.value!,
                new PublicKey(meta.mint),
              )
            ).tokenAccount as PublicKey;

            const account_info = (
              await useGlobalStore().connection.getParsedAccountInfo(ata, {
                commitment: 'confirmed',
              })
            ).value;

            this.nft_map.push({
              pubkey: ata.toString(),
              account: account_info as unknown,
              meta: meta,
              data: await axios.get(meta.data.uri).then((resp) => {
                return resp.data;
              }),
            });
          } catch (err) {
            console.warn(err);
          }
        }
      }
    },
  },
});
