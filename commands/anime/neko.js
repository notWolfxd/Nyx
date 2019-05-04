const Discord = require("discord.js");
const snekfetch = require("snekfetch")
module.exports.run = async (client, message, args) => {
    if (message.author.id !== ("298812170093723649") && message.channel.id !== ("410526913879080960") && message.guild.id !== ("460208972306186252") && message.channel.id !== ("517488355693559818") && message.channel.id !== ("324056323794796544")) return;
    const { body } = await snekfetch
       .get('https://nekos.life/api/neko');
       const embed = new Discord.RichEmbed()
       .setColor(0x00A2E8)
       .setImage(body.neko)
       message.channel.send(embed)
 }
module.exports.help = {
    name: "neko"
}
