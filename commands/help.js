const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const commandsDesc = `
    \`/james\` (sua mensagem) - Fale comigo, estou pronto pra atende-lo.\n
`

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ajuda')
        .setDescription('Peça a ajuda de james se quer se comunicar com ele.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Olá, eu sou o James.')
            .setDescription(commandsDesc)
            .setTimestamp()
            .setFooter({ text: 'Powered by James Bot', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        return await interaction.reply({ content: '\n', embeds: [embed] });
    }
}