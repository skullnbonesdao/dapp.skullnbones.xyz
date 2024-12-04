<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
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
import { PublicKey } from '@solana/web3.js';
import TicketsTable from 'components/tables/TicketsTable.vue';
import RaffleLinks from 'components/raffle/RaffleLinks.vue';
import { useRPCStore } from 'stores/rpcStore';
import RaffleToggleMode from 'components/raffle/RaffleToggleMode.vue';
import { format_address } from '../../functions/format_address';
import { retryFunction } from 'src/solana/retryFunction';
import { useTokenListStore } from '../../solana/tokens/TokenListStore';
import RaffleEdit from 'components/raffle/RaffleEdit.vue';
import { copyToClipboard } from 'src/functions/copyToClipboard';

const props = defineProps(['raffle', 'is_admin']);
const ticketsAccount = ref();
const accounts = ref();
const tickets = ref();

async function loadTicketsAccounts() {
  const { pg_raffle } = useWorkspaceAdapter();

  ticketsAccount.value = (await pg_raffle.value.account.tickets.fetch(
    props.raffle.account.tickets,
  )) as any;

  console.log(ticketsAccount.value);
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

async function loadTickets() {
  const { pg_raffle } = useWorkspaceAdapter();

  const accountInfo = await pg_raffle.value.account.tickets.getAccountInfo(
    props.raffle.account.tickets,
  );

  let wallets: PublicKey[] = [];

  for (let i = 0; i < ticketsAccount.value.total; i++) {
    let bytes = getEntrant(accountInfo.data, i);
    wallets.push(bytes);
  }

  const walllet_strings = wallets.map((w) => w.toString());

  const array = walllet_strings.reduce((accumulator, value) => {
    return {
      ...accumulator,
      [value]: (accumulator[value] || 0) + 1,
    };
  }, {});

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
  await loadTicketsAccounts();
  await loadTokenAccounts;
  await retryFunction(loadTickets);
});

function getRaffleImage() {
  if (props.raffle.account.url) return props.raffle.account.url;
  else
    console.log(
      useTokenListStore().tokenList.find(
        (token) => token.address === props.raffle.account.prizeMint.toString(),
      ),
    );
  return (
    useTokenListStore().tokenList.find(
      (token) => token.address === props.raffle.account.prizeMint.toString(),
    )?.logoURI ?? 'snb_icon.svg'
  );
}

function dummy() {
  format_address('none');
}

const raffleImage = computed(() =>
  props.raffle.account.url.length > 0
    ? props.raffle.account.url.toString()
    : 'unknown.svg',
);
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

    <q-expansion-item v-if="!is_admin" icon="info" label="Details">
      <q-card flat>
        <q-separator />
        <q-card-section>
          <AccountsTable :accounts="accounts" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <TicketsTable :entrants="tickets" />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <RaffleLinks :raffle="raffle" :entrants="tickets" class="q-pb-md" />
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-separator />
    <q-card-section v-if="is_admin">
      <RafflePrepare
        v-if="Object.keys(raffle.account.state)[0] == 'created'"
        :raffle="raffle"
      />
    </q-card-section>

    <q-card-actions
      v-if="Object.keys(raffle.account.state)[0] == 'running' && !is_admin"
    >
      <RaffleBuyTicket :raffle="raffle" :tickets="ticketsAccount" />
    </q-card-actions>

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
