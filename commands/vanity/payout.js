const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   if (message.author id !== "298812170093723649")
      return;
    
      else {

    //Build payout help Embed
    var payoutHelpEmbed = new Discord.RichEmbed()

    .setTitle("Command: Payout")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Format all the commands for paying out Buycraft codes.")
    .addField("Available Payout Realms: ", "Demonic, Heroic, Runic, Space, WildWest, Jungle, Alcatraz, & Mythic")
    .addField("Available Payout Compendiums: ", "Faction Top, Island Top, Cell Top, KoTH Top, Prestige Top, mcMMO Top, Herbalism Top, & Block Top")
    .addField("Usage: ", "-payout <Realm> <Compendium> <Winners>")
    .addField("Example: ", "-payout Demonic FTop Promised Redemption Cloud9")
    .setFooter("Nyx v1.4.8 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for payout.
    let payoutDefine = args.join(" ");
    let realm = payoutDefine[0];
       if (!payoutDefine[0]) 
        return message.channel.sendEmbed(payoutHelpEmbed);
    let compendium = payoutDefine[1];
    
    let facsrealmaliases = [ "demonic", "heroic", "runic", "d", "h", "r" ];
    let sbaliases = [ "space", "jungle", "wildwest", "s", "j", "ww" ];
    let prisonaliases = [ "alcatraz", "mythic", "a", "m" ];
    let individualcompendiumaliases = [ "kothtop", "prestigetop", "mcmmotop", "herbalismtop", "blocktop", "kt", "pt", "mt", "ht", "bt" ];
    let smallcompendiumaliases = [ "celltop", "islandtop", "istop", "ctop", "ct", "it" ];
    let bigcompendiumaliases = [ "factiontop", "ftop", "ft" ];

    //Build the Payout message Embed.
    var individualCompendiumEmbed = new Discord.RichEmbed()

    .setTitle(`Payouts For: ${realm} | ${compendium}`)
    .setColor("#ffa0bb")
    .setThumbnail(message.author.avatarURL)
    .addField("1st: ", `/givecoupon p ${payoutDefine[3]} 30`)
    .addField("2nd: ", `/givecoupon p ${payoutDefine[4]} 20`)
    .addField("3rd: ", `/givecoupon p ${payoutDefine[5]} 10`)
    .setFooter("Nyx v1.4.8 | Made By: Wolf#9001", client.user.avatarURL)

   if (individualcompendiumaliases.includes(payoutDefine[1].toLowerCase()) && prisonaliases.includes(payoutDefine[0].toLowerCase())) {
      await message.channel.send(individualCompendiumEmbed);
            }
         }
      }
 module.exports.help = {
    name: "payout",
    aliases: [ "buycraft",
               "po"
             ]
}
