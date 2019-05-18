const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    //Build Suggest help Embed
    var suggestHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: Suggest")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Sends a suggestion to the suggestion channel. Once sent the players/ users can vote upon what was suggested.")
    .addField("Usage: ", "-suggest <Gamemode [factions | skyblock | prison]> <Suggestion>")
    .addField("Example: ", "-suggest Factions ╠═══╣ Lets build a ladder to demote Milk ╠═══╣")
    .setFooter("Nyx v1.4.6 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for Suggest.
    let gametype = args[0];
    let suggestion = args.slice(1).join(" ");
    let facsaliases = [ "facs", "factions", "faction", "demonic", "heroic", "apocalyptic" ];
    let sbaliases = [ "sb", "skyblock", "island", "space", "jungle", "wildwest", "wild west" ];
    let prisonaliases = [ "prison", "prisons", "cell", "gang", "galactic", "alcatraz", "mythic" ];

    
    //Build the .suggest message Embed.
    var suggestEmbed = new Discord.RichEmbed()
    .setTitle("Suggestion")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Suggested By:", `${message.author}#${message.author.discriminator} | ${message.author.id}`)
    .addField("Suggestion For:", `${gametype}`)
    .addField("Their Suggestion Is:", `${suggestion}`)
    .setFooter("Nyx v1.4.6 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
  if (message.guild.id == ("576567811552313361") && sbaliases.includes(gametype.toLowerCase())) {
    let voting = await client.channels.get("576825389305954324").sendEmbed(suggestEmbed);
    await voting.react("✅");
    await voting.react("❌");
    await message.channel.send("Thank you for your suggestion, it has been sent to the suggestion area for players to vote on!");
   }
  else {
      await message.channel.send("You did not specify a proper Skyblock Realm alias in your gamemode area.");
  }
 }                 
 module.exports.help = {
    name: "suggest",
    aliases: [ "s",
               "suggestion"
             ]
 }
