const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {
   
        const { body } = await snekfetch
         .get('https://nekos.life/api/v2/img/ngif');
    
        let embed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor(0x00A2E8)
        .setImage(body.url)
        .setFooter(`${config.version} | Requested By: ${message.author.tag}`)
        
       message.channel.send(embed);
 }
module.exports.help = {
    name: "nekogif",
    aliases: [ "ngif" ],
    description: "Show a gif of a random neko anime girl.",
    usage: "nekogif",
    category: "Anime"
}
