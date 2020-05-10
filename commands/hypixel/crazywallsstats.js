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
    
    .setDescription(`[**${player.displayname}'s Crazy Walls Stats**](https://hypixel.net/${args[0]})`)
    .setThumbnail('https://cravatar.eu/head/' + (player.uuid || '') + '?size=2408.png')
    .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
    
    .addField('**__General:__**', stripIndents`<:gamesplayed:706020723185025116> **Games Played:** ${(player.stats.TrueCombat.games || 0)}

    <:head:706238121486057513> **Golden Skulls:** ${(player.stats.TrueCombat.golden_skulls || 0)}
    <:soul:706238190763114496> **Skulls Gathered:** ${(player.stats.TrueCombat.skulls_gathered || 0)}

    <:coins:706031344249077820> **Coins:** ${(player.stats.TrueCombat.coins || 0)}
    <:tokens:706031250254594108> **Gold Dust:** ${(player.stats.TrueCombat.gold_dust || 0)}`)
    
    .addField('**__Solo Total:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${((player.stats.TrueCombat.crazywalls_kills_solo || 0) + (player.stats.TrueCombat.crazywalls_kills_solo_chaos || 0))}
    <:death:706031056536731669> **Deaths:** ${((player.stats.TrueCombat.crazywalls_deaths_solo || 0) + (player.stats.TrueCombat.crazywalls_deaths_solo_chaos || 0))}
    <:kdr:706032148012072990> **K/D:** ${(((player.stats.TrueCombat.crazywalls_kills_solo || 0) + (player.stats.TrueCombat.crazywalls_kills_solo_chaos || 0)) / ((player.stats.TrueCombat.crazywalls_deaths_solo || 0.0001) + (player.stats.TrueCombat.crazywalls_deaths_solo_chaos || 0.9999))).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${((player.stats.TrueCombat.crazywalls_wins_solo || 0) + (player.stats.TrueCombat.crazywalls_wins_solo_chaos || 0))}
    <:loss:706030978790850670> **Losses:** ${((player.stats.TrueCombat.crazywalls_losses_solo || 0) + (player.stats.TrueCombat.crazywalls_losses_solo_chaos || 0))}
    <:wlr:706032249098731540> **W/L:** ${(((player.stats.TrueCombat.crazywalls_wins_solo || 0) + (player.stats.TrueCombat.crazywalls_wins_solo_chaos || 0)) / ((player.stats.TrueCombat.crazywalls_losses_solo || 0.0001) + (player.stats.TrueCombat.crazywalls_losses_solo_chaos || 0.9999))).toPrecision(2)}`, true)

    .addField('**__Solo Normal:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.TrueCombat.crazywalls_kills_solo || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.TrueCombat.crazywalls_deaths_solo || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.TrueCombat.crazywalls_kills_solo || 0) / (player.stats.TrueCombat.crazywalls_deaths_solo || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.TrueCombat.crazywalls_wins_solo || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.TrueCombat.crazywalls_losses_solo || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.TrueCombat.crazywalls_wins_solo || 0) / (player.stats.TrueCombat.crazywalls_losses_solo || 1)).toPrecision(2)}`, true)

    .addField('**__Solo Lucky:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.TrueCombat.crazywalls_kills_solo_chaos || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.TrueCombat.crazywalls_deaths_solo_chaos || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.TrueCombat.crazywalls_kills_solo_chaos || 0) / (player.stats.TrueCombat.crazywalls_deaths_solo_chaos || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.TrueCombat.crazywalls_wins_solo_chaos || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.TrueCombat.crazywalls_losses_solo_chaos || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.TrueCombat.crazywalls_wins_solo_chaos || 0) / (player.stats.TrueCombat.crazywalls_losses_solo_chaos || 1)).toPrecision(2)}`, true)

    .addField('➖➖➖', `➖➖➖`)
    
    .addField('**__Teams Total:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${((player.stats.TrueCombat.crazywalls_kills_team || 0) + (player.stats.TrueCombat.crazywalls_kills_team_chaos || 0))}
    <:death:706031056536731669> **Deaths:** ${((player.stats.TrueCombat.crazywalls_deaths_team || 0) + (player.stats.TrueCombat.crazywalls_deaths_team_chaos || 0))}
    <:kdr:706032148012072990> **K/D:** ${(((player.stats.TrueCombat.crazywalls_kills_team || 0) + (player.stats.TrueCombat.crazywalls_kills_team_chaos || 0)) / ((player.stats.TrueCombat.crazywalls_deaths_team || 0.0001) + (player.stats.TrueCombat.crazywalls_deaths_team_chaos || 0.9999))).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${((player.stats.TrueCombat.crazywalls_wins_team || 0) + (player.stats.TrueCombat.crazywalls_wins_team_chaos || 0))}
    <:loss:706030978790850670> **Losses:** ${((player.stats.TrueCombat.crazywalls_losses_team || 0) + (player.stats.TrueCombat.crazywalls_losses_team_chaos || 0))}
    <:wlr:706032249098731540> **W/L:** ${(((player.stats.TrueCombat.crazywalls_wins_team || 0) + (player.stats.TrueCombat.crazywalls_wins_team_chaos || 0)) / ((player.stats.TrueCombat.crazywalls_losses_team || 0.0001) + (player.stats.TrueCombat.crazywalls_losses_team_chaos || 0.9999))).toPrecision(2)}`, true)

    .addField('**__Teams Normal:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.TrueCombat.crazywalls_kills_team || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.TrueCombat.crazywalls_deaths_team || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.TrueCombat.crazywalls_kills_team || 0) / (player.stats.TrueCombat.crazywalls_deaths_team || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.TrueCombat.crazywalls_wins_team || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.TrueCombat.crazywalls_losses_team || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.TrueCombat.crazywalls_wins_team || 0) / (player.stats.TrueCombat.crazywalls_losses_team || 1)).toPrecision(2)}`, true)

    .addField('**__Teams Lucky:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.TrueCombat.crazywalls_kills_team_chaos || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.TrueCombat.crazywalls_deaths_team_chaos || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.TrueCombat.crazywalls_kills_team_chaos || 0) / (player.stats.TrueCombat.crazywalls_deaths_team_chaos || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.TrueCombat.crazywalls_wins_team_chaos || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.TrueCombat.crazywalls_losses_team_chaos || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.TrueCombat.crazywalls_wins_team_chaos || 0) / (player.stats.TrueCombat.crazywalls_losses_team_chaos || 1)).toPrecision(2)}`, true)

    .addField('➖➖➖', `➖➖➖`)
    
    .addField('**__Overall:__**', stripIndents`<:kill:706030866949734442> **Kills:** ${(player.stats.TrueCombat.kills || 0)}
    <:death:706031056536731669> **Deaths:** ${(player.stats.TrueCombat.deaths || 0)}
    <:kdr:706032148012072990> **K/D:** ${((player.stats.TrueCombat.kills || 0) / (player.stats.TrueCombat.deaths || 1)).toPrecision(2)}

    <:win:706020774938411048> **Wins:** ${(player.stats.TrueCombat.wins || 0)}
    <:loss:706030978790850670> **Losses:** ${(player.stats.TrueCombat.losses || 0)}
    <:wlr:706032249098731540> **W/L:** ${((player.stats.TrueCombat.wins || 0) / (player.stats.TrueCombat.losses || 1)).toPrecision(2)}`, true)

    .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    message.channel.send(embed);

}

module.exports.help = {
    name: "crazywallsstats",
    aliases: [ "cw", "cwstats", "crazywalls", "cws" ],
    description: "Get a player's Crazy Walls general statistics.",
    usage: "crazywallsstats <IGN>",
    example: "crazywallsstats Mockball",
    category: "Hypixel"
}
