const Discord = require("discord.js");
const {getGuild} = require("../../functions.js");

module.exports.run = async(client, message, args) => {

	if (message.author.id !== ("298812170093723649")) return;
	
	const guild = getGuild(message, args[0]);

	if (guild) {
  
  const matches = guild.members;
if (!matches) {
    return message.channel.send('No username matches');
}
else {
    return message.channel.send(matches.map(matches.tag).join(',\n '));
}
}
		
		
};
module.exports.help = {
	name: "test",
	aliases: ["testing"],
	description: "Test",
	usage: "test <Guild ID/Name>",
	category: "Developer"
}
