import { BN } from '@coral-xyz/anchor';

export function calcAmountToTransfer(amount: number, decimals: number): BN {
  return new BN(amount * 10 ** decimals);
}
