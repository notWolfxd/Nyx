const Discord = require("discord.js");
const snekfetch = require("snekfetch")
module.exports.run = async (client, message, args) => {

    if (message.author.id !== ("298812170093723649") && message.author.id !== ("216416135929790464") && message.channel.id !== ("410526913879080960") && message.channel.id !== ("324056323794796544")) return;
      if (message.mentions.users.size < 1) return message.channel.send("No body pillows here, only real people allowed.")
      let user = message.guild.member(message.mentions.users.first());
        snekfetch.get('https://nekos.life/api/v2/img/cuddle')
            .set('Key', 'dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf')
            .then(r => message.channel.send(`${user}, ${message.author.username} has cuddled with you. ❤`,{
                embed: {
                    image: {
                        url: r.body.url
                    }
                }
            }))
}
module.exports.help = {
    name: "cuddle"
}
