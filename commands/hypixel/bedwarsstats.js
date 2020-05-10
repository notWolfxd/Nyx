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

    .addField('**__General:__**', stripIndents`:rosette: **Level:** ${(player.achievements.bedwars_level || 0)}
    🏆 **Winstreak:** ${(player.stats.Bedwars.winstreak || 0)}
    :video_game: **Games Played:** ${(player.stats.Bedwars.games_played_bedwars || 0)}

    :moneybag: **Coins:** ${(player.stats.Bedwars.coins || 0)}
    🎁 **Loot Boxes:** ${((player.stats.Bedwars.bedwars_boxes || 0) + (player.stats.Bedwars.bedwars_halloween_boxes || 0) + (player.stats.Bedwars.bedwars_lunar_boxes || 0) + (player.stats.Bedwars.bedwars_christmas_boxes || 0) + (player.stats.Bedwars.bedwars_easter_boxes || 0) || 0)}`)

    .addField('**__Solo:__**', stripIndents`> **Beds Broken:** ${(player.stats.Bedwars.eight_one_beds_broken_bedwars || 0)}
    
    > **Kills:** ${(player.stats.Bedwars.eight_one_kills_bedwars || 0)}
    > **Deaths:** ${(player.stats.Bedwars.eight_one_deaths_bedwars || 0)}
    > **K/D:** ${((player.stats.Bedwars.eight_one_kills_bedwars || 0) / (player.stats.Bedwars.eight_one_deaths_bedwars || 1)).toPrecision(2)}

    > **Wins:** ${(player.stats.Bedwars.eight_one_wins_bedwars || 0)}
    > **Losses:** ${(player.stats.Bedwars.eight_one_losses_bedwars || 0)}
    > **W/L:** ${((player.stats.Bedwars.eight_one_wins_bedwars || 0) / (player.stats.Bedwars.eight_one_losses_bedwars || 1)).toPrecision(2)}

    > **Final Kills:** ${(player.stats.Bedwars.eight_one_final_kills_bedwars || 0)}
    > **Final Deaths:** ${(player.stats.Bedwars.eight_one_final_deaths_bedwars || 0)}
    > **FK/FD:** ${((player.stats.Bedwars.eight_one_final_kills_bedwars || 0) / (player.stats.Bedwars.eight_one_final_deaths_bedwars || 1)).toPrecision(2)}`, true)

    .addField('**__Doubles:__**', stripIndents`> **Beds Broken:** ${(player.stats.Bedwars.eight_two_beds_broken_bedwars || 0)}
    
    > **Kills:** ${(player.stats.Bedwars.eight_two_kills_bedwars || 0)}
    > **Deaths:** ${(player.stats.Bedwars.eight_two_deaths_bedwars || 0)}
    > **K/D:** ${((player.stats.Bedwars.eight_two_kills_bedwars || 0) / (player.stats.Bedwars.eight_two_deaths_bedwars || 1)).toPrecision(2)}

    > **Wins:** ${(player.stats.Bedwars.eight_two_wins_bedwars || 0)}
    > **Losses:** ${(player.stats.Bedwars.eight_two_losses_bedwars || 0)}
    > **W/L:** ${((player.stats.Bedwars.eight_two_wins_bedwars || 0) / (player.stats.Bedwars.eight_two_losses_bedwars || 1)).toPrecision(2)}

    > **Final Kills:** ${(player.stats.Bedwars.eight_two_final_kills_bedwars || 0)}
    > **Final Deaths:** ${(player.stats.Bedwars.eight_two_final_deaths_bedwars || 0)}
    > **FK/FD:** ${((player.stats.Bedwars.eight_two_final_kills_bedwars || 0) / (player.stats.Bedwars.eight_two_final_deaths_bedwars || 1)).toPrecision(2)}`, true)

    .addField('➖➖➖', `➖➖➖`)

    .addField('**__3v3v3v3:__**', stripIndents`> **Beds Broken:** ${(player.stats.Bedwars.four_three_beds_broken_bedwars || 0)}
    
    > **Kills:** ${(player.stats.Bedwars.four_three_kills_bedwars || 0)}
    > **Deaths:** ${(player.stats.Bedwars.four_three_deaths_bedwars || 0)}
    > **K/D:** ${((player.stats.Bedwars.four_three_kills_bedwars || 0) / (player.stats.Bedwars.four_three_deaths_bedwars || 1)).toPrecision(2)}

    > **Wins:** ${(player.stats.Bedwars.four_three_wins_bedwars || 0)}
    > **Losses:** ${(player.stats.Bedwars.four_three_losses_bedwars || 0)}
    > **W/L:** ${((player.stats.Bedwars.four_three_wins_bedwars || 0) / (player.stats.Bedwars.four_three_losses_bedwars || 1)).toPrecision(2)}

    > **Final Kills:** ${(player.stats.Bedwars.four_three_final_kills_bedwars || 0)}
    > **Final Deaths:** ${(player.stats.Bedwars.four_three_final_deaths_bedwars || 0)}
    > **FK/FD:** ${((player.stats.Bedwars.four_three_final_kills_bedwars || 0) / (player.stats.Bedwars.four_three_final_deaths_bedwars || 1)).toPrecision(2)}`, true)

    .addField('**__4v4v4v4:__**', stripIndents`> **Beds Broken:** ${(player.stats.Bedwars.four_four_beds_broken_bedwars || 0)}
    
    > **Kills:** ${(player.stats.Bedwars.four_four_kills_bedwars || 0)}
    > **Deaths:** ${(player.stats.Bedwars.four_four_deaths_bedwars || 0)}
    > **K/D:** ${((player.stats.Bedwars.four_four_kills_bedwars || 0) / (player.stats.Bedwars.four_four_deaths_bedwars || 1)).toPrecision(2)}

    > **Wins:** ${(player.stats.Bedwars.four_four_wins_bedwars || 0)}
    > **Losses:** ${(player.stats.Bedwars.four_four_losses_bedwars || 0)}
    > **W/L:** ${((player.stats.Bedwars.four_four_wins_bedwars || 0) / (player.stats.Bedwars.four_four_losses_bedwars || 1)).toPrecision(2)}

    > **Final Kills:** ${(player.stats.Bedwars.four_four_final_kills_bedwars || 0)}
    > **Final Deaths:** ${(player.stats.Bedwars.four_four_final_deaths_bedwars || 0)}
    > **FK/FD:** ${((player.stats.Bedwars.four_four_final_kills_bedwars || 0) / (player.stats.Bedwars.four_four_final_deaths_bedwars || 1)).toPrecision(2)}`, true)

    .addField('➖➖➖', `➖➖➖`)

    .addField('**__Overall:__**', stripIndents`> **Beds Broken:** ${(player.stats.Bedwars.beds_broken_bedwars || 0)}
    
    > **Kills:** ${(player.stats.Bedwars.kills_bedwars || 0)}
    > **Deaths:** ${(player.stats.Bedwars.deaths_bedwars || 0)}
    > **K/D:** ${((player.stats.Bedwars.kills_bedwars || 0) / (player.stats.Bedwars.deaths_bedwars || 1)).toPrecision(2)}

    > **Wins:** ${(player.stats.Bedwars.wins_bedwars || 0)}
    > **Losses:** ${(player.stats.Bedwars.losses_bedwars || 0)}
    > **W/L:** ${((player.stats.Bedwars.wins_bedwars || 0) / (player.stats.Bedwars.losses_bedwars || 1)).toPrecision(2)}

    > **Final Kills:** ${(player.stats.Bedwars.final_kills_bedwars || 0)}
    > **Final Deaths:** ${(player.stats.Bedwars.final_deaths_bedwars || 0)}
    > **FK/FD:** ${((player.stats.Bedwars.final_kills_bedwars || 0) / (player.stats.Bedwars.final_deaths_bedwars || 1)).toPrecision(2)}`)

    .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    message.channel.send(embed);

}

module.exports.help = {
    name: "bedwarsstats",
    aliases: [ "bw", "bwstats", "bedwars", "bws" ],
    description: "Get a player's BedWars general statistics.",
    usage: "bedwarsstats <IGN>",
    example: "bedwarsstats Wolf",
    category: "Hypixel"
}
