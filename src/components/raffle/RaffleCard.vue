<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import RafflePrepare from 'components/raffle/RafflePrepare.vue';
import RaffleBuyTicket from 'components/raffle/RaffleBuyTicket.vue';
import RaffleRevealWinnert from 'components/raffle/RaffleRevealWinner.vue';
import RaffleStateBadge from 'components/raffle/RaffleStateBadge.vue';
import RaffleClaimPirze from 'components/raffle/RaffleClaimPrize.vue';
import RaffleClose from 'components/raffle/RaffleClose.vue';
import { useWorkspaceAdapter } from 'src/solana/connector';
import RaffleClaimTickets from 'components/raffle/RaffleClaimTickets.vue';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import AccountsTable from 'components/tables/AccountsTable.vue';
import IconFromSeed from 'components/icons/IconFromSeed.vue';
import TicketsTable from 'components/tables/TicketsTable.vue';
import RaffleLinks from 'components/raffle/RaffleLinks.vue';
import { useRPCStore } from 'stores/rpcStore';
import RaffleToggleMode from 'components/raffle/RaffleToggleMode.vue';
import RaffleEdit from 'components/raffle/RaffleEdit.vue';
import { copyToClipboard } from 'src/functions/copyToClipboard';
import { retryFunction } from 'src/solana/retryFunction';
import { format_address } from '../../functions/format_address';
import { useTokenListStore } from '../../solana/tokens/TokenListStore';

const props = defineProps(['raffle', 'is_admin']);
const ticketsAccount = ref();
const accounts = ref();
const tickets = ref();

async function loadTicketsAccounts() {
  const { pg_raffle } = useWorkspaceAdapter();

  ticketsAccount.value = (await pg_raffle.value.account.tickets.fetch(
    props.raffle.account.tickets,
  )) as any;
}

async function loadTokenAccounts() {
  accounts.value =
    (await useRPCStore().connection.getParsedTokenAccountsByOwner(
      props.raffle.publicKey,
      {
        programId: TOKEN_PROGRAM_ID,
      },
    )) as never;
}

onMounted(async () => {
  await retryFunction(loadTicketsAccounts);
  await retryFunction(loadTokenAccounts);
});

watch(
  () => props.raffle,
  async () => {
    await retryFunction(loadTicketsAccounts);
    await retryFunction(loadTokenAccounts);
  },
);

const raffleImage = computed(() =>
  props.raffle.account.url.length > 0
    ? props.raffle.account.url.toString()
    : 'unknown.svg',
);

format_address('');
useTokenListStore();
</script>

<template>
  <q-card square flat>
    <q-img height="200px" :src="raffleImage" />

    <q-card-section>
      <RaffleStateBadge :raffle="raffle" :tickets="ticketsAccount" />
      <div class="text-h5 q-mt-sm q-mb-xs">{{ raffle.account.name }}</div>
      <div class="text-caption text-grey">
        {{ raffle.account.description }}
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="functions" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6">
              {{ ticketsAccount?.total }} Tickets</q-item-label
            >
            <q-item-label class="text-accent" caption
              >Total tickets</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="paid" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-h6"
              >{{
                (
                  raffle.account.ticketPrice.toNumber() *
                  Math.pow(10, -raffle.account.ticketDecimals)
                ).toFixed(2)
              }}
              {{
                useTokenListStore().tokenList.find(
                  (t) => t.address == raffle.account.ticketMint.toString(),
                )?.symbol
              }}
            </q-item-label>
            <q-item-label class="text-accent" caption
              >Price per ticket</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="amber" name="local_movies" />
          </q-item-section>

          <q-item-section class="q-gutter-y-md">
            <div @click="copyToClipboard(raffle.account.prizeMint.toString())">
              <q-item-label class="q-pt-md text-overline">
                {{
                  useTokenListStore().tokenList.find(
                    (t) => t.address == raffle.account.prizeMint.toString(),
                  )?.name ?? raffle.account.ticketMint.toString()
                }}
              </q-item-label>
              <q-item-label class="text-accent" caption
                >Prize-Mint</q-item-label
              >
            </div>

            <div @click="copyToClipboard(raffle.account.ticketMint.toString())">
              <q-item-label class="text-overline">
                {{
                  useTokenListStore().tokenList.find(
                    (t) => t.address == raffle.account.ticketMint.toString(),
                  )?.name ?? raffle.account.ticketMint.toString()
                }}
              </q-item-label>
              <q-item-label class="text-accent" caption
                >Ticket-Mint</q-item-label
              >
            </div>
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
                format_address(raffle.account.winner?.toString())
              }}</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-separator />
    <q-expansion-item v-if="is_admin" icon="info" label="Edit">
      <RaffleEdit :raffle="raffle" />
    </q-expansion-item>
    <q-separator v-if="is_admin" />

    <q-card-actions
      v-if="Object.keys(raffle.account.state)[0] == 'running' && !is_admin"
    >
      <RaffleBuyTicket :raffle="raffle" :tickets="ticketsAccount" />
    </q-card-actions>
    <q-separator />

    <q-expansion-item v-if="!is_admin" icon="info" label="Details">
      <q-card flat>
        <q-separator />
        <q-card-section>
          <AccountsTable :accounts="accounts" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <TicketsTable :raffle="raffle" :tickets-account="ticketsAccount" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <RaffleLinks :raffle="raffle" :entrants="tickets" class="q-pb-md" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-separator v-if="!is_admin" />

    <q-card-section v-if="is_admin">
      <RafflePrepare
        v-if="Object.keys(raffle.account.state)[0] == 'created'"
        :raffle="raffle"
      />
    </q-card-section>

    <q-card-section class="col" v-if="is_admin">
      <p class="text-overline">Actions</p>
      <div class="col row justify-end q-mx-sm">
        <RaffleRevealWinnert
          :raffle="raffle"
          v-if="Object.keys(raffle.account.state)[0] == 'full'"
        />
        <RaffleClaimPirze
          v-if="
            Object.keys(raffle.account.state)[0] == 'claimprize' ||
            Object.keys(raffle.account.state)[0] == 'ready'
          "
          :raffle="raffle"
        />
        <RaffleClaimTickets
          :raffle="raffle"
          v-if="Object.keys(raffle.account.state)[0] == 'claimtickets'"
        />
        <RaffleToggleMode
          v-if="
            Object.keys(raffle.account.state)[0] == 'ready' ||
            Object.keys(raffle.account.state)[0] == 'running' ||
            Object.keys(raffle.account.state)[0] == 'paused'
          "
          :raffle="raffle"
        />
        <RaffleClose
          v-if="
            Object.keys(raffle.account.state)[0] == 'created' ||
            Object.keys(raffle.account.state)[0] == 'done'
          "
          :raffle="raffle"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="sass"></style>
