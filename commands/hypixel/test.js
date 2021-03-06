const { RichEmbed } = require("discord.js");
const Hypixel = require('hypixel-api');
const { stripIndents } = require("common-tags");
const nodef = require("node-fetch");
const config = require("../../config.json");
const Hypixel2 = require("../../api.js");

module.exports.run = async (client, message, args) => {
		
/* const dat2a = await nodef(`https://chan.sankakucomplex.com/post/show/20748210`);
const re2sp = JSON.parse( await dat2a.text() );
console.log(re2sp); */
    let member = message.author;
    let key = process.env.HYPIXEL_TOKEN;
    let player;
 let player2;
    const Hypixel2Client = new Hypixel2(key);
    
    try {
        player = (await Hypixel2Client.getPlayerStatistics(message, args[0], key)).player; 
	
        }
    catch (err) {
        console.log(err)
        message.channel.send('Hmm, that player doesn\'t seem to exist!')
        return;
                }
	
/*try {
	profile = (await player.stats.SkyBlock.profiles);
	    console.log(profile);
        }
    catch (err) {
        console.log(err)
        message.channel.send('Hmm, that player doesn\'t seem to exist!')
        return;
                }
	
  const sbProfile = new Hypixel2(profile);*/
	let ee = player.stats.SkyBlock.profiles; console.log(ee); 
	let profile = Object.keys(ee)[0]; 
	
	const sbp = new Hypixel2(key, profile)
	
	
	try {
        player2 = (await sbp.getPlayerSkyblockProfile(message, args[0])); 
	
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
    > **Angel of Death Tier:** ${(player2.profile.profile_id)}`)

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
