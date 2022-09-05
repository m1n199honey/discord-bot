console.log('In bot.js .....(/)');
// const { Client, GuildMember, Intents } = require("discord.js");
// require('dotenv').config();
// const { TOKEN, audioID } = process.env
// const { Player, QueryType } = require("discord-player");
const config = require("./config.json");
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildVoiceStates
    ]
});
const {
    joinVoiceChannel,
    VoiceConnectionStatus,
    AudioPlayerStatus,
    createAudioPlayer,
    createAudioResource,
    entersState
} = require('@discordjs/voice');
client.login(TOKEN);

client.once('ready', () => {
    console.log('Ready!');
});

client.on("error", console.error);
client.on("warn", console.warn);

// ----------------------------------------------------
const player = createAudioPlayer({
    behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
    },
});
// player.on("connectionError", (queue, error) => {
//     console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
// });

const resource = createAudioResource('/home/user/voice/music.mp3', {
    metadata: {
        title: 'A good song!',
    },
});
player.play(resource);
player.on(AudioPlayerStatus.Playing, () => {
    console.log('The audio player has started playing!');
});
// player.stop();
// player.pause();
// Unpause after 5 second
    // setTimeout(() => player.unpause(), 5_000);

player.on('error', error => {
    console.error(`Error: ${error.message} with resource ${error.resource.metadata.title}`);
    // player.play(getNextResource());
});
player.on(AudioPlayerStatus.Idle, () => {
    console.log("Player is in IDLE stare !");
	// player.play(getNextResource());
});