const Discord = require("discord.js");
const fs = require("fs");
const config = require("../config.json");
module.exports = async (client) => {

    client.on("ready", async () => {
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
      
        client.user.setActivity("FREE NADEKO 2K19", {type: "PLAYING"});
      });

}
