import { PublicKey } from '@solana/web3.js';
import { BN } from '@coral-xyz/anchor';

export type RegisteredStake = {
  authority: PublicKey;
  stakeMint: PublicKey;
  rewardMint: PublicKey;
  currentPeriod: number;
  rewardMultiplier: BN;
  cooldownPeriod: BN;
  bump: number;
};

export type StakingAccount = {
  owner: PublicKey;
  registeredStake: PublicKey;
  stakeMint: PublicKey;
  totalStake: BN;
  activeStake: BN;
  pendingRewards: BN;
  paidRewards: BN;
  currentPeriod: number;
  stakedAtTs: BN;
  lastPendingRewardCalcTs: BN;
  lastHarvestTs: BN;
  unstakedTs: BN;
  bump: number;
};

export type StakingVars = {
  authority: PublicKey;
  bump: number;
};