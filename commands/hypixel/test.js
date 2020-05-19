const { RichEmbed } = require("discord.js");
const Hypixel = require('hypixel-api');
const { stripIndents } = require("common-tags");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

    let member = message.author;
    let key = process.env.HYPIXEL_TOKEN;
    let player;

    const HypixelClient = new Hypixel(key);
    
    try {
        player = (await HypixelClient.getPlayer('name', args[0])).player
        }
    catch (err) {
        console.log(err)
        message.channel.send('Hmm, that player doesn\'t seem to exist!')
        return;
                }

    const embed = new RichEmbed()

    .setDescription(`[**${player.displayname}'s SkyWars Heads**](https://hypixel.net/${args[0]})`)
    .setThumbnail('https://cravatar.eu/head/' + (player.uuid || '') + '?size=2408.png')
    .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

    .addField('**__Heads Information:__**', stripIndents`Each head gives a different amount of EXP, and can only be obtained from corrupted games.
    > **Angel of Death Tier:** ${(player.stats.Arena.coins || 0)}`)

    .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    message.channel.send(embed);

}

module.exports.help = {
    name: "test",
    aliases: [ "swts", "swth" ],
    description: "Get a player's SkyWars corrupted game head statistics.",
    usage: "skywarsheads <IGN>",
    example: "skywarsheads Childish",
    category: "Hypixel"
}