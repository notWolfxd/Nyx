const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

const member = getMember(message, args[0]);
	
  let modlog = message.guild.channels.find(channel => channel.name === "bot-logs");
  let reason = args.splice(1, args.length).join(' ') || `No reason provided.`;

if (!message.member.hasPermission("KICK_MEMBERS"))
        return;
if (!args[0]) 
        return message.channel.send("I can't kick air.");
if (member.id === message.author.id)
        return message.channel.send("You can't kick yourself.");
if (member.id === "298812170093723649")
        return message.channel.send("You can't kick Wolf.");
if (!member.kickable)
        return message.channel.send("Something has prevented me from kicking them.");
if (member.highestRole.position === message.member.highestRole.position)
        return message.channel.send("Play nice with the people on your level.");
if (member.highestRole.position > message.member.highestRole.position)
        return message.channel.send("I guess I see why they are a higher position than you.");

    member.send(`You have been kicked from **__${message.guild.name}__** by **__${message.author.username}__** for: **__${reason}__**.`);
    member.kick({ reason: `${message.author.tag} | For: ${reason}` });
        
const kickedEmbed = new RichEmbed()
     .setTitle("⚠️ User Kicked")
     .setColor("#32CD32")
     .addField("Username", `${member.user.tag}`, true)
     .addField("ID", `${member.user.id}`, true)

    message.channel.send(kickedEmbed);

const logEmbed = new RichEmbed()
     .setTitle('User Kicked')
     .setColor("#8B0000")
     .setTimestamp()
     .setThumbnail(message.author.avatarURL)
     .addField(`**__MEMBER KICKED__**`, stripIndents`> **User Kicked:** ${member.user.tag} | ${member.user.id}
     > **Issued By:** ${message.author.tag} | ${message.author.id}
     > **Reason:** ${reason}`)
     .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)

    if (modlog) modlog.send({ logEmbed });
                        
}
module.exports.help = {
    name: "kick",
    aliases: [ "k", "cyalater" ],
    description: "Kick a user from the guild.",
    usage: "kick <User> [Reason]",
    example: "kick GlennL17 simp",
    category: "Moderation"
  }
