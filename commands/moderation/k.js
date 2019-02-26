const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let modlog = message.guild.channels.find(channel => channel.name === "bot-logs");
    let reason = args.splice(1, args.length).join(' ') || `No reason provided.`;

//A whole lot of ifs to protect stuff.
if (!message.member.hasPermission("KICK_MEMBERS")) 
        return;

if (!args[0]) 
        return message.channel.send("Specify a user.");

if (member.id === message.author.id)
        return message.channel.send("You cannot kick yourself.")

if (!member.kickable)
        return message.channel.send("Something has stopped me from banning them (higher role maybe?).");

if (member.highestRole.position === message.member.highestRole.position)
        return message.channel.send("Play nice with the people on your level.")

if (member.highestRole.position > message.member.highestRole.position)
        return message.channel.send("You cannot kick your superiors.")

    member.kick(`${message.author.username} | For: ${reason}`).then(() => {
        var kEmbed = new Discord.RichEmbed()
        .setTitle("⚠️ User Kicked")
        .setColor("#32CD32")
        .addField("Username", `${member.user}`, true)
        .addField("ID", `${member.user.id}`, true)
            message.channel.send(kEmbed);
        const embed = new Discord.RichEmbed()
            .setTitle('User Kicked')
            .setColor("#8B0000")
            .setThumbnail(message.author.avatarURL)
			.addField(`User:`, `${member.user.tag} | ${member.user.id}`)
			.addField(`Issued By:`, `${message.author.tag} | ${message.author.id}`)
			.addField(`Reason:`, `${reason}`)
			.setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)
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
