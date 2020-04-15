const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

const users = client.users;

const searchTerm = args[0];

if (message.author.id !== ("298812170093723649")) 
    return;
if (!searchTerm) {
    return message.channel.send('Please provide a search term.');
}

const matches = users.filter(u => u.id.includes(searchTerm));
if (!matches) {
    return message.channel.send('No id matches.');
}
else {
    return message.channel.send(matches.map(u => u.tag).join(',\n'));

}
};
module.exports.help = {
    name: "searchuserid",
    aliases: [
            "suid",
            "antidmad"
    ]
  }
