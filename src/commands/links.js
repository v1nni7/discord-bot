const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('links')
    .setDescription('Conteúdos para estudar!'),
  async execute(interaction) {
    const messageEmbed = new MessageEmbed()
      .setColor('#c7008b')
      .setTitle('Conteúdos que podem te ajudar durante sua jornada')
      .addFields(
        { name: 'W3Schools', value: 'https://www.w3schools.com/' },
        { name: 'Developer Mozilla', value: 'https://developer.mozilla.org/pt-BR/' },
        { name: 'Teste-3', value: 'Algum valor aqui' }
      )
    return interaction.reply({ embeds: [messageEmbed] });
  }
}