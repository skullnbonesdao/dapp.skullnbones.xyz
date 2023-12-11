<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
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
import { format_address } from 'src/functions/format_address';
import { useRaffleStore } from 'stores/globalRaffle';
import { storeToRefs } from 'pinia';
import { PublicKey } from '@solana/web3.js';

import * as borsh from 'borsh';
import { data } from 'autoprefixer';
import TicketsTable from 'components/tables/TicketsTable.vue';

const props = defineProps(['raffle', 'is_admin']);
const entrants = ref();

const accounts = ref();
const expanded = ref(false);

async function update_entrants() {
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
}
const tickets = ref();
async function get_tickets() {
  const { pg_raffle } = useWorkspaceAdapter();

  const accountInfo = await pg_raffle.value.account.entrants.getAccountInfo(
    new PublicKey('GzCeuKQ4MVMHodAjrHQJDZKyX9QoDDUg45c4Ec5a261T'),
  );

  let wallts: PublicKey[] = [];

  for (let i = 0; i < entrants.value.total; i++) {
    let bytes = getEntrant(accountInfo.data, i);
    wallts.push(bytes);
  }

  const walllet_strings = wallts.map((w) => w.toString());
  console.log(walllet_strings);

  let objAllRepition = {};

  const array = walllet_strings.reduce((accumulator, value) => {
    return {
      ...accumulator,
      [value]: (accumulator[value] || 0) + 1,
    };
  }, {});

  console.log(array);

  tickets.value = Object.entries(array).flatMap((e) => {
    return {
      address: e[0],
      amount: e[1],
    };
  });
}

function getEntrant(entrantsData: Uint8Array[], index: number): PublicKey {
  const startIndex: number = 8 + 4 + 4 + 32 * index;
  const endIndex: number = startIndex + 32;

  // Assuming entrantsData is a Uint8Array, create a slice from start to end index
  const slice = entrantsData.slice(startIndex, endIndex);

  // Call the Pubkey.new method with the slice

  return new PublicKey(slice);
}

onMounted(async () => {
  await update_entrants();
  await get_tickets();
});

const { _updateCount } = storeToRefs(useRaffleStore());

watch(_updateCount, async () => {
  await update_entrants();
});
</script>

<template>
  <q-card square flat>
    <q-img height="200px" v-if="raffle.account.url" :src="raffle.account.url" />

    <q-img
      height="200px"
      v-else
      :src="
        useGlobalStore().token_list.find(
          (t) => t.address == raffle.account.prizeTokenMint,
        )?.logoURI
      "
    />

    <q-card-section>
      <RaffleStateBadge :raffle="raffle" :entrants="entrants" />

      <div class="text-h5 q-mt-sm q-mb-xs">{{ raffle.account.name }}</div>
      <div class="text-caption text-grey">
        {{ raffle.account.description }}
      </div>
    </q-card-section>

    <q-card-section>
      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="functions" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6"> {{ entrants?.max }}</q-item-label>
            <q-item-label class="text-orange-9" caption
              >Total tickets</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="paid" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6">{{
              (
                raffle.account.ticketPrice.toNumber() *
                Math.pow(10, -raffle.account.ticketDecimals)
              ).toFixed(2)
            }}</q-item-label>
            <q-item-label class="text-orange-9" caption
              >Price per ticket</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="local_movies" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-overline">
              {{
                useGlobalStore().token_list.find(
                  (t) => t.address == raffle.account.ticketTokenMint,
                )?.symbol
              }}
            </q-item-label>
            <q-item-label class="text-orange-9" caption
              >Ticket-Mint</q-item-label
            >

            <q-item-label class="q-pt-md text-overline">
              {{
                useGlobalStore().token_list.find(
                  (t) => t.address == raffle.account.prizeTokenMint,
                )?.name
              }}
              [{{
                useGlobalStore().token_list.find(
                  (t) => t.address == raffle.account.prizeTokenMint,
                )?.symbol
              }}]
            </q-item-label>
            <q-item-label class="text-orange-9" caption
              >Prize-Mint</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable v-if="raffle.account.randomness != null">
          <q-item-section avatar>
            <IconFromSeed
              style="width: 100px"
              :seed="raffle.account?.winner?.toString()"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6" l>Winner</q-item-label>
            <q-item-label class="text-orange-9" caption>
              {{
                format_address(raffle.account.winner.toString())
              }}</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-btn
      class="full-width"
      :icon="expanded ? 'expand_less' : ' expand_more'"
      @click="expanded = !expanded"
    ></q-btn>

    <q-slide-transition>
      <AccountsTable :accounts="accounts" v-show="expanded" />
    </q-slide-transition>

    <q-slide-transition>
      <TicketsTable :entrads="tickets" v-show="expanded" />
    </q-slide-transition>

    <RaffleAddPrize :raffle="raffle" :is_admin="is_admin" />
    <RaffleEditImageUrl class="q-mx-sm" :raffle="raffle" :is_admin="is_admin" />

    <q-card-actions class="row q-gutter-y-sm justify-center q-mx-sm">
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
