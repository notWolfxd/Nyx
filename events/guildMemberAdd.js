const fs = require("fs");
const config = require("../config.json")

exports.run = async (client, member) => {

        let logChannel = client.channels.get("648723188574060545");
        let botnerd = "298246043374583810"
        let server = "460208972306186252"

          if (member.id == botnerd || member.id == ("298246043374583810")) {
            await logChannel.send("haha no <@298812170093723649> they tried it");
            await member.send('You have been banned from **__${server.name}__** for **Tell kzo I said dont even think about it**.');
            await member.ban({ days: 7, reason: `Joining a Guardian Protected Server` })
        }
    
        console.log(`Protection filter used.`);

}
