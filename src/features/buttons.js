const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

const closeButton = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
        .setCustomId('thread-status-toggle')
        .setLabel('Close Question')
        .setStyle(ButtonStyle.Success),
);

const openButton = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
        .setCustomId('thread-status-toggle')
        .setLabel('Open Question')
        .setStyle(ButtonStyle.Success),
);

module.exports = {
    closeButton,
    openButton,
}