const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {
    
    if (message.author.id !== ("298812170093723649") && message.channel.id !== ("410526913879080960") && message.channel.id !== ("541342157408043071") && message.channel.id !== ("324056323794796544")) return;
   
      if (!message.channel.nsfw) return;
    
        const { body } = await snekfetch
         .get('https://nekos.life/api/v2/img/keta');
    
        let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor(0x00A2E8)
        .setImage(body.url)
        .setFooter(`${config.version} | Requested By: ${message.author.tag}`)
        
       message.channel.send(embed);
 }
module.exports.help = {
    name: "keta",
    aliases: [ "ke-ta" ],
    description: "Show an image of random anime girl, but ke-ta.",
    usage: "keta",
    category: "NSFW"
}
