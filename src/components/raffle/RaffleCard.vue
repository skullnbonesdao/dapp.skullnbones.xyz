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
import IconFromSeed from 'components/icons/IconFromSeed.vue';
import RaffleEditImageUrl from 'components/raffle/RaffleEditImageUrl.vue';
import { format_address } from '../../functions/format_address';

const props = defineProps(['raffle', 'is_admin']);
const entrants = ref();

const accounts = ref();
const expanded = ref(false);

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
    <q-img height="200px" v-if="raffle.account.url" :src="raffle.account.url" />
    <q-img height="200px" v-else src="snb_icon.svg" />

    <q-card-section>
      <RaffleStateBadge :raffle="raffle" :entrants="entrants" />

      <div class="text-h5 q-mt-sm q-mb-xs">{{ raffle.account.name }}</div>
      <div class="text-caption text-grey">
        {{ raffle.account.description }}
      </div>
    </q-card-section>

    <q-card-section>
      <div class="row">
        <div class="col text-center text-h2 text-orange-9">
          {{
            raffle.account.ticketPrice *
            Math.pow(10, -raffle.account.ticketDecimals)
          }}
        </div>
        <div class="col text-h6">Price per Ticket</div>
      </div>
      <div class="row">
        <div class="col text-overline text-center text-orange-9">
          {{ format_address(raffle.account.ticketTokenMint.toString()) }}
        </div>
        <div class="col text-h6">Ticket</div>
      </div>
      <div class="row">
        <div class="col text-overline text-center text-orange-9">
          {{ format_address(raffle.account.prizeTokenMint.toString()) }}
        </div>
        <div class="col text-h6">Prize</div>
      </div>

      <div class="row" v-if="raffle?.account?.randomness">
        <IconFromSeed
          class="col"
          :seed="raffle.account.randomness.toString()"
        />
        <div class="col text-overline" style="width: 100px">Randomness</div>
      </div>
      <div class="row" v-if="raffle?.account?.randomness">
        <div class="col text-h6 text-center text-orange-9">
          {{ format_address(raffle.account.winner.toString()) }}
        </div>
        <div class="col text-overline">Winner</div>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-space />
      <q-btn
        color="grey"
        round
        flat
        dense
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>

    <q-slide-transition>
      <AccountsTable :accounts="accounts" v-show="expanded"> </AccountsTable>
    </q-slide-transition>

    <q-card-actions> </q-card-actions>

    <q-card-actions class="q-gutter-y-sm justify-center">
      <RaffleAddPrize :raffle="raffle" :is_admin="is_admin" />
      <RaffleEditImageUrl :raffle="raffle" :is_admin="is_admin" />
      <RaffleRevealWinnert :raffle="raffle" :is_admin="is_admin" />
      <RaffleClaimPirze :raffle="raffle" :is_admin="is_admin" />
      <RaffleCollectProceeds :raffle="raffle" :is_admin="is_admin" />
      <RaffleClose :raffle="raffle" :is_admin="is_admin" />
    </q-card-actions>

    <q-card-actions>
      <RaffleBuyTicket
        :raffle="raffle"
        :is_admin="is_admin"
        :entrants="entrants"
      />
    </q-card-actions>
  </q-card>
</template>

<style scoped lang="sass"></style>
