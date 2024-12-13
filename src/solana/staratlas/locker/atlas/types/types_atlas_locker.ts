import { PublicKey } from '@solana/web3.js';

export type RegisteredStake = {
  authority: PublicKey;
  stakeMint: PublicKey;
  rewardMint: PublicKey;
  currentPeriod: number;
  rewardMultiplier: number;
  cooldownPeriod: number;
  bump: number;
};

export type StakingAccount = {
  owner: PublicKey;
  registeredStake: PublicKey;
  stakeMint: PublicKey;
  totalStake: number;
  activeStake: number;
  pendingRewards: number;
  paidRewards: number;
  currentPeriod: number;
  stakedAtTs: number;
  lastPendingRewardCalcTs: number;
  lastHarvestTs: number;
  unstakedTs: number;
  bump: number;
};

export type StakingVars = {
  authority: PublicKey;
  bump: number;
};