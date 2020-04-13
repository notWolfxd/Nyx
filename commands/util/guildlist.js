const {RichEmbed} = require("discord.js");
const config = require("../../config.json");

module.exports.run = async(client, message) => {
	if (message.author.id !== ("298812170093723649")) return;

	let i0 = 0;
	let i1 = 10;
	let page = 1;

	let description = `Total Servers: ${message.client.guilds.size}\n\n` +
		message.client.guilds.sort((a, b) => b.memberCount - a.memberCount).map((r) => r)
		.map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members | ID ${r.id}`)
		.slice(0, 10)
		.join("\n");

	let embed = new RichEmbed()
		.setColor("#ddaadd")
		.setTitle(`Guardian - Guild List`)
		.setDescription(description)
		.setFooter(`${config.version}`, client.user.avatarURL);

	let msg = await message.channel.send(embed);

	await msg.react("⬅");
	await msg.react("➡");
	await msg.react("❌");

	let collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);

	collector.on("collect", async(reaction, user) => {
		if (reaction._emoji.name === "⬅") {

			// Updates variables
			i0 = i0 - 10;
			i1 = i1 - 10;
			page = page - 1;

			// if there is no guild to display, delete the message
			if (i0 < 0) {
				return msg.delete();
			}
			if (!i0 || !i1) {
				return msg.delete();
			}

			description = `Total Servers: ${message.client.guilds.size}\n\n` +
				message.client.guilds.sort((a, b) => b.memberCount - a.memberCount).map((r) => r)
				.map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members | ID ${r.id}`)
				.slice(i0, i1)
				.join("\n");

			// Update the embed with new informations
			embed.setTitle(`Page: ${page}/${Math.round(message.client.guilds.size / 10)}`)
				.setDescription(description);

			// Edit the message 
			msg.edit(embed);

		};

		if (reaction._emoji.name === "➡") {

			// Updates variables
			i0 = i0 + 10;
			i1 = i1 + 10;
			page = page + 1;

			// if there is no guild to display, delete the message
			if (i1 > message.client.guilds.size + 10) {
				return msg.delete();
			}
			if (!i0 || !i1) {
				return msg.delete();
			}

			description = `Total Servers: ${message.client.guilds.size}\n\n` +
				message.client.guilds.sort((a, b) => b.memberCount - a.memberCount).map((r) => r)
				.map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members | ID ${r.id}`)
				.slice(i0, i1)
				.join("\n");

			// Update the embed with new informations
			embed.setTitle(`Page: ${page}/${Math.round(message.client.guilds.size / 10)}`)
				.setDescription(description);

			// Edit the message 
			msg.edit(embed);

		};

		if (reaction._emoji.name === "❌") {
			return msg.delete();
		}

		// Remove the reaction when the user react to the message
		await reaction.users.remove(message.author.id);
	});

};
module.exports.help = {
	name: "guildlist",
	aliases: ["glist"],
	description: "Get a list of guilds the bot is in",
	usage: "guildlist",
	category: "Developer"
}
