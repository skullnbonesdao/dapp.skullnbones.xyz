import { defineStore } from 'pinia';
import { useRPCStore } from 'stores/rpcStore';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { AccountInfo, ParsedAccountData, PublicKey } from '@solana/web3.js';
import { IToken } from 'stores/tokenlists/solana.tokenlist/src/types/ITokenList';
import * as staratlasCurrencies from 'src/stores/tokenlists/solana.tokenlist/lists/staratlasCurrencies.json';
import * as staratlasTokens from 'src/stores/tokenlists/solana.tokenlist/lists/staratlasTokens.json';

export interface AccountStore {
  pubkey: PublicKey;
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
    async loadAccounts() {
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
          pubkey: account.pubkey,
          account: account.account,
          uiAmount: account.account.data.parsed.info.tokenAmount.uiAmount,
          decimals: account.account.data.parsed.info.tokenAmount.decimals,
          info: getTokenInfoMint(
            account.account.data.parsed.info.mint.toString(),
          ),
        });
      });

      console.log(this.accounts);
      return;
    },
  },
});

function getTokenInfoMint(mint: string) {
  let token = undefined;

  if (!token) token = staratlasCurrencies.tokens.find((t) => t.address == mint);
  if (!token) token = staratlasTokens.tokens.find((t) => t.address == mint);

  return token;
}
