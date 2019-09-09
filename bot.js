const Discord = require('discord.js');
const client = new Discord.Client({
fetchAllMembers: true
});
const config = require('./config.json');
require("./handler/commandhandler")(client);
require("./handler/eventhandler")(client);

    client.on("ready", async () => {
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
      
        client.user.setActivity("DEMOTE RETARD17 2K19", {type: "PLAYING"});
        client.user.setStatus('idle');
      });

    client.on('roleDelete', async function(role) {

        let logChannel = client.channels.get("551848305592631297")
        let jarnoUID = role.guild.members.get("420325176379703298");
        let wolfUID = role.guild.members.get("298812170093723649");
        let wolfRNAME = "better to lead like a wolf than to follow like a sheep";
        let jarnoRNAME = "Yeet";
        let server = "290249616484597771"

        try {
          if (role.name == jarnoRNAME) {
            await logChannel.send("<@298812170093723649> <@420325176379703298> - Role Deleted by retard17. Recreating now.")
            await client.guilds.get(server).createRole({
              name: "Yeet",
              position: 28,
              color: "abcdef"
            })
            let jarnoRR = role.guild.roles.find(role => role.name === "Yeet");
            await jarnoUID.addRole(jarnoRR);
        }
        if (role.name == wolfRNAME) {
          await logChannel.send("<@298812170093723649> <@420325176379703298> - Role Deleted by retard17. Recreating now.")
          await client.guilds.get(server).createRole({
            name: "better to lead like a wolf than to follow like a sheep",
            position: 28,
            color: "5b06c9"
          })
          let wolfRR = role.guild.roles.find(role => role.name === "better to lead like a wolf than to follow like a sheep");
          await wolfUID.addRole(wolfRR);
      }
      
      }
          catch (error) {
            if (!logChannel) console.log('No logchannel defined for this guild!');
            else console.log(error);
        }
        console.log(`Member left! ${client.user.tag}`);
    });


client.login(process.env.BOT_TOKEN).catch(err => console.log(err));
