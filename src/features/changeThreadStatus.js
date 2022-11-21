const { closeButton, openButton } = require("./buttons")

const { resolvedTag, forumId } = require("../../config.json");

module.exports = {
    async changeThreadStatus(interaction) {
        const client = interaction.client

        const threadChannel = client.channels.cache.get(interaction.channelId)
        // const forumChannel = client.channels.cache.get(threadChannel.parentId)

        if (forumId != threadChannel.parentId) {
            return interaction.reply({
                ephemeral: true, content: `You can only use this in the <#${forumId}> channel`
            })
        }
    
        const appliedTags = interaction.channel.appliedTags
        const threadOpen = !appliedTags.includes(resolvedTag)
    
        const resolveMessage = interaction.isButton() ? await interaction.channel.messages.fetch(interaction.message.id) : {}
        
        if (threadChannel.ownerId == interaction.user.id) {
            if (threadOpen) {
                interaction.channel.setAppliedTags([resolvedTag, ...appliedTags])
                interaction.reply({
                    ephemeral: true, content: "Question Closed!"
                })
    
                if (interaction.isButton()) resolveMessage.edit({ components: [openButton]})
    
                interaction.channel.setArchived(true);
            } else {
                await interaction.channel.setArchived(false);
    
                interaction.channel.setAppliedTags(appliedTags.filter((tag) => tag != resolvedTag))
                interaction.reply({
                    ephemeral: true, content: "Question Re-opened!"
                })
    
                if (interaction.isButton()) resolveMessage.edit({ components: [closeButton]})
            }
    
        } else {
            interaction.reply({
                ephemeral: true, content: "You can't change someone else's thread!"
            })
        }
    }
}