const { RichEmbed } = require("discord.js");
const Hypixel = require('hypixel-api');
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json")

module.exports.run = async (client, message, args) => {

    let member = message.author;
    let key = process.env.HYPIXEL_TOKEN;
    const HypixelClient = new Hypixel(key);

    let player;

    try {
        player = (await HypixelClient.getPlayer('name', args[0])).player
    }
    catch (err) {
        console.log(err)
        message.channel.send('Hmm, that player doesn\'t seem to exist!')
        return
    }

    const embed = new RichEmbed()

    .setDescription(`[**${player.displayname}'s SkyWars Stats**](https://hypixel.net/${args[0]})`)
    .setThumbnail('https://cravatar.eu/head/' + (player.uuid || '') + '?size=2408.png')
    .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

    .addField('**__General:__**', `:rosette: **Level:** ${(player.stats.SkyWars.levelFormatted).replace(/[^0-9\.]+/g, "")}
    :video_game: **Games Played:** ${player.stats.SkyWars.games_played_skywars}

    :skull: **Heads:** ${(player.stats.SkyWars.heads || 0)}
    :ghost: **Souls:** ${(player.stats.SkyWars.souls || 0)}

    :moneybag: **Coins:** ${(player.stats.SkyWars.coins || 0)}
    :gem: **Tokens:** ${(player.stats.SkyWars.cosmetic_tokens || 0)}`)

    .addField('**__Solo Total:__**', `> **Kills:** ${(player.stats.SkyWars.kills_solo || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_solo || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_solo || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_solo || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_solo / player.stats.SkyWars.losses_solo).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_solo / player.stats.SkyWars.deaths_solo).toPrecision(2) || 0)}
    - - -`, true)

    .addField('**__Solo Insane:__**', `> **Kills:** ${(player.stats.SkyWars.kills_solo_insane || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_solo_insane || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_solo_insane || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_solo_insane || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_solo_insane / player.stats.SkyWars.losses_solo_insane).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_solo_insane / player.stats.SkyWars.deaths_solo_insane).toPrecision(2) || 0)}
    - - -`, true)

    .addField('**__Solo Normal:__**', `> **Kills:** ${(player.stats.SkyWars.kills_solo_normal || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_solo_normal || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_solo_normal || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_solo_normal || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_solo_normal / player.stats.SkyWars.losses_solo_normal).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_solo_normal / player.stats.SkyWars.deaths_solo_normal).toPrecision(2) || 0)}
    - - -`, true)

    .addField('**__Doubles Total:__**', `> **Kills:** ${(player.stats.SkyWars.kills_team || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_team || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_team || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_team || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_team / player.stats.SkyWars.losses_team).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_team / player.stats.SkyWars.deaths_team).toPrecision(2) || 0)}
    - - -`, true)

    .addField('**__Doubles Insane:__**', `> **Kills:** ${(player.stats.SkyWars.kills_team_insane || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_team_insane || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_team_insane || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_team_insane || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_team_insane / player.stats.SkyWars.losses_team_insane).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_team_insane / player.stats.SkyWars.deaths_team_insane).toPrecision(2) || 0)}
    - - -`, true)

    .addField('**__Doubles Normal:__**', `> **Kills:** ${(player.stats.SkyWars.kills_team_normal || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_team_normal || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_team_normal || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_team_normal || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_team_normal / player.stats.SkyWars.losses_team_normal).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_team_normal / player.stats.SkyWars.deaths_team_normal).toPrecision(2) || 0)}
    - - -`, true)

    .addField('**__Ranked:__**', `> **Kills:** ${(player.stats.SkyWars.kills_ranked || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_ranked || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_ranked || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_ranked || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_ranked / player.stats.SkyWars.losses_ranked).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_ranked / player.stats.SkyWars.deaths_ranked).toPrecision(2) || 0)}`, true)

    .addField('**__Lab:__**', `> **Kills:** ${(player.stats.SkyWars.kills_lab || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_lab || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_lab || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_lab || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_lab / player.stats.SkyWars.losses_lab).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_lab / player.stats.SkyWars.deaths_lab).toPrecision(2) || 0)}`, true)

    .addField('**__Mega (Doubles):__**', `> **Kills:** ${(player.stats.SkyWars.kills_mega_doubles || 0)}
    > **Deaths:** ${(player.stats.SkyWars.deaths_mega_doubles || 0)}
    > **Wins:** ${(player.stats.SkyWars.wins_mega_doubles || 0)}
    > **Losses:** ${(player.stats.SkyWars.losses_mega_doubles || 0)}
    > **W/L:** ${((player.stats.SkyWars.wins_mega_doubles / player.stats.SkyWars.losses_mega_doubles).toPrecision(2) || 0)}
    > **K/D:** ${((player.stats.SkyWars.kills_mega_doubles / player.stats.SkyWars.deaths_mega_doubles).toPrecision(2) || 0)}`, true)

    .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    message.channel.send(embed)

}

module.exports.help = {
    name: "skywarsstats",
    aliases: [
        "sw",
        "swstats",
        "skywars",
        "sws"
    ]
}
