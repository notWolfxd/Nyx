const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const { getMember } = require("../../functions.js");

module.exports.run = async (client, message, args) => {

    if (message.author.id !== ("298812170093723649") && message.author.id !== ("216416135929790464") && message.channel.id !== ("410526913879080960") && message.channel.id !== ("324056323794796544")) return;
      
    if (!args[0]) return message.channel.send("no u.");
    
      const user = getMember(message, args[0]);
    
        snekfetch.get('https://nekos.life/api/v2/img/baka')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user}, you were called a BAKA by ${message.author.username}!`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
}
module.exports.help = {
    name: "baka",
    aliases: [ "idiot" ],
    description: "Call someone a \"baka\".",
    usage: "bqka <User>",
    example: "baka @ProZed",
    category: "Anime"
}
