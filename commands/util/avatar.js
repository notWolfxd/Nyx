const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js")

module.exports.run = async (client, message, args) => {

    if (message.author.id !== ("298812170093723649") && message.channel.id !== ("410526913879080960")) return;
    let msg = await message.channel.send("Generating avatar...");

    const member = getMember(message, args.join(" "));

        let embed = new RichEmbed()

        .setImage(member.user.displayAvatarURL)
        .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
        .setTitle(`${member.user.tag} Avatar`)
        .setFooter("Nyx v1.5.0 | Requested by: " + message.author.tag)
        .setDescription("[Link]("+member.user.displayAvatarURL+")");

        message.channel.send(embed)


    msg.delete();
}

module.exports.help = {
    name: "avatar",
    aliases: ["av", "pfp"]
}
