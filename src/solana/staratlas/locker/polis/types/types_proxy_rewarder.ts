import { PublicKey } from '@solana/web3.js';
import { BN } from '@coral-xyz/anchor';

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
  amount: BN;
  escrowStartedAt: BN;
  escrowEndsAt: BN;
  rewardsLastClaimedAt: BN;
  amountClaimed: BN;
};

export type RegisteredLocker = {
  admin: PublicKey;
  bump: number;
  tokenMint: PublicKey;
  locker: PublicKey;
  padding: number[];
  rewardAmountPaidPerPeriodEra0: BN[];
  rewardAmountPaidPerPeriodEra1: BN[];
  rewardAmountPaidPerPeriodEra2: BN[];
};

export type TreasuryAuthority = {
  locker: PublicKey;
  bump: number;
};

export type ClaimRewardsEvent = {
  escrowOwner: PublicKey;
  locker: PublicKey;
  tokenMint: PublicKey;
  amountClaimed: BN;
  prevRewardsLastClaimedAt: BN;
  rewardsLastClaimedAt: BN;
};

export type NewProxyEscrowEvent = {
  proxyEscrow: PublicKey;
  owner: PublicKey;
  timestamp: BN;
};

export type NewProxyEvent = {
  proxy: PublicKey;
  proxyOwner: PublicKey;
  proxyEscrow: PublicKey;
  tokenMint: PublicKey;
  timestamp: BN;
};

export type ProxyExitEscrowEvent = {
  escrowOwner: PublicKey;
  locker: PublicKey;
  timestamp: BN;
  lockerSupply: BN;
  releasedAmount: BN;
};

export type ProxyLockEvent = {
  locker: PublicKey;
  escrowOwner: PublicKey;
  tokenMint: PublicKey;
  amount: BN;
  lockerSupply: BN;
  duration: BN;
  prevEscrowEndsAt: BN;
  nextEscrowEndsAt: BN;
  nextEscrowStartedAt: BN;
};