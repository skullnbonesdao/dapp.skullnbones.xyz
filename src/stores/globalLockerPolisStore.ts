import { defineStore } from 'pinia';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { useLocalStorage } from '@vueuse/core';
import * as multisig from '@sqds/multisig';
import { useRPCStore } from 'stores/rpcStore';
import { useAnchorWallet, useWallet } from 'solana-wallets-vue';
import { handle_confirmation } from 'components/messages/handle_confirmation';

import { SAFactory_LockerPolis } from 'src/StarAtlasInterfaces/SAFactory_LockerPolis';
import { build_send } from 'src/StarAtlasInterfaces/Squads_TXPacker';

const MEMO_PREFIX_POLIS = '[POLIS-LOCKER] ';
const DEBUG = true;
export const useLockerPolisStore = defineStore('globalLockerPolisStore', {
  state: () => ({
    lockerFactory: new SAFactory_LockerPolis(),
    multisigPDA: useLocalStorage('multisigPDA', ''),
    vaultPDA: {} as PublicKey,
  }),

  getters: {},
  actions: {
    async init() {
      if (useAnchorWallet().value) {
        //setVaultPDA
        const [vaultPda, bump] = multisig.getVaultPda({
          multisigPda: new PublicKey(this.multisigPDA),
          index: 0,
        });
        this.vaultPDA = vaultPda;
        //this.lockerFactory.init(useAnchorWallet().value!, vaultPda, vaultPda);
        // this.lockerFactory.init(
        //   useAnchorWallet().value!,
        //   new PublicKey('CK76hq8seq1eQ5CpSJ1SHmdYovZH8ZEDKzCnTCCfPoNM'),
        //   new PublicKey('CK76hq8seq1eQ5CpSJ1SHmdYovZH8ZEDKzCnTCCfPoNM'),
        // );

        this.lockerFactory.init(
          useAnchorWallet().value!,
          useWallet().publicKey.value!,
          useWallet().publicKey.value!,
        );
        await this.lockerFactory.setAccounts();
      }
    },

    async make_createATAs() {
      const transaction = await this.lockerFactory.buildCreateAccounts();
      console.log(transaction);
      await send(
        'Create Locker Accounts',
        transaction,
        this.vaultPDA,
        new PublicKey(this.multisigPDA),
      );
    },

    async make_createLocker(duration: number, amount: number) {
      const transaction = await this.lockerFactory.buildCreateLocker(
        duration,
        amount,
      );
      console.log(transaction);
      await send(
        'Create Locker',
        transaction,
        this.vaultPDA,
        new PublicKey(this.multisigPDA),
      );
    },
  },
});

async function send(
  msg: string,
  transaction: Transaction,
  vaultPDA: PublicKey,
  multisigPDA: PublicKey,
) {
  const { sendTransaction, publicKey } = useWallet();

  if (DEBUG) {
    await sendTransaction(transaction, useRPCStore().connection as Connection);
  } else {
    const signature = await build_send(
      MEMO_PREFIX_POLIS + msg,
      transaction.instructions,
      vaultPDA,
      multisigPDA,
    );
    await handle_confirmation(signature);
  }
}
