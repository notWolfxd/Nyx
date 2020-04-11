const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");


module.exports.run = async (client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== ("298812170093723649"))
        return;  
       
       message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                message.guild.unban(user);
                
                })
               });
              }
           
    module.exports.help = {
    name: "unbanall",
    aliases: [ "uba",
	       "zzz"
	    ]
  } 
           
