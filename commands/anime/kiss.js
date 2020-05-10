const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const { getMember } = require("../../functions.js");

module.exports.run = async (client, message, args) => {
     
    if (!args[0]) return message.channel.send("You can't kiss the air (well you can but you're gay if you do).");
    
      const user = getMember(message, args[0]);
    
        snekfetch.get('https://nekos.life/api/kiss')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user}, you got a kiss from ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
}
module.exports.help = {
    name: "kiss",
    aliases: [ "kissu", "kisses" ],
    description: "Kiss someone.",
    usage: "kiss <User>",
    example: "kiss @Bestle",
    category: "Anime"
}
