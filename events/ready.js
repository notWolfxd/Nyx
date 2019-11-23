exports.run = (client) => {
        console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);
      
        client.user.setActivity("DEMOTE RETARDL17 2K19", {type: "PLAYING"});
        client.user.setStatus('idle');
}
