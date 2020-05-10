const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const { getMember } = require("../../functions.js");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send("You can't hug the air (or I wouldn't be so lonely all the time).");
    
      const user = getMember(message, args[0]);
    
        snekfetch.get('https://nekos.life/api/hug')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user}, you got a hug from ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
}
module.exports.help = {
    name: "hug",
    aliases: [ "huggu", "huggles" ],
    description: "Hug someone.",
    usage: "hug <User>",
    example: "hug @steve",
    category: "Anime"
}
