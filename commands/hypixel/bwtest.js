const { RichEmbed } = require("discord.js");
const Hypixel = require('hypixel-api');
const { stripIndents } = require("common-tags");
const config = require("../../config.json")

module.exports.run = async (client, message, args) => {

    
  if (message.channel.id !== "410526913879080960" && message.channel.id !== "460217052339372042" && message.author.id !== "298812170093723649") return;
    
    let member = message.author;
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

    .addField('**__General:__**', stripIndents`:rosette: **Level:** ${(`player.stats.BedWars.four_four_permanent _items_purchased_bedwars` || 0)}`)
    
        .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    message.channel.send(embed);

}

module.exports.help = {
    name: "bwtest",
    aliases: [ "bwt", "bwtstats", "bedwarst", "bwts" ],
    description: "Get a player's BedWarst general statistics.",
    usage: "bedwarsstatts <IGN>",
    example: "bedwarsstatst Wolf",
    category: "Hypixel"
}
