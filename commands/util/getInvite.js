const Discord = require("discord.js");
const {getGuild} = require("../../functions.js");

module.exports.run = async(client, message, args) => {

	if (message.author.id !== ("298812170093723649")) return;
	
	const guild = getGuild(message, args[0]);

	if (guild) {
		let tChannel = guild.channels.find((ch) => ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
		if (!tChannel) {
			return message.channel.send("An error has occurred, please try again in a few minutes - The developers have been notified");
		}
		let invite = await tChannel.createInvite({
			maxAge: "0"
		}).catch((err) => {
			return message.channel.send(`An error has occurred, please try again in a few minutes. ${err}`);
		});
		message.channel.send(invite);
	} else {
		return message.channel.send(`No server found with the specified ID - Search: ${args[0]}`);
	}

};
module.exports.help = {
	name: "forceinvite",
	aliases: ["getinvite"],
	description: "Gets an invite to the specified guild",
	usage: "forceinvite <Guild ID/Name>",
	category: "Developer"
}
