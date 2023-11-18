import * as discord from 'discord-webhook-node';
import { useRaffleStore } from 'stores/globalRaffle';

const IMAGE_URL =
  'https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-ticket-icon-flat-style-png-image_1977183.jpg';

export enum DiscordMessageType {
  'RAFFLE_CREATE',
  'TICKET_BUY',
}

export async function handle_discord_webhook(
  type: DiscordMessageType,
  title: string,
  description: string,
  ticket_count: number,
  ticket_price?: number,
) {
  useRaffleStore().disocrd_handle.setUsername('Raffle');
  useRaffleStore().disocrd_handle.setAvatar(IMAGE_URL);

  let embed;
  switch (type) {
    case DiscordMessageType.RAFFLE_CREATE:
      embed = new discord.MessageBuilder()
        .setTitle(title)
        .setDescription(description)
        .setAuthor('Raffle - Create', IMAGE_URL)
        .setColor('#ff9f2a')
        .addField('Tickets', ticket_count.toString(), true)
        .addField('Price', ticket_price?.toString() ?? 'none', true)
        .setTimestamp();
      break;
    case DiscordMessageType.TICKET_BUY:
      embed = new discord.MessageBuilder()
        .setTitle(title)
        .setDescription(description)
        .setAuthor('Ticket - Buy', IMAGE_URL)
        .setColor('#ff9f2a')
        .addField('Tickets', ticket_count.toString(), true)

        .setTimestamp();
      break;
  }

  if (embed) await useRaffleStore().disocrd_handle.send(embed);

  console.log(useRaffleStore().disocrd_handle);
}
