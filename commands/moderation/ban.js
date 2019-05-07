const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    console.log(member)
    let modlog = message.guild.channels.find(channel => channel.name === "bot-logs");
    let reason = args.splice(1, args.length).join(' ') || `No reason provided.`;

//A whole lot of ifs to protect stuff.
if (!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== ("298812170093723649"))
        return;

if (!args[0]) 
        return message.channel.send("Specify a user.");

if (member.id === message.author.id)
        return message.channel.send("Unfortunately you can't ban yourself, will probs add this later though for fun.")

if (member.id === "298812170093723649")
        return message.channel.send("You cannot ban Wolf.")

if (!member.bannable)
        return message.channel.send("Something has prevented me from banning them (maybe a higher role (?)).");

if (member.highestRole.position === message.member.highestRole.position)
        return message.channel.send("Play nice with the people on your level.")

if (member.highestRole.position > message.member.highestRole.position)
        return message.channel.send("Now that you have tried to ban someone with a higher role than you, expect a ban from them lol !")

    member.send(`You have been banned from **__${message.guild.name}__** by **__${message.author.username}__** for **__${reason}__**.`)
    member.ban({ days: 7, reason: `${message.author.username} | For: ${reason}` }).then(() => {
        
var bEmbed = new Discord.RichEmbed()
        .setTitle("⛔ User Banned")
        .setColor("#32CD32")
        .addField("Username", `${member.user}`, true)
        .addField("ID", `${member.user.id}`, true)
message.channel.send(bEmbed);

var embed = new Discord.RichEmbed()
        .setTitle('User Banned')
        .setColor("#8B0000")
        .setThumbnail(message.author.avatarURL)
	.addField(`User:`, `${member.user.tag} | ${member.user.id}`)
	.addField(`Issued By:`, `${message.author.tag} | ${message.author.id}`)
	.addField(`Reason:`, `${reason}`)
	.setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)
if (modlog) modlog.send({ embed })
                        
        .then(() => {
		client.log('log', `${message.guild.name}/#${message.channel.name} (${message.channel.id}): ${member.user.tag} (${member.user.id}) was banned by ${message.author.tag} (${message.author.id})`, 'CMD');
		})
	.catch((err) => {
		console.log(err);
		});
	})
	.catch(error => message.channel.send(`Unable to ban ${member} because of : ${error}`));

};
module.exports.help = {
    name: "ban",
    aliases: [ "b",
	       "sayonara"
	    ]
  }
