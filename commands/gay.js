const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
message.channel.send(`<@${message.author.id}> is super gay.`);
}

module.exports.help = {
    name: "gay"
}
