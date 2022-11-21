const { Events } = require('discord.js');

const { changeThreadStatus } = require('../features/changeThreadStatus');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return
        if (!interaction.customId == "thread-status-toggle") return
        changeThreadStatus(interaction)
    },
};