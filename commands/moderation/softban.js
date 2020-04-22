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
        return message.channel.send("I can't softban air.");
if (member.id === message.author.id)
        return message.channel.send("You can't softban yourself.");
if (member.id === "298812170093723649")
        return message.channel.send("You can't softban Wolf.");
if (!member.bannable)
        return message.channel.send("Something has prevented me from softbanning them.");
if (member.highestRole.position === message.member.highestRole.position)
        return message.channel.send("Play nice with the people on your level.");
if (member.highestRole.position > message.member.highestRole.position)
        return message.channel.send("I guess I see why they are a higher position than you.");

    member.send(`You have been softbanned from **__${message.guild.name}__** by **__${message.author.username}__** for: **__${reason}__**.`);
    member.ban({ days: 7, reason: `${message.author.tag} | For: ${reason}` });
    message.guild.unban(member);
        
const softbannedEmbed = new RichEmbed()
     .setTitle("☣ User SoftBanned")
     .setColor("#32CD32")
     .addField("Username", `${member.user.tag}`, true)
     .addField("ID", `${member.user.id}`, true)

    message.channel.send(softbannedEmbed);

const logEmbed = new RichEmbed()
     .setTitle('User SoftBanned')
     .setColor("#8B0000")
     .setTimestamp()
     .setThumbnail(message.author.avatarURL)
     .addField(`**__MEMBER SOFTBANNED__**`, stripIndents`> **User SoftBanned:** ${member.user.tag} | ${member.user.id}
     > **Issued By:** ${message.author.tag} | ${message.author.id}
     > **Reason:** ${reason}`)
     .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)

    if (modlog) modlog.send({ logEmbed });
                        
}
module.exports.help = {
    name: "softban",
    aliases: [ "sb", "banbutnotban" ],
    description: "Ban a user from the guild to clear their messages, then unbans them.",
    usage: "softban <User> [Reason]",
    example: "softban Argo STFU",
    category: "Moderation"
  }
