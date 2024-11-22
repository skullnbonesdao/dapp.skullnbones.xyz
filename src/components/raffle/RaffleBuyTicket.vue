<script setup lang="ts">
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/solana/connector';
import { useGlobalWalletStore } from 'stores/globalWallet';
import { useRPCStore } from 'stores/rpcStore';
import { Transaction } from '@solana/web3.js';
import { handleTransaction } from 'src/solana/handleTransaction';
import { useRaffleStore } from 'src/solana/raffle/RaffleStore';
import { getSigner } from 'src/solana/squads/SignerFinder';
import { useAccountStore } from '../../solana/accounts/AccountStore';
import { findWhitelistAddress } from 'src/solana/whitelist/WhitelistInterface';

const input_raffle_ticket_amount = ref();

const props = defineProps(['raffle', 'tickets']);

async function buy_raffle_ticket() {
  const tx = new Transaction();
  await useGlobalWalletStore().update_accounts();

  const pg_raffle = useWorkspaceAdapter()?.pg_raffle.value;
  const pg_whitelist = useWorkspaceAdapter()?.pg_whitelist.value;

  const ticketMint = new anchor.web3.PublicKey(
    props.raffle.account.ticketMint.toString(),
  );

  const ata = (
    await useRPCStore().connection.getParsedTokenAccountsByOwner(getSigner(), {
      mint: ticketMint,
    })
  ).value[0].pubkey;

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());
  let whitelist = findWhitelistAddress();

  try {
    tx.add(
      await pg_raffle?.methods
        .buyTickets(new anchor.BN(input_raffle_ticket_amount.value))
        .accountsPartial({
          signer: getSigner(),
          raffle: raffle,
          entrant: getSigner(),
          ticketsMint: ticketMint,
          from: ata,
          whitelist: whitelist,
          whitelistEntry: anchor.web3.PublicKey.findProgramAddressSync(
            [getSigner()?.toBytes(), whitelist.toBytes()],
            pg_whitelist?.programId,
          )[0],
          whitelistProgram: pg_whitelist?.programId,
        })
        .instruction(),
    );

    await handleTransaction(tx, '[Raffle] buy ticket');
    await useRaffleStore().updateStore();
  } catch (err) {
    Notify.create({
      color: 'danger',
      message: `${err}`,
      timeout: 5000,
    });
  }
}
</script>

<template>
  <div class="col q-pa-sm q-gutter-y-sm">
    <p class="text-overline">Buy Ticket(s)</p>
    <div class="row">
      <q-input
        square
        filled
        outlined
        type="number"
        class="col"
        label="Amount"
        v-model="input_raffle_ticket_amount"
      >
      </q-input>
      <q-btn
        square
        :disable="!input_raffle_ticket_amount"
        color="primary"
        icon="send"
        @click="buy_raffle_ticket()"
      />
    </div>
    <div class="row">
      <div class="col row q-gutter-x-xs text-weight-light">
        <p>Available:</p>
        <p>
          {{
            useAccountStore().accounts?.find(
              (acc) => acc.mint == raffle.account.ticketMint.toString(),
            )?.uiAmount
          }}
        </p>
        <p>
          {{
            useAccountStore().accounts?.find(
              (acc) => acc.mint == raffle.account.ticketMint.toString(),
            )?.info.symbol
          }}
        </p>
      </div>
      <p class="text-caption text-right text-weight-thin">
        0.001◎ fee
        <q-tooltip anchor="bottom right" self="top middle">
          cover deployment costs
        </q-tooltip>
      </p>
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
