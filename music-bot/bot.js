console.log('In bot.js .....(/)');
require('dotenv').config();
const { TOKEN, audioID } = process.env
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

// Setup music
client.queue = new Map();

// Setup commands
client.categories = new Collection();
client.commands = new Collection();
client.aliases = new Collection();

require(path.join(__dirname, 'handleEvents.js'));
// console.log(client);
// client.handleEvents();

