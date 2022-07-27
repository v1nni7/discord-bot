const { GatewayIntentBits } = require('discord-api-types/v10');
const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.commands = new Collection();

const commandsFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandsFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async (interaction) => {
  if(!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if(!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    return interaction.reply({content: 'Ocorreu um erro ao executar este comando!', ephemeral: true});
  }
});

client.once('ready', () => {
  console.log(`Client logged as ${client.user.tag}`);
});

client.login(process.env.TOKEN)