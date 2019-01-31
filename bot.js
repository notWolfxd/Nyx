const Discord = require('discord.js');
const client = new Discord.Client({
fetchAllMembers: true
});
const config = require('./config.json');
require("./handler/commandhandler")(client);
require("./handler/eventhandler")(client);

    client.on("ready", async () => {
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
      
        client.user.setActivity("FREE NADEKO 2K19", {type: "PLAYING"});
      });

client.login(process.env.BOT_TOKEN).catch(err => console.log(err));
