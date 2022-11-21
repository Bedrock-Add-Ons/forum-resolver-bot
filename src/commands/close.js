const { SlashCommandBuilder } = require('discord.js');

const { changeThreadStatus } = require('../features/changeThreadStatus');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('close')
		.setDescription('Closes your question'),
	async execute(interaction) {
		changeThreadStatus(interaction)
	},
};