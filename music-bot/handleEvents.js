console.log("In handleEvents.js ...(/)");
const fs = require("fs");
const path = require("path");
// const client = require(path.join(__dirname,'bot.js'));
const { client } = require('../bot.js');
console.log(client);
module.exports = () => {
  console.log("Loading commands ...(/)");
  console.log(client);
  // const commandsPath = path.join(__dirname, "commands");
  // for (const folder of fs.readdirSync(commandsPath)) {
  //   const folderPath = path.join(commandsPath, folder);
  //   for (const file of fs.readdirSync(folderPath).filter((file) => file.endsWith(".js"))) {
  //     const command = require(path.join(folderPath, file));
  //     client.commands.set(command.data.name, command);
  //   }
  // }
  // console.log("done...");

  // client.handleEvents = async () => {
  //   console.log("Initialising Events ...(/)");
  //   const eventsPath = path.join(__dirname, "events");
  //   for (const folder of fs.readdirSync(eventsPath)) {
  //     const folderPath = path.join(eventsPath, folder);
  //     for (const file of fs.readdirSync(folderPath).filter((file) => file.endsWith(".js"))) {
  //       const event = require(path.join(folderPath, file));
  //       if (event.once) {
  //         client.once(event.name, (...args) => event.execute(...args, client));
  //       } else {
  //         client.on(event.name, (...args) => event.execute(...args, client));
  //       }
  //     }
  //   }
  // };
};
