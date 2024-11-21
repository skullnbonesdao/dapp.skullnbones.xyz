import { defineStore } from 'pinia';
import { useRPCStore } from 'stores/rpcStore';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { AccountInfo, ParsedAccountData } from '@solana/web3.js';
import { IToken } from 'stores/tokenlists/solana.tokenlist/src/types/ITokenList';
import { useTokenListStore } from 'src/solana/tokens/TokenListStore';

export interface AccountStore {
  pubkey: string;
  mint: string;
  account: AccountInfo<ParsedAccountData>;
  info: IToken | undefined;
  uiAmount: number;
  decimals: number;
}

export const useAccountStore = defineStore('accountStore', {
  state: () => ({
    accounts: [] as AccountStore[],
  }),
  getters: {
    getAccountsBalanceNotZero(state) {
      return state.accounts.filter((account) => account.uiAmount > 0);
    },
  },
  actions: {
    async updateStore() {
      if (!useWallet().publicKey.value) return;
      const accounts =
        await useRPCStore().connection.getParsedTokenAccountsByOwner(
          useWallet().publicKey.value!,
          {
            programId: TOKEN_PROGRAM_ID,
          },
        );

      this.accounts = [];
      accounts.value.forEach((account) => {
        this.accounts.push({
          pubkey: account.pubkey.toString(),
          mint: account.account.data.parsed.info.mint.toString(),
          account: account.account,
          uiAmount: account.account.data.parsed.info.tokenAmount.uiAmount,
          decimals: account.account.data.parsed.info.tokenAmount.decimals,
          info: useTokenListStore().tokenList.find(
            (t) =>
              t.address === account.account.data.parsed.info.mint.toString(),
          ),
        });
      });

      console.log('[Updated] AccountStore');
      return;
    },
  },
});