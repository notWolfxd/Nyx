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

    .setDescription(`[**${player.displayname}'s SkyWars Stats**](https://hypixel.net/${args[0]})`)
    .setThumbnail('https://cravatar.eu/head/' + (player.uuid || '') + '?size=2408.png')
    .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

    .addField('**__General:__**', stripIndents`<:level:706030765473005568> **Level:** ${(player.stats.SkyWars.levelFormatted || "§71").replace(/(§[0-9])+/g, "").replace(/(§[a-z])+/g, "")}
    <:lootbox:706032330422353942> **Loot Boxes:** ${(player.stats.SkyWars.skywars_chests || 0)}
    <:gamesplayed:706020723185025116> **Games Played:** ${(player.stats.SkyWars.games_played_skywars || 0)}

    <:head:706238121486057513> **Heads:** ${(player.stats.SkyWars.heads || 0)}
    <:soul:706238190763114496> **Souls:** ${(player.stats.SkyWars.souls || 0)}

    <:coins:706031344249077820> **Coins:** ${(player.stats.SkyWars.coins || 0)}
    <:tokens:706031250254594108> **Tokens:** ${(player.stats.SkyWars.cosmetic_tokens || 0)}`)

    .addField('**__Solo Total:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_solo || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_solo || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_solo || 0) / (player.stats.SkyWars.deaths_solo || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_solo || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_solo || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_solo || 0) / (player.stats.SkyWars.losses_solo || 1)).toPrecision(2)}`, true)

    .addField('**__Solo Insane:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_solo_insane || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_solo_insane || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_solo_insane || 0) / (player.stats.SkyWars.deaths_solo_insane || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_solo_insane || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_solo_insane || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_solo_insane || 0) / (player.stats.SkyWars.losses_solo_insane || 1)).toPrecision(2)}`, true)

    .addField('**__Solo Normal:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_solo_normal || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_solo_normal || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_solo_normal || 0) / (player.stats.SkyWars.deaths_solo_normal || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_solo_normal || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_solo_normal || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_solo_normal || 0) / (player.stats.SkyWars.losses_solo_normal || 1)).toPrecision(2)}`, true)

    .addField('**__Doubles Total:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_team || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_team || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_team || 0) / (player.stats.SkyWars.deaths_team || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_team || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_team || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_team || 0) / (player.stats.SkyWars.losses_team || 1)).toPrecision(2)}`, true)

    .addField('**__Doubles Insane:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_team_insane || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_team_insane || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_team_insane || 0) / (player.stats.SkyWars.deaths_team_insane || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_team_insane || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_team_insane || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_team_insane || 0) / (player.stats.SkyWars.losses_team_insane || 1)).toPrecision(2)}`, true)

    .addField('**__Doubles Normal:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_team_normal || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_team_normal || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_team_normal || 0) / (player.stats.SkyWars.deaths_team_normal || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_team_normal || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_team_normal || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_team_normal || 0) / (player.stats.SkyWars.losses_team_normal || 1)).toPrecision(2)}`, true)

    .addField('**__Ranked:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_ranked || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_ranked || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_ranked || 0) / (player.stats.SkyWars.deaths_ranked || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_ranked || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_ranked || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_ranked || 0) / (player.stats.SkyWars.losses_ranked || 1)).toPrecision(2)}`, true)

    .addField('**__Lab:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_lab || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_lab || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_lab || 0) / (player.stats.SkyWars.deaths_lab || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_lab || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_lab || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_lab || 0) / (player.stats.SkyWars.losses_lab || 1)).toPrecision(2)}`, true)

    .addField('**__Mega (Doubles):__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.SkyWars.kills_mega_doubles || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.SkyWars.deaths_mega_doubles || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.SkyWars.kills_mega_doubles || 0) / (player.stats.SkyWars.deaths_mega_doubles || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.SkyWars.wins_mega_doubles || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.SkyWars.losses_mega_doubles || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.SkyWars.wins_mega_doubles || 0) / (player.stats.SkyWars.losses_mega_doubles || 1)).toPrecision(2)}`, true)

    .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    message.channel.send(embed);

}

module.exports.help = {
    name: "skywarsstats",
    aliases: [ "sw", "swstats", "skywars", "sws" ],
    description: "Get a player's SkyWars general statistics.",
    usage: "skywarsstats <IGN>",
    example: "skywarsstats Sackboy_Clank5",
    category: "Hypixel"
}
