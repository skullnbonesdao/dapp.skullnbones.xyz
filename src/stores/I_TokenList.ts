export interface I_TokenList {
  content: I_Tokens[];
}

export interface I_Tokens {
  address?: string;
  chainId?: number;
  name?: string;
  symbol?: string;
  verified?: boolean;
  decimals?: number;
  holders?: number | null;
  logoURI?: null | string;
  tags?: string[];
  extensions?: Extensions;
}

export interface Extensions {
  coingeckoId?: string;
}
