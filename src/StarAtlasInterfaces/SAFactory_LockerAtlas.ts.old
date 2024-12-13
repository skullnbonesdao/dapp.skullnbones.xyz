import { Connection, PublicKey } from '@solana/web3.js';
import * as multisig from '@sqds/multisig';
import {
  cancelUnstakeInstruction,
  createStakingAccountInstruction,
  getRegisteredStake,
  getStakingAccount,
  harvestRewardsInstruction,
  stakeTokensInstruction,
  unstakeTokensInstruction,
  withdrawTokensInstruction,
} from '@staratlas/factory';
import { useRPCStore } from 'stores/rpcStore';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { ASSOCIATED_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';
import { BN } from '@coral-xyz/anchor';
import { LOCKER_TOKEN_DECIMALS } from 'stores/globalStarAtlasLockerStore';

const ATLAS = new PublicKey('ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx');
const POLIS = new PublicKey('poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk');

const ATLAS_LOCKER_PROGRAM_AUTH = new PublicKey(
  'ATLkZsBofSKG845dNFpNoUyMciGpeH29BCbMqYFUoxzU',
);
const ATLAS_LOCKER = new PublicKey(
  'ATLocKpzDbTokxgvnLew3d7drZkEzLzDpzwgrgWKDbmc',
);

export class SAFactory_LockerAtlas {
  public multisigPDA: PublicKey | undefined;
  public vaultPDA: PublicKey | undefined;
  public registeredStakeAtlas: PublicKey | undefined;
  public stakingAccountAtlas: PublicKey | undefined;

  async init(multisigPDA: PublicKey) {
    this.multisigPDA = multisigPDA;
    this._setVaultPDA();
    await this._setRegisteredStakeAtlas();
    await this._setStakingAccountAtlas();
  }

  _setVaultPDA() {
    const [vaultPda] = multisig.getVaultPda({
      multisigPda: new PublicKey(this.multisigPDA),
      index: 0,
    });
    this.vaultPDA = vaultPda;
  }

  async _setRegisteredStakeAtlas() {
    const [registeredStakeAtlas] = await getRegisteredStake(
      ATLAS_LOCKER,
      ATLAS_LOCKER_PROGRAM_AUTH,
      ATLAS,
      POLIS,
    );
    this.registeredStakeAtlas = registeredStakeAtlas;
  }

  async _setStakingAccountAtlas() {
    const [stakingAccountAtlas] = await getStakingAccount(
      ATLAS_LOCKER,
      this.vaultPDA,
      this.registeredStakeAtlas,
    );
    this.stakingAccountAtlas = stakingAccountAtlas;
  }

  //Actions

  async buildCreateStatingAccount() {
    return await createStakingAccountInstruction({
      connection: useRPCStore().connection as Connection,
      user: this.vaultPDA,
      registeredStake: this.registeredStakeAtlas,
      programId: ATLAS_LOCKER,
    });
  }

  async buildStakeTokens(amount: number) {
    const [ATLAS_ATA] = PublicKey.findProgramAddressSync(
      [this.vaultPDA.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), ATLAS.toBuffer()],
      ASSOCIATED_PROGRAM_ID,
    );

    return await stakeTokensInstruction({
      connection: useRPCStore().connection as Connection,
      user: this.vaultPDA,
      stakeMint: ATLAS,
      tokenSource: ATLAS_ATA,
      stakingAccount: this.stakingAccountAtlas,
      stakeQuantity: new BN(
        parseFloat(amount.toString()) * Math.pow(10, LOCKER_TOKEN_DECIMALS),
      ),
      registeredStake: this.registeredStakeAtlas,
      programId: ATLAS_LOCKER,
    });
  }

  async buildHarvestRewards() {
    return await harvestRewardsInstruction({
      connection: useRPCStore().connection as Connection,
      user: this.vaultPDA,
      rewardMint: POLIS,
      registeredStake: this.registeredStakeAtlas,
      stakingAccount: this.stakingAccountAtlas,
      programId: ATLAS_LOCKER,
    });
  }

  async buildWithdrawTokens() {
    return await withdrawTokensInstruction({
      connection: useRPCStore().connection as Connection,
      user: this.vaultPDA,
      authority: this.vaultPDA,
      stakeMint: ATLAS,
      registeredStake: this.registeredStakeAtlas,
      stakingAccount: this.stakingAccountAtlas,

      programId: ATLAS_LOCKER,
    });
  }

  async buildUnstakeTokens() {
    return await unstakeTokensInstruction({
      connection: useRPCStore().connection as Connection,
      user: this.vaultPDA,
      registeredStake: this.registeredStakeAtlas,
      stakingAccount: this.stakingAccountAtlas,

      programId: ATLAS_LOCKER,
    });
  }

  async buildCancelUnstake() {
    return await cancelUnstakeInstruction({
      connection: useRPCStore().connection as Connection,
      user: this.vaultPDA,
      registeredStake: this.registeredStakeAtlas,
      programId: ATLAS_LOCKER,
    });
  }
}
