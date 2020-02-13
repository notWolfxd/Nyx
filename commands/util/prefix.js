const fs = require("fs");

module.exports.run = async (client, message, args, guild) => {

    let prefixes = require("../../prefixes.json");

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("> You do not have permission to perform this action, you require the `MANAGE_SERVER` permission");
    if (!args[0]) return message.channel.send("Usage: +prefix <New Prefix>");

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) client.logger.error(err)
    });

    message.channel.send(`Your prefix was set to ${args[0]}`);
};
module.exports.help = {
    name: "prefix",
    aliases: [ "pfx" ]
