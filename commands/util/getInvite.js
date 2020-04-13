const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

	if (message.author.id !== ("298812170093723649")) return;

	let guild = null;

	if (args[0]) {
		let found = message.client.guilds.get(args.join(" "));
		if (!found) {
			found = message.client.guilds.find((g) => g.name === args.join(" "));
			if (found) {
				guild = found;
			}
		}
	} else {
		return message.channel.send("That ID is not valid - You must supply an ID of a guild that I am in");
	}

	if (guild) {
		let tChannel = guild.channels.find((ch) => ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
		if (!tChannel) {
			return message.channel.send("An error has occurred, please try again in a few minutes - The developers have been notified");
		}
		let invite = await tChannel.createInvite({
			maxAge: "0"
		}).catch((err) => {
			return message.channel.send("An error has occurred, please try again in a few minutes - The developers have been notified");
		});
		message.channel.send(invite.url);
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
