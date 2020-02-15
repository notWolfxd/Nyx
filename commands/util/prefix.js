const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

    let prefixes = require("../../prefixes.json");

    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!args[0]) return message.channel.send(`Usage: ${prefixes[message.guild.id].prefixes}prefix <New Prefix>`);

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
    aliases: ["pfx"]
}
