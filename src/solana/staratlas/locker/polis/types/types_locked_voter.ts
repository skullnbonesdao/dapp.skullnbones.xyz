import { PublicKey } from '@solana/web3.js';

export type LockerParams = {
  whitelistEnabled: boolean;
  maxStakeVoteMultiplier: number;
  minStakeDuration: number;
  maxStakeDuration: number;
  proposalActivationMinVotes: number;
};

export type Locker = {
  base: PublicKey;
  bump: number;
  tokenMint: PublicKey;
  lockedSupply: number;
  governor: PublicKey;
  params: any;
};

export type LockerWhitelistEntry = {
  bump: number;
  locker: PublicKey;
  programId: PublicKey;
  owner: PublicKey;
};

export type Escrow = {
  locker: PublicKey;
  owner: PublicKey;
  bump: number;
  tokens: PublicKey;
  amount: number;
  escrowStartedAt: number;
  escrowEndsAt: number;
  voteDelegate: PublicKey;
};

export type ApproveLockPrivilegeEvent = {
  locker: PublicKey;
  programId: PublicKey;
  owner: PublicKey;
  timestamp: number;
};

export type ExitEscrowEvent = {
  escrowOwner: PublicKey;
  locker: PublicKey;
  timestamp: number;
  lockerSupply: number;
  releasedAmount: number;
};

export type LockEvent = {
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

export type NewEscrowEvent = {
  escrow: PublicKey;
  escrowOwner: PublicKey;
  locker: PublicKey;
  timestamp: number;
};

export type NewLockerEvent = {
  governor: PublicKey;
  locker: PublicKey;
  tokenMint: PublicKey;
  params: any;
};

export type RevokeLockPrivilegeEvent = {
  locker: PublicKey;
  programId: PublicKey;
  timestamp: number;
};

export type LockerSetParamsEvent = {
  locker: PublicKey;
  prevParams: any;
  params: any;
};

export type SetVoteDelegateEvent = {
  escrowOwner: PublicKey;
  oldDelegate: PublicKey;
  newDelegate: PublicKey;
};