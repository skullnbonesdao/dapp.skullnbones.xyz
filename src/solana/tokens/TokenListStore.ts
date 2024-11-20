import { defineStore } from 'pinia';
import { IToken } from 'stores/tokenlists/solana.tokenlist/src/types/ITokenList';
import * as staratlasCurrencies from 'src/solana/tokens/lists/staratlasCurrencies.json';
import * as staratlasTokens from 'src/solana/tokens/lists/staratlasTokens.json';
import * as devTokens from 'src/solana/tokens/lists/devTokens.json';

export const useTokenListStore = defineStore('tokenListStore', {
  state: () => ({
    tokenList: mergeTokenLists(),
  }),

  getters: {},
  actions: {
    async updateStore() {
      return;
    },
  },
});
function mergeTokenLists() {
  const tokenList: IToken[] = [];

  staratlasCurrencies.tokens.forEach((token) => {
    tokenList.push(token);
  });
  staratlasTokens.tokens.forEach((token) => {
    tokenList.push(token);
  });
  devTokens.tokens.forEach((token) => {
    tokenList.push(token);
  });

  return tokenList;
}
