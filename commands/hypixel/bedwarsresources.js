const { RichEmbed } = require("discord.js");
const Hypixel = require('hypixel-api');
const { stripIndents } = require("common-tags");
const config = require("../../config.json")

module.exports.run = async (client, message, args) => {

    
  if (message.channel.id !== "410526913879080960" && message.channel.id !== "460217052339372042" && message.author.id !== "298812170093723649") return;
    
    let member = message.member;
    let key = process.env.HYPIXEL_TOKEN;
    let player;
    
    const HypixelClient = new Hypixel(key);

    try {
        player = ( await HypixelClient.getPlayer('name', args[0])).player
        }
    catch (err) {
        console.log(err)
        message.channel.send('Hmm, that player doesn\'t seem to exist!')
        return;
                }

    const embed = new RichEmbed()

    .setDescription(`[**${player.displayname}'s BedWars Stats**](https://hypixel.net/${args[0]})`)
    .setThumbnail('https://cravatar.eu/head/' + (player.uuid || '') + '?size=2408.png')
    .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

    .addField('**__Solo:__**', stripIndents`<:iron:706352503259922432> **Iron:** ${(player.stats.Bedwars.eight_one_iron_resources_collected_bedwars || 0)}
    <:gold:706352435458998322> **Gold:** ${(player.stats.Bedwars.eight_one_gold_resources_collected_bedwars || 0)}
    <:diamond:706352360385151056> **Diamond:** ${(player.stats.Bedwars.eight_one_diamond_resources_collected_bedwars || 0)}
    <:emerald:706352270866120746> **Emerald:** ${(player.stats.Bedwars.eight_one_emerald_resources_collected_bedwars || 0)}

    <:chest:706505262294368348> **Total:** ${(player.stats.Bedwars.eight_one_resources_collected_bedwars || 0)}`, true)

    .addField('**__Doubles:__**', stripIndents`<:iron:706352503259922432> **Iron:** ${(player.stats.Bedwars.eight_two_iron_resources_collected_bedwars || 0)}
    <:gold:706352435458998322> **Gold:** ${(player.stats.Bedwars.eight_two_gold_resources_collected_bedwars || 0)}
    <:diamond:706352360385151056> **Diamond:** ${(player.stats.Bedwars.eight_two_diamond_resources_collected_bedwars || 0)}
    <:emerald:706352270866120746> **Emerald:** ${(player.stats.Bedwars.eight_two_emerald_resources_collected_bedwars || 0)}

    <:chest:706505262294368348> **Total:** ${(player.stats.Bedwars.eight_two_resources_collected_bedwars || 0)}`, true)

    .addField('➖➖➖', `➖➖➖`)

    .addField('**__3v3v3v3:__**', stripIndents`<:iron:706352503259922432> **Iron:** ${(player.stats.Bedwars.four_three_iron_resources_collected_bedwars || 0)}
    <:gold:706352435458998322> **Gold:** ${(player.stats.Bedwars.four_three_gold_resources_collected_bedwars || 0)}
    <:diamond:706352360385151056> **Diamond:** ${(player.stats.Bedwars.four_three_diamond_resources_collected_bedwars || 0)}
    <:emerald:706352270866120746> **Emerald:** ${(player.stats.Bedwars.four_three_emerald_resources_collected_bedwars || 0)}
    
    <:chest:706505262294368348> **Total:** ${(player.stats.Bedwars.four_three_resources_collected_bedwars || 0)}`, true)

    .addField('**__4v4v4v4:__**', stripIndents`<:iron:706352503259922432> **Iron:** ${(player.stats.Bedwars.four_four_iron_resources_collected_bedwars || 0)}
    <:gold:706352435458998322> **Gold:** ${(player.stats.Bedwars.four_four_gold_resources_collected_bedwars || 0)}
    <:diamond:706352360385151056> **Diamond:** ${(player.stats.Bedwars.four_four_diamond_resources_collected_bedwars || 0)}
    <:emerald:706352270866120746> **Emerald:** ${(player.stats.Bedwars.four_four_emerald_resources_collected_bedwars || 0)}
    
    <:chest:706505262294368348> **Total:** ${(player.stats.Bedwars.four_four_resources_collected_bedwars || 0)}`, true)

    .addField('➖➖➖', `➖➖➖`)

    .addField('**__Overall:__**', stripIndents`<:iron:706352503259922432> **Iron:** ${(player.stats.Bedwars.iron_resources_collected_bedwars || 0)}
    <:gold:706352435458998322> **Gold:** ${(player.stats.Bedwars.gold_resources_collected_bedwars || 0)}
    <:diamond:706352360385151056> **Diamond:** ${(player.stats.Bedwars.diamond_resources_collected_bedwars || 0)}
    <:emerald:706352270866120746> **Emerald:** ${(player.stats.Bedwars.emerald_resources_collected_bedwars || 0)}
    
    <:chest:706505262294368348> **Total:** ${(player.stats.Bedwars.resources_collected_bedwars || 0)}`, true)

    .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    message.channel.send(embed);

}

module.exports.help = {
    name: "bedwarsresources",
    aliases: [ "bwr", "bwres", "bwdresources", "bwrescollected" ],
    description: "Get a player's resources collected in BedWars statistics.",
    usage: "bedwarsresources <IGN>",
    example: "bedwarsresources Cloudz",
    category: "Hypixel"
}
