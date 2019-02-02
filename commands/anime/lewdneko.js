const Discord = require("discord.js");
const snekfetch = require("snekfetch")
module.exports.run = async (client, message, args) => {
    if (message.author.id !== ("298812170093723649") && message.channel.id !== ("410526913879080960") && message.channel.id !== ("541342157408043071") && message.channel.id !== ("324056323794796544")) return;
    if (!message.channel.nsfw) return;
    const { body } = await snekfetch
       .get('https://nekos.life/api/lewd/neko');
       const embed = new Discord.RichEmbed()
       .setColor(0x00A2E8)
       .setImage(body.neko)
       message.channel.send(embed)
 }
module.exports.help = {
    name: "lewdneko"
}
