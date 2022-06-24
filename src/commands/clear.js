const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('limpar')
    .setDescription('Remova até 99 mensagens')
    .addIntegerOption(option => option.setName('quantidade').setDescription('Número de mensagens para limpar')),
  async execute(interaction) {
    console.log(interaction._roles);
  }
}