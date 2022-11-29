const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { verificaMensagem, buscaNoticiasGlobo } = require('../functions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('james')
        .setDescription('Fale com James.')
        .addStringOption(option =>
            option.setName('mensagem')
                .setDescription('Digite a sua mensagem aqui'))
    ,
    async execute(interaction) {
        const mensagem = interaction.options.getString('mensagem') ?? undefined

        if (mensagem == undefined) {
            const embed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Olá, tive um problema com o que você me pediu...')
                .setDescription('Você precisa digitar uma mensagem pra eu poder entende-lo, se precisa de ajuda: use \`/ajuda\` :)')
                .setTimestamp()
                .setFooter({ text: 'Powered by James Bot', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            return await interaction.reply({ content: '\n', embeds: [embed] });
        }

        else if (verificaMensagem(mensagem)) {
            const noticias = await buscaNoticiasGlobo();
            const embed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Noticias Globo.com')
                .setAuthor({ name: 'Globo.com', iconURL: 'https://s3.glbimg.com/v1/AUTH_fd78dc4be9404a2e92b908ade306e9e6/prod/globocom_opengraph.png', url: 'https://www.globo.com/' })
                .setDescription(noticias.slice(0, 9).join(''))
                .setThumbnail('https://s3.glbimg.com/v1/AUTH_fd78dc4be9404a2e92b908ade306e9e6/prod/globocom_opengraph.png')
                .setTimestamp()
                .setFooter({ text: 'Powered by James Bot', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            return await interaction.reply({ content: 'Se são as noticias do site Globo.com, aqui estão:\n', embeds: [embed] });
        }

        else {
            const embed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Olá, tive um problema com o que você me pediu...')
                .setDescription('Infelizmente parece que não posso te ajudar com isso ainda. :(')
                .setTimestamp()
                .setFooter({ text: 'Powered by James Bot', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            return await interaction.reply({ content: '\n', embeds: [embed] });
        }
    },
};