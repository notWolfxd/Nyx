const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

    const member = getMember(message, args[0]);
    let modlog = message.guild.channels.find(channel => channel.name === "bot-logs");
    let reason = args.splice(1, args.length).join(' ') || `No reason provided.`;

//A whole lot of ifs to protect stuff.
if (!message.member.hasPermission("KICK_MEMBERS")) 
        return;

if (!args[0]) 
        return message.channel.send("I can kick air, but I'd prefer to take it out on a person.");

if (member.id === message.author.id)
        return message.channel.send("You cannot kick yourself.")

if (member.id === "298812170093723649")
        return message.channel.send("You cannot kick Wolf.")

if (!member.kickable)
        return message.channel.send("Something has stopped me from kicking them (higher role maybe?).");

if (member.highestRole.position === message.member.highestRole.position)
        return message.channel.send("Play nice with the people on your level.")

if (member.highestRole.position > message.member.highestRole.position)
        return message.channel.send("You cannot kick your superiors.")

    member.send(`You have been kicked from **__${message.guild.name}__** by **__${message.author.tag}__** for: **__${reason}__**.`)
    member.kick(`${message.author.tag} | For: ${reason}`).then(() => {
        
var kEmbed = new RichEmbed()
        .setTitle("⚠️ User Kicked")
        .setColor("#32CD32")
        .addField("Username", `${member.user.tag}`, true)
        .addField("ID", `${member.user.id}`, true)
message.channel.send(kEmbed);
        
var embed = new RichEmbed()
        .setTitle('User Kicked')
        .setColor("#8B0000")
        .setThumbnail(message.author.avatarURL)
	.addField(`User:`, `${member.user.tag} | ${member.user.id}`)
	.addField(`Issued By:`, `${message.author.tag} | ${message.author.id}`)
	.addField(`Reason:`, `${reason}`)
        .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)
if (modlog) modlog.send({ embed })

	.then(() => {
		client.log('log', `${message.guild.name}/#${message.channel.name} (${message.channel.id}): ${member.user.tag} (${member.user.id}) was kicked by ${message.author.tag} (${message.author.id})`, 'CMD');
		})
	.catch((err) => {
		console.log(err);
		});
	})
	.catch(error => message.channel.send(`Unable to kick ${member} because of : ${error}`));

};
module.exports.help = {
    name: "k",
    aliases: [
            "kick",
            "cyalater"
    ]
  }
