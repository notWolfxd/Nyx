const fs = require("fs");
const config = require("../config.json")

exports.run = async (client, member) => {

        let logChannel = client.channels.get("290252293578948608");
        let botnerd = "510922026181984276"
        let faggot = "366525024816988165"
        let server = "460208972306186252"

          if (member.id == botnerd || member.id == ("510922026181984276")) {
            await logChannel.send("<@464402256922673163> nerdject tried to join");
            await member.send('You have been banned from **__${server.name}__** for **Being a reject**.');
            await member.ban({ days: 1, reason: `Joining a Guardian Protected Server` })
        }
        if (member.id == faggot || member.id == ("366525024816988165")) {
            await logChannel.send("fag tried to join");
            await member.send('You have been banned from **__${server.name}__** for **Being a faggot**.');
            await member.ban({ days: 7, reason: `Joining a Guardian Protected Server` })
        }
    
        console.log(`Protection filter used.`);

}
