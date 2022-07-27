const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("limpar")
    .setDescription("Remova até 100 mensagens")
    .addIntegerOption((option) =>
      option.setName("amount").setDescription("Número de mensagens para limpar")
    ),
  async execute(interaction) {
    console.log(await interaction.channel.bulkDelete(2, true));

    let amount = interaction.options.getInteger("amount");
    let userRoles = interaction.member._roles;

    if (userRoles[0] === "984217063054770186") {
      if (amount < 1) {
        return interaction.reply({
          content:
            "Número inválido, por favor selecione um número maior de mensagens!",
          ephemeral: true,
        });
      }

      await interaction.channel.bulkDelete(amount, true).catch((err) => {
        return interaction.reply({
          content: "Ocorreu um erro ao tentar remover mensagens neste canal!",
          ephemeral: true,
        });
      });

      return interaction.reply({
        content: `O usuário <@!${interaction.user.id}> excluiu \`${amount}\` mensagens!`,
        ephemeral: true,
      });
    }

    return interaction.reply({
      content: "Você não tem permissão para usar esse comando!",
      ephemeral: true,
    });
  },
};
