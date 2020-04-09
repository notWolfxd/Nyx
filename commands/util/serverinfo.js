/* eslint-disable no-redeclare */
const {RichEmbed} = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (client, message) => {
    var guild = message.guild;

    // Verfification Level formatting
    switch (message.guild.verificationLevel) {
        case 0: var vLevel =  "**None**"; break;
        case 1: var vLevel = "**Low**"; break;
        case 2: var vLevel = "**Medium** "; break;
        case 3: var vLevel = "**High** (╯°□°）╯︵ ┻━┻"; break;
        case 4: var vLevel = "**Highest** ┻━┻︵ \ (°□°）/ ︵ ┻━┻"; break;
    }

    // Region Formatting
    switch (guild.region) {
        case "europe": var gLoc = ":flag_eu:  Europe"; break;
        case "brazil": var gLoc = ":flag_br:  Brazil"; break;
        case "hongkong": var gLoc = ":flag_hk:  Hong Kong"; break;
        case "india": var gLoc = ":flag_in:  India"; break;
        case "japan": var gLoc = ":flag_jp:  Japan"; break;
        case "russia": var gLoc = ":flag_ru:  Russia"; break;
        case "amsterdam": var gLoc = ":flag_nl:  Amsterdam"; break;
        case "singapore": var gLoc = ":flag_sg:  Singapore"; break;
        case "southafrica": var gLoc = ":flag_sa:  South Africa"; break;
        case "sydney": var gLoc = ":flag_au:  Sydney"; break;
        case "us-central": var gLoc = ":flag_us:  US Central"; break;
        case "us-east": var gLoc = ":flag_us:  US East"; break;
        case "us-south": var gLoc = ":flag_us:  US South"; break;
        case "us-west": var gLoc = ":flag_us:  US West"; break;
      }

    // Random Colour Generator
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    // Member Counts
    let humans = message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size;
    let bots = message.guild.members.filter(m => m.user.bot).size;

    //Date formatting
    let dateMade = new Date(guild.createdTimestamp)

    let sInfo = new RichEmbed()
        .setColor(`#${randomColor}`)
        .setDescription("Server Information")
        .setThumbnail(guild.iconURL)
        .addfield('__Guild Info__', `**> Guild Name:** ${guild.name}
        **> Guild ID:** ${guild.id}
        **> Guild Owner:** ${guild.owner.user.tag} | ${guild.ownerID}

        **> Guild Region:** ${gLoc}
        **> Guild Security:** ${vLevel}
        **> Availability:** ${(guild.available ? "✅ Available" : "❎ Not Available")}`)

        .addfield('__Guild Stats__', `**> Guild Created:**  ${guild.createdAt}
        **Channels:** ${guild.channels.filter((c) => c.type === "category").size} Category | ${guild.channels.filter((c) => c.type === "news").size} Announcements | ${guild.channels.filter((c) => c.type === "text").size} Text | ${guild.channels.filter((c) => c.type === "voice").size} Voice | ${guild.channels.size} Total 

        __Member Info__
        👪 **Member Count:**   ${guild.memberCount}
        🧍  **Humans:** ${humans}
        🤖 **Bots:** ${bots}`)
        .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)
    
    message.channel.send(sInfo);
};
module.exports.help = {
    name: "serverinfo",
    aliases: [ "sinfo" ],
    description: "Get information about this guild",
    category: "Statistics"
}
module.exports.conf = {
    guildOnly: true
}
