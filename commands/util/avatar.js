const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

    let msg = await message.channel.send("Generating avatar...");

    const member = getMember(message, args.join(" "));

        let embed = new RichEmbed()

        .setImage(member.user.displayAvatarURL)
        .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
        .setTitle(`${member.user.tag} Avatar`)
        .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)
        .setDescription("[Link]("+member.user.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar",
    aliases: ["av", "pfp"],
    description: "Display a user's profile picture.",
    usage: "avatar [User]",
    example: "avatar @uwu.",
    category: "Util"
}
