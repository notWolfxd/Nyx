const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {
    if (message.author.id !== ("298812170093723649") && message.channel.id !== ("410526913879080960") && message.guild.id !== ("460208972306186252") && message.channel.id !== ("517488355693559818") && message.channel.id !== ("324056323794796544")) return;
   
    let data = await fetch(`https://nekos.life/api/v2/img/fox_girl`);
    
    let response = JSON.parse(await data.text());
    
    let embed = new Discord.RichEmbed()
    .setTimestamp()
    .setColor('#dd67ff')
    .setImage(response.url)
    .setFooter(`${config.version} | Made By: Wolf#9001 | Requested by ${message.author.tag}`)
    ;
    message.channel.send(embed);
}
module.exports.help = {
    name: "foxgirl",
    aliases: [ "kitsune" ],
    description: "Show an image of a random fox girl.",
    Usage: "foxgirl",
    Category: "Anime"

}
