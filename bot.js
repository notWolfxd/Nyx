const Discord = require('discord.js');
const client = new Discord.Client({
fetchAllMembers: true
});
const config = require('./config.json');
require("./handler/commandhandler")(client);
require("./handler/eventhandler")(client);

    client.on("ready", async () => {
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
      
        client.user.setActivity("DEMOTE RETARD17 2K19", {type: "PLAYING"});
        client.user.setStatus('idle');
      });


client.login(process.env.BOT_TOKEN).catch(err => console.log(err));
