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
        new BN(input_prize_count.value),
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
    Notify.create({
      message: 'TX-Signature: ' + signature,
      timeout: 5000,
    });
    handle_confirmation(signature);
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
    class="col q-gutter-y-md q-pb-md"
    v-if="
      is_admin &&
      raffle.account.prizeTokenMint.toString() !=
        '11111111111111111111111111111111'
    "
  >
    <q-separator />
    <p class="text-h5">Image URL</p>

    <div class="row q-gutter-x-sm">
      <q-input
        class="col"
        outlined
        v-model="input_prize_url"
        type="text"
        label="Image-URL"
      />
      <q-btn class="col-2" size="md" color="primary" @click="edit_image_url()"
        >Apply</q-btn
      >
    </div>

    <q-separator />
  </div>
</template>

<style scoped lang="sass"></style>
