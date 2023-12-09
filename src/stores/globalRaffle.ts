import { defineStore } from 'pinia';
import { useWallet } from 'solana-wallets-vue';
import { useWorkspaceAdapter } from 'src/idls/adapter/apapter';
import * as discord from 'webhook-discord';

const IMAGE_URL =
  'https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-ticket-icon-flat-style-png-image_1977183.jpg';

export enum DiscordMessageType {
  'RAFFLE_CREATE',
  'TICKET_BUY',
}

export const RAFLLE_WHITELIST_NAME = 'Crew';

const DISCORD_URL = import.meta.env.VITE_DISCORD_WEBHOOK;

export const useRaffleStore = defineStore('raffleStore', {
  state: () => ({
    _updateCount: 0 as number,
    is_loading: false,
    disocrd_handle: new discord.Webhook(DISCORD_URL),
    raffles: [],
  }),

  getters: {
    get_running_raffles(state) {
      return state.raffles.filter(
        (raffle) => raffle.account.isRunning === true,
      );
    },
  },
  actions: {
    async update_raffles() {
      const { pg_raffle } = useWorkspaceAdapter();
      if (useWallet().publicKey.value) {
        this.is_loading = true;
        this.raffles = await pg_raffle.value.account.raffle.all();
        this._updateCount++;
      }
      this.is_loading = false;
    },
    async send_discord_webhook(
      type: DiscordMessageType,
      title: string,
      description: string,
      ticket_count: number,
      ticket_price?: number,
    ) {
      // this.disocrd_handle.setUsername('Raffle');
      // this.disocrd_handle.setAvatar(IMAGE_URL);

      let embed;
      switch (type) {
        case DiscordMessageType.RAFFLE_CREATE:
          embed = new discord.MessageBuilder()
            .setName('Raffle - Create')
            .setAvatar(IMAGE_URL)
            .setTitle(title)
            .setColor('#ff9f2a')
            .addField('Total tickets:', ticket_count.toString(), true)
            .addField(
              'Price per ticket:',
              ticket_price?.toString() ?? 'none',
              true,
            );

          break;
        case DiscordMessageType.TICKET_BUY:
          embed = new discord.MessageBuilder()
            .setName('Ticket - Buy')
            .setAvatar(IMAGE_URL)
            .setTitle(title)
            .setColor('#ff9f2a')
            .addField('Tickets sold:', ticket_count.toString(), true);
          break;
      }

      if (embed) await useRaffleStore().disocrd_handle.send(embed);

      console.log(useRaffleStore().disocrd_handle);
    },

    async send_buy_message_discord(
      raffle_name: string,
      raffle_status: string,
      tickets_bought: string,
    ) {
      const embed = new discord.MessageBuilder()
        .setName('Ticket(s) sold...')
        .setAvatar(IMAGE_URL)
        .setColor('#ff9f2a')
        .addField('Raffle:', raffle_name, true)
        .addField('Status:', raffle_status, true)
        .addField('Tickets bought:', tickets_bought, true);
      if (embed) await useRaffleStore().disocrd_handle.send(embed);
    },
  },
});
