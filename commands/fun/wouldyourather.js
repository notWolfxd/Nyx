const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const fetch = require('node-fetch');
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {
  
    let data = await fetch(`http://www.rrrather.com/botapi`);
    
    let response = JSON.parse(await data.text());
    
    const embed = new Discord.RichEmbed()
    .setTimestamp()
    .setColor('#dd67ff')
    .setTitle(`${message.author.username}, ${response.title}`)
    .addField("Choose...", stripIndents`🅰️ ${response.choicea} 
    🅱️ ${response.choiceb}
    
    **Question Info:** [[Link]](${response.link}) | ${response.votes} people answered`)
    .setFooter(`${config.version} | Requested By ${message.author.tag}`)
    
    message.channel.send({embed}).then(m => {
        m.react('🅰️');
        m.react('🅱️');
    });
}
module.exports.help = {
    name: "wouldyourather",
    aliases: [ "wyr" ],
    description: "Get asked a random \"Would you rather\" question.",
    usage: "wouldyourather",
    category: "Fun"

}
