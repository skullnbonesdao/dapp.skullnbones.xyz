import { PublicKey } from '@solana/web3.js';
import { BN } from '@coral-xyz/anchor';

export type LockerParams = {
  whitelistEnabled: boolean;
  maxStakeVoteMultiplier: number;
  minStakeDuration: BN;
  maxStakeDuration: BN;
  proposalActivationMinVotes: BN;
};

export type Locker = {
  base: PublicKey;
  bump: number;
  tokenMint: PublicKey;
  lockedSupply: BN;
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
  amount: BN;
  escrowStartedAt: BN;
  escrowEndsAt: BN;
  voteDelegate: PublicKey;
};

export type ApproveLockPrivilegeEvent = {
  locker: PublicKey;
  programId: PublicKey;
  owner: PublicKey;
  timestamp: BN;
};

export type ExitEscrowEvent = {
  escrowOwner: PublicKey;
  locker: PublicKey;
  timestamp: BN;
  lockerSupply: BN;
  releasedAmount: BN;
};

export type LockEvent = {
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

export type NewEscrowEvent = {
  escrow: PublicKey;
  escrowOwner: PublicKey;
  locker: PublicKey;
  timestamp: BN;
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
  timestamp: BN;
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