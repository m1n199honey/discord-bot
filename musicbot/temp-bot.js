console.log('In bot.js .....(/)');
require('dotenv').config();
const { TOKEN, guildID, clientID, authorID, audioID } = process.env
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
client.login(TOKEN);
module.exports.client = client;
// Setup commands
// const { fetchFiles } = require('./utils/files');
// const commandFiles = fetchFiles('./commands', '.js');
// client.categories = new Collection();
// client.aliases = new Collection();
// const categories = [];
client.commands = new Collection();
client.queue = new Map();
// -------------------------------------------------------------
const {
    joinVoiceChannel,
    VoiceConnectionStatus,
    AudioPlayerStatus,
    createAudioPlayer,
    createAudioResource,
    entersState
} = require('@discordjs/voice');
// ---------------------------------------------------------------

// ---------------------------------------------------------------
require(path.join(__dirname, 'handleEvents.js'))(client);
client.handleEvents();