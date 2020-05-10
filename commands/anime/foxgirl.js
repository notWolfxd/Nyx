const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {
    
    let data = await fetch(`https://nekos.life/api/v2/img/fox_girl`);
    
    let response = JSON.parse(await data.text());
    
    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setColor('#dd67ff')
    .setImage(response.url)
    .setFooter(`${config.version} | Requested By ${message.author.tag}`)
    
    message.channel.send(embed);
}
module.exports.help = {
    name: "foxgirl",
    aliases: [ "kitsune" ],
    description: "Show an image of a random fox girl.",
    usage: "foxgirl",
    category: "Anime"

}
