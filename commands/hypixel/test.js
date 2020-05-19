const { RichEmbed } = require("discord.js");
const Hypixel = require('hypixel-api');
const { stripIndents } = require("common-tags");
const nodef = require("node-fetch");
const config = require("../../config.json");

module.exports.run = async (client, message, args, p1, p2) => {
   
	const targetType = (p2 ? p1 : 'uuid')
	const identifier = (p2 ? p2 : p1)

	let targetUUID = (targetType === 'uuid' ? identifier : null)

	if (targetType === 'name') {
		let playerResolution = await nodef('https://api.mojang.com/profiles/minecraft', 'POST').body([identifier]).send()

		if (playerResolution.statusCode === 200) {
			let body
			try {
				body = JSON.parse(playerResolution.body)

				if (!Array.isArray(body)) throw 'Not array'
			}
			catch (err) {
				throw new Error('Invalid response recieved from Mojang UUID resolution endpoint.')
			}

			if (body.length > 0) {
				targetUUID = body[0].id
			}
			else {
				throw new Error('Player does not exist.')
			}
		}
		else {
			throw new Error('Unexpected HTTP status code from Mojang UUID resolution endpoint.')
		}
	}

	return message.channel.send(targetUUID)


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
}

module.exports.help = {
    name: "test",
    aliases: [ "swts", "swth" ],
    description: "Get a player's SkyWars corrupted game head statistics.",
    usage: "skywarsheads <IGN>",
    example: "skywarsheads Childish",
    category: "Hypixel"
}
