const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const { getMember } = require("../../functions.js");

module.exports.run = async (client, message, args) => {
 
    if (!args[0]) return message.channel.send("You missed your target I assume.");
    
      const user = getMember(message, args[0]);
    
        snekfetch.get('https://nekos.life/api/v2/img/slap')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user}, you were slapped by ${message.author.username}!`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
}
module.exports.help = {
    name: "slap",
    aliases: [ "smack" ],
    description: "Slap someone.",
    usage: "slap <User>",
    example: "slap @UrMa",
    category: "Anime"
}
