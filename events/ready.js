exports.run = (client) => {
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
      
        client.user.setActivity("Hypixel Cmds = WIP, report bugs thx", {type: "PLAYING"});
        client.user.setStatus('idle');
}
