<script setup lang="ts">
import { useGlobalStore } from 'stores/globalStore';
import { ref } from 'vue';
import * as anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import { useWallet } from 'solana-wallets-vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SystemProgram, SYSVAR_RENT_PUBKEY } from '@solana/web3.js';
import { Notify } from 'quasar';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import { handle_confirmation } from 'components/messages/handle_confirmation';
import { format_address } from 'src/functions/format_address';

const input_prize_count = ref(1);
const input_prize_url = ref('');
const input_account_selected = ref();

const props = defineProps(['raffle', 'is_admin']);

async function add_prize_to_raffle() {
  const { pg_raffle } = useWorkspaceAdapter();

  const prize_mint = new anchor.web3.PublicKey(
    input_account_selected.value.account.data.parsed.info.mint.toString(),
  );

  const ata = (
    await useGlobalStore().connection.getParsedTokenAccountsByOwner(
      useWallet().publicKey.value!,
      { mint: prize_mint },
    )
  ).value[0].pubkey;

  const raffle = new anchor.web3.PublicKey(props.raffle.publicKey.toString());

  let [prize_vault, prize_vault_bump] =
    anchor.web3.PublicKey.findProgramAddressSync(
      [anchor.utils.bytes.utf8.encode('vault'), raffle.toBytes()],
      pg_raffle.value.programId,
    );

  const account_info =
    await useGlobalStore().connection.getParsedAccountInfo(prize_mint);

  console.log(account_info.value?.data.parsed.info.decimals);

  try {
    const signature = await pg_raffle.value.methods
      .addPrize(
        new BN(
          input_prize_count.value *
            Math.pow(10, account_info.value?.data.parsed.info.decimals),
        ),
        new BN(account_info.value?.data.parsed.info.decimals),
        input_prize_url.value,
      )
      .accounts({
        raffle: raffle,
        creator: useWallet().publicKey.value,
        from: ata,
        prizeVault: prize_vault,
        prizeMint: prize_mint,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
      })
      .rpc();

    console.log(signature);

    await handle_confirmation(signature);
  } catch (err) {
    Notify.create({
      color: 'red',
      message: `${err}`,
      timeout: 5000,
    });
  }
}
</script>

<template>
  <div
    class="row shadow-2 q-pa-md"
    v-if="
      is_admin &&
      raffle.account.prizeTokenMint.toString() ===
        '11111111111111111111111111111111'
    "
  >
    <p>Prize</p>
    <div class="row q-gutter-x-sm">
      <q-btn-dropdown
        class="col"
        color="primary"
        :label="
          input_account_selected
            ? format_address(
                input_account_selected.account.data.parsed.info.mint,
              )
            : 'Select Prize'
        "
      >
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="input_account_selected = account"
            :key="account"
            v-for="account in useGlobalStore().token_accounts"
          >
            {{ account.account.data.parsed.info.mint }}
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-input
        class="col-2"
        outlined
        v-model="input_prize_count"
        type="number"
        label="Count"
      />
      <q-btn
        class="col-2"
        color="primary"
        icon="send"
        @click="add_prize_to_raffle()"
      />
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
