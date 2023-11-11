<script setup lang="ts">
import { onMounted, ref } from 'vue';
import RaffleAddPrize from 'components/raffle/RaffleAddPrize.vue';
import RaffleBuyTicket from 'components/raffle/RaffleBuyTicket.vue';
import RaffleRevealWinnert from 'components/raffle/RaffleRevealWinner.vue';
import RaffleStateBadge from 'components/raffle/RaffleStateBadge.vue';
import RaffleClaimPirze from 'components/raffle/RaffleClaimPrize.vue';
import RaffleClose from 'components/raffle/RaffleClose.vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import RaffleCollectProceeds from 'components/raffle/RaffleCollectProceeds.vue';
import { useGlobalStore } from 'stores/globalStore';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import AccountsTable from 'components/tables/AccountsTable.vue';

const props = defineProps(['raffle', 'is_admin']);
const entrants = ref();

const accounts = ref();

onMounted(async () => {
  const { pg_raffle } = useWorkspaceAdapter();

  entrants.value = await pg_raffle.value.account.entrants.fetch(
    props.raffle.account.entrants,
  );

  accounts.value =
    await useGlobalStore().connection.getParsedTokenAccountsByOwner(
      props.raffle.publicKey,
      {
        programId: TOKEN_PROGRAM_ID,
      },
    );
});
</script>

<template>
  <q-card flat bordered>
    <q-img width="200px" v-if="raffle.account.url" :src="raffle.account.url" />
    <q-img width="200px" v-else src="snb_icon.svg" />

    <q-card-section>
      <RaffleStateBadge :raffle="raffle" :entrants="entrants" />

      <div class="text-h5 q-mt-sm q-mb-xs">{{ raffle.account.name }}</div>
      <div class="text-caption text-grey">
        {{ raffle.account.description }}
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row">
        <div class="col text-overline">Price per Ticket</div>
        <div class="col text-overline text-orange-9">
          {{
            raffle.account.ticketPrice *
            Math.pow(10, -raffle.account.ticketDecimals)
          }}
        </div>
      </div>
      <div class="row">
        <div class="col text-overline">Ticket Mint</div>
        <div class="col text-overline text-orange-9">
          {{ raffle.account.ticketTokenMint.toString().slice(0, 15) }}...
        </div>
      </div>
      <div class="row">
        <div class="col text-overline">Prize Mint</div>
        <div class="col text-overline text-orange-9">
          {{ raffle.account.prizeTokenMint.toString().slice(0, 15) }}...
        </div>
      </div>
      <div class="row">
        <div class="col text-overline">Winner</div>
        <div class="col text-overline text-orange-9">
          {{ raffle.account.winner.toString().slice(0, 15) }}...
        </div>
      </div>
    </q-card-section>

    <q-card-actions>
      <p>
        {{ raffle.account.randomness ?? '' }}
      </p>
    </q-card-actions>

    <q-card-actions>
      <RaffleAddPrize class="col" :raffle="raffle" :is_admin="is_admin" />
    </q-card-actions>

    <q-card-actions>
      <RaffleRevealWinnert :raffle="raffle" :is_admin="is_admin" />
    </q-card-actions>

    <q-card-actions>
      <RaffleClaimPirze :raffle="raffle" :is_admin="is_admin" />
    </q-card-actions>

    <q-card-actions>
      <RaffleCollectProceeds :raffle="raffle" :is_admin="is_admin" />
    </q-card-actions>

    <q-card-actions>
      <RaffleBuyTicket
        :raffle="raffle"
        :is_admin="is_admin"
        :entrants="entrants"
      />
    </q-card-actions>

    <q-card-actions>
      <RaffleClose
        v-if="
          is_admin && (!raffle.account.isRunning || raffle.account.isClaimed)
        "
        :raffle="raffle"
      />
    </q-card-actions>

    <q-card-actions>
      <AccountsTable :accounts="accounts" />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
