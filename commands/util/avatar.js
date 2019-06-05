const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let msg = await message.channel.send("Generating avatar...");

    let member = message.mentions.users.first() || message.author

        let embed = new Discord.RichEmbed()

        .setImage(member.displayAvatarURL)
        .setColor("fff32e")
        .setTitle(`${member.tag} Avatar`)
        .setFooter("Nyx v1.4.7 | Made By: Wolf#9001 | Requested by: " + message.author.tag)
        .setDescription("[Link]("+member.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar",
    aliases: ["av", "a"]
}
