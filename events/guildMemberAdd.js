const fs = require("fs");
const config = require("../config.json")

exports.run = async (client, member) => {

        let logChannel = client.channels.get("648723188574060545");
        let botnerd = member.guild.members.get("366525024816988165");
        let server = "514574611069927458"

          if (member.id == botnerd) {
            await logChannel.send("haha no <@298812170093723649> they tried it");
            await botnerd.send('You have been banned from **__${server.name}__** for **Joining a Guardian Protected Server**.');
            await botnerd.ban({ days: 7, reason: `Joining a Guardian Protected Server` })
        }
    
        console.log(`Protection filter used.`);

}
