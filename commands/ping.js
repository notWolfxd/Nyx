const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.author.id !== ("298812170093723649") && message.channel.id !== ("410526913879080960")) return;
const msg = await message.channel.send('Pinging...');
  msg.edit(":ping_pong: Time: " + Math.round(msg.createdTimestamp - message.createdTimestamp) + "ms \n:heart: Heartbeat: " + Math.round(client.ping) + "ms");
}

module.exports.help = {
  name: "ping"
}
