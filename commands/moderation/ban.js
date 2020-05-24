const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

const member = getMember(message, args[0]);
	
  let modlog = message.guild.channels.find(channel => channel.name === "bot-logs");
  let reason = args.splice(1, args.length).join(' ') || `No reason provided.`;

if (!message.member.hasPermission("BAN_MEMBERS"))
        return;
if (!args[0]) 
        return message.channel.send("I can't ban air.");
if (member.id === message.author.id)
        return message.channel.send("You can't ban yourself.");
if (member.id === "298812170093723649")
        return message.channel.send("You can't ban Wolf.");
if (!member.bannable)
        return message.channel.send("Something has prevented me from banning them.");
if (member.highestRole.position === message.member.highestRole.position)
        return message.channel.send("Play nice with the people on your level.");
if (member.highestRole.position > message.member.highestRole.position)
        return message.channel.send("I guess I see why they are a higher position than you.");

    member.send(`You have been banned from **__${message.guild.name}__** by **__${message.author.username}__** for: **__${reason}__**.`);
    member.ban({ days: 7, reason: `${message.author.tag} | For: ${reason}` });
        
const bannedEmbed = new RichEmbed()
     .setTitle("⛔ User Banned")
     .setColor("#32CD32")
     .addField("Username", `${member.user.tag}`, true)
     .addField("ID", `${member.user.id}`, true)

    message.channel.send(bannedEmbed);

const logEmbed = new RichEmbed()
     .setTitle('User Banned')
     .setColor("#8B0000")
     .setTimestamp()
     .setThumbnail(message.author.avatarURL)
     .addField(`**__MEMBER BANNED__**`, stripIndents`> **User Banned:** ${member.user.tag} | ${member.user.id}
     > **Issued By:** ${message.author.tag} | ${message.author.id}
     > **Reason:** ${reason}`)
     .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)

   modlog.send(logEmbed);
                        
}
module.exports.help = {
    name: "ban",
    aliases: [ "b", "sayonara" ],
    description: "Ban a user from the guild.",
    usage: "ban <User> [Reason]",
    example: "ban WaitRose bald",
    category: "Moderation"
  }
