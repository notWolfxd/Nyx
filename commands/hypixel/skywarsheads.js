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

    > **Angel of Death Tier:** ${(player.stats.SkyWars.angel_of_death_level || 0)}
    > **Heads Total:** ${(player.stats.SkyWars.heads || 0)}
    
    > **Eww:** ${(player.stats.SkyWars.heads_eww || 0)} | +1 EXP | 0-49 Kills
    > **Yucky:** ${(player.stats.SkyWars.heads_yucky || 0)} | +2 EXP | 50-199 Kills
    > **Meh:** ${(player.stats.SkyWars.heads_meh || 0)} | +3 EXP | 200-499 Kills
    > **Decent:** ${(player.stats.SkyWars.heads_decent || 0)} | +4 EXP | 500-999 Kills
    > **Salty:** ${(player.stats.SkyWars.heads_salty || 0)} | +5 EXP | 1000-1999 Kills
    > **Tasty:** ${(player.stats.SkyWars.heads_tasty || 0)} | +6 EXP | 2000-4999 Kills
    > **Succulent:** ${(player.stats.SkyWars.heads_succulent || 0)} | +7 EXP | 5000-9999 Kills
    > **Divine:** ${(player.stats.SkyWars.heads_divine || 0)} | +10 EXP | 10,000-24,999 Kills
    > **Heavenly:** ${(player.stats.SkyWars.heads_heavenly || 0)} | +15 EXP | 25,000+ Kills
    > **Sweet:** ${(player.stats.SkyWars.heads_sweet || 0)} | +15 EXP | Staff/ YT w/ <10,000 Kills`)

    .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    message.channel.send(embed);

}

module.exports.help = {
    name: "skywarsheads",
    aliases: [ "swheads", "swh" ],
    description: "Get a player's SkyWars corrupted game head statistics.",
    usage: "skywarsheads <IGN>",
    example: "skywarsheads Childish",
    category: "Hypixel"
}
