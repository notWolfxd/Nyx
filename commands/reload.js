const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

//Doing the necessary checks
if (message.author.id !== "298812170093723649") return;
if(!args || args.size < 1) return message.channel.send("Must provide a command name to reload.");
const commandName = args[0];
if(!client.commands.has(commandName)) {
  return message.channel.send("That command does not exist");
}
//Build .reload help embed.
    var reloadHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: Reload")
    .setColor("#f4392b")
    .setThumbnail(client.user.avatarURL)
    .addField("Description: " + "Reloads a command in the bot.")
    .addField("Usage: ", "-reload [command]")
    .addField("Example: ", "-reload recruit")
    .addField("Aliases:", "reload")
    .addField("Category", "Bot-Owner Only")
    .setFooter("Nyx v1.3.8 | Made By: Wolf#9001", client.user.avatarURL)

//Doing the magic.
delete require.cache[require.resolve(`./${commandName}.js`)];
client.commands.delete(commandName);
const props = require(`./${commandName}.js`);
client.commands.set(commandName, props);

//Sending the completed message.
message.channel.send("The command " + "`"+`${commandName}`+"`" + " has been reloaded!");
}

module.exports.help = {
    name: "reload"
}
