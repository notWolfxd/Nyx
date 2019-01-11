const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    //Build .prefix help Embed.
    var prefixHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: Prefix")
    .setColor("#930fff")
    .setThumbnail(message.author.avatarURL)
    .addField("Requires Permission:", "MANAGE_SERVER")
    .addField("Description: ", "Sets the prefix for the server.")
    .addField("Usage: ", ".prefix [DesiredPrefix]")
    .addField("Example: ", ".prefix >")
    .setFooter("Nyx v1.3.1 | Made By: Wolf#9001", client.user.avatarURL)

    //Setting the permissions & sending help message.
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("You do not have sufficient permissions to use this command!");
    if (!args[0] || args[0 == "help"]) return message.channel.sendEmbed(prefixHelpEmbed);

    //Read the message and adds it to the JSON file for storing.
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
        prefixes[message.guild.id] = {
            prefix: args[0]
        };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)

    });

    //Build the .prefix message Embed.
    let prefixEmbed = new Discord.RichEmbed()
    .setTitle("Prefix Changed")
    .setColor("#930fff")
    .setDescription(`Prefix Set To: ${args[0]}`)

    //Sending the completed message.
    message.channel.sendEmbed(prefixEmbed);

}

module.exports.help = {
    name: "prefix",
}
