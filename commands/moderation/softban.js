const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {
    
    const member = getMember(message, args[0]);
    let modlog = message.guild.channels.find(channel => channel.name === "bot-logs");
    let reason = args.splice(1, args.length).join(' ') || `No reason provided.`;

//A whole lot of ifs to protect stuff.
if (!message.member.hasPermission("BAN_MEMBERS")) 
        return;

if (!args[0]) 
        return message.channel.send("I can't softban air.");

if (member.id === message.author.id)
        return message.channel.send("You cannot softban yourself.")

if (member.id === "298812170093723649")
        return message.channel.send("You cannot ban Wolf.")

if (!member.bannable)
        return message.channel.send("Something has prevented me from softbanning them (maybe a higher role (?)).");

if (member.highestRole.position === message.member.highestRole.position)
        return message.channel.send("Play nice with the people on your level.")

if (member.highestRole.position > message.member.highestRole.position)
        return message.channel.send("Now that you have tried to softban someone with a higher role than you, expect a softban from them!");
    
    member.send(`You have been softbanned from **__${message.guild.name}__** by **__${message.author.username}__** for: **__${reason}__**.`)
    member.ban({ days: 7, reason: `${message.author.username} | For: ${reason}` }).then(() => {
    message.guild.unban(member);

var sbEmbed = new RichEmbed()
        .setTitle("☣ User SoftBanned")
        .setColor("#32CD32")
        .addField("Username", `${member.user}`, true)
        .addField("ID", `${member.user.id}`, true)
message.channel.send(sbEmbed);

var embed = new RichEmbed()
        .setTitle('User SoftBanned')
        .setColor("#8B0000")
        .setThumbnail(message.author.avatarURL)
	.addField(`User:`, `${member.user.tag} | ${member.user.id}`)
	.addField(`Issued By:`, `${message.author.tag} | ${message.author.id}`)
	.addField(`Reason:`, `${reason}`)
        .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)
if (modlog) modlog.send({ embed })

	.then(() => {
		client.log('log', `${message.guild.name}/#${message.channel.name} (${message.channel.id}): ${member.user.tag} (${member.user.id}) was softbanned by ${message.author.tag} (${message.author.id})`, 'CMD');
		})
	.catch((err) => {
		console.log(err);
		});
	})
	.catch(error => message.channel.send(`Unable to softban ${member} because of : ${error}`));

};
module.exports.help = {
    name: "softban",
    aliases: [ "sb",
	       "banbutnotban"
	     ]
  }
