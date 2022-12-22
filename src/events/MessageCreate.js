const { Events } = require('discord.js');
const { forumId, resolvedTag } = require('../../config.json')

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		const thread = message.client.channels.cache.get(message.channelId)
        if (thread.parentId != forumId) return
		
        thread.setAppliedTags(thread.appliedTags.filter((tag) => tag != resolvedTag))
        
	},
};