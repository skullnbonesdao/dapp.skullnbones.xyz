import * as discord from 'discord-webhook-node';

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
  const hook = new discord.Webhook(import.meta.env.VITE_DISCORD_WEBHOOK);
  hook.setUsername('Raffle');
  hook.setAvatar(IMAGE_URL);

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

  if (embed) await hook.send(embed);

  console.log(hook);
}
