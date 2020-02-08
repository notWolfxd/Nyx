const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {
    
    //Build Bug Report help Embed
    var bugHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: Bug Report")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Notify the developers of bugs you encounter.")
    .addField("Usage: ", "-bug <Gamemode [factions | skyblock | prison]> <Bug>")
    .addField("Example: ", "-bug Factions I can't unblacklist even with the permission blacklist.unblacklist!")
    .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)

    //Define the arguments for Bug Report.
    let gametype = args[0];
    let bug = args.slice(1).join(" ");
    let facsaliases = [ "facs", "factions", "faction", "demonic", "heroic", "apocalyptic" ];
    let sbaliases = [ "sb", "skyblock", "island", "space", "jungle", "wildwest", "wild west" ];
    let prisonaliases = [ "prison", "prisons", "cell", "gang", "galactic", "alcatraz", "mythic" ];
    if (!bug)
       return message.channel.send(bugHelpEmbed);
    
    //Build the Bug Report message Embed.
    var bugEmbed = new Discord.RichEmbed()
    .setTitle("Bug Report")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Reported By:", `${message.author.username}#${message.author.discriminator} | ${message.author.id}`)
    .addField("Bug on:", `${gametype}`)
    .addField("Their Bug Is:", `${bug}`)
    .setFooter(`${config.version} | Made By: Wolf#9001`, client.user.avatarURL)
    
  //Sending the completed message.
  if (message.guild.id == ("576567811552313361") && sbaliases.includes(gametype.toLowerCase())) {
    await client.channels.get("576825362072207372").sendEmbed(bugEmbed);
    await message.channel.send("Thank you for your bug report! It has been sent to the bug reports area for the developers to fix.");
   }
  else {
      await message.channel.send("You did not specify a proper Skyblock Realm alias in your gamemode area.");
  }
 }                 
 module.exports.help = {
    name: "bug",
    aliases: [ "bugs",
               "bugreport"
             ]
 }
