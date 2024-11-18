import { PublicKey } from '@solana/web3.js';

export interface Whitelist {
  authority: PublicKey;
  name: string;
  hasChilds: boolean;
  accessCount: number;
}

export interface WhitelistEntry {
  parent: PublicKey;
  whitelisted: PublicKey;
}

export class WhitelistBuilder {
  constructor() {
    return this;
  }
}
