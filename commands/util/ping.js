const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const msg = await message.channel.send('Pinging...');
        msg.edit(":ping_pong: Time: " + Math.round(msg.createdTimestamp - message.createdTimestamp) + "ms \n:heart: Heartbeat: " + Math.round(client.ping) + "ms");
}

module.exports.help = {
  name: "ping",
  aliases: [ "pingpong", "isdiscordlagging", "latency" ],
  description: "Check the bot's ping to Discord.",
  usage: "ping",
  category: "Util"
}
