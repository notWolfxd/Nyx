const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

let guildID = arg[0];

message.channel.send(message.guild.iconURL);

}

module.exports.help = {
name: "guildav"
}
