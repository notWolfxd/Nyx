const Discord = require("discord.js");
const superagent = require('superagent');
module.exports.run = async (client, message, args) => {
    if (message.author.id !== ("298812170093723649") && message.channel.id !== ("410526913879080960") && message.channel.id !== ("324056323794796544")) return;
    const { body } = await superagent
    .get('https://nekos.life/api/neko');
    const embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setImage(body.neko)
    message.channel.send(embed)
}
module.exports.help = {
    name: "neko"
}
