module.exports = {
    name: 'voiceStateUpdate',
    execute(oldMember, newMember, client) {
        console.log('inside voiceState');
        // Check if there is a queue
        // const queue = client.queue.get(newMember.guild.id);
        console.log(client.queue);

        }
};