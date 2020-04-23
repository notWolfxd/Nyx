const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.help.name).join('\n'));
            data.push(`\nYou can send \`-help [command name]\` to get info on a specific command!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type == 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.help.name}`);

		if (command.help.aliases) data.push(`**Aliases:** ${command.help.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.help.description}`);
		if (command.usage) data.push(`**Usage:** ${command.name} ${command.help.usage}`);
                if (command.example) data.push(`**Example:** ${command.help.example}`);
		if (command.category) data.push(`**Category:** ${command.help.category}`);

		message.channel.send(data, { split: true });
    }

    module.exports.help = {
    name: "help",
    aliases: [
            "h",
            "cmd"
    ]
  }
