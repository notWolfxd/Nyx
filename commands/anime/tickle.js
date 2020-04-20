const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const { getMember } = require("../../functions.js");

module.exports.run = async (client, message, args) => {

    if (message.author.id !== ("298812170093723649") && message.author.id !== ("216416135929790464") && message.channel.id !== ("410526913879080960") && message.channel.id !== ("324056323794796544")) return;
      
    if (!args[0]) return message.channel.send("Nobody is laughing.");
    
      const user = getMember(message, args[0]);
    
        snekfetch.get('https://nekos.life/api/v2/img/tickle')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${message.author.username} is tickling ${user}!`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
}
module.exports.help = {
    name: "tickle",
    aliases: [ "tickly" ],
    description: "Tickle someone.",
    usage: "tickle <User>",
    example: "tickle @Mark",
    category: "Anime"
}
