import { PublicKey } from '@solana/web3.js';

export type Proxy = {
  escrow: PublicKey;
  owner: PublicKey;
  tokenMint: PublicKey;
  bump: number;
  proxyTokenAccount: PublicKey;
};

export type ProxyEscrow = {
  escrowOwner: PublicKey;
  bump: number;
  amount: number;
  escrowStartedAt: number;
  escrowEndsAt: number;
  rewardsLastClaimedAt: number;
  amountClaimed: number;
};

export type RegisteredLocker = {
  admin: PublicKey;
  bump: number;
  tokenMint: PublicKey;
  locker: PublicKey;
  padding: number[];
  rewardAmountPaidPerPeriodEra0: number[];
  rewardAmountPaidPerPeriodEra1: number[];
  rewardAmountPaidPerPeriodEra2: number[];
};

export type TreasuryAuthority = {
  locker: PublicKey;
  bump: number;
};

export type ClaimRewardsEvent = {
  escrowOwner: PublicKey;
  locker: PublicKey;
  tokenMint: PublicKey;
  amountClaimed: number;
  prevRewardsLastClaimedAt: number;
  rewardsLastClaimedAt: number;
};

export type NewProxyEscrowEvent = {
  proxyEscrow: PublicKey;
  owner: PublicKey;
  timestamp: number;
};

export type NewProxyEvent = {
  proxy: PublicKey;
  proxyOwner: PublicKey;
  proxyEscrow: PublicKey;
  tokenMint: PublicKey;
  timestamp: number;
};

export type ProxyExitEscrowEvent = {
  escrowOwner: PublicKey;
  locker: PublicKey;
  timestamp: number;
  lockerSupply: number;
  releasedAmount: number;
};

export type ProxyLockEvent = {
  locker: PublicKey;
  escrowOwner: PublicKey;
  tokenMint: PublicKey;
  amount: number;
  lockerSupply: number;
  duration: number;
  prevEscrowEndsAt: number;
  nextEscrowEndsAt: number;
  nextEscrowStartedAt: number;
};