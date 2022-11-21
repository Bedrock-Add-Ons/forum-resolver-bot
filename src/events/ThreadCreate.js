const { Events, EmbedBuilder } = require('discord.js');
const { forumId } = require('../../config.json')

const { closeButton } = require("../features/buttons")

module.exports = {
	name: Events.ThreadCreate,
	execute(thread) { 
        if (thread.parentId != forumId) return
        thread.join()
    
        const exampleEmbed = new EmbedBuilder()
            .setTitle('Thanks for asking your question!')
            .setColor(0x262626)
            .setDescription('Once you have finished, please close your thread.')
            .setFooter({ text: 'Use the /close command or button below.'})
    
        thread.send({ embeds: [exampleEmbed], components: [closeButton] });
	},
};