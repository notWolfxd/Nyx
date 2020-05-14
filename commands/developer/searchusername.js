const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (message.author.id !== ("298812170093723649")) 
     return;
    
   const users = client.users;
   const searchTerm = args[0];

  if (!searchTerm)
     return message.channel.send('Please provide a search term.');

   const matches = users.filter(u => u.tag.toLowerCase.includes(searchTerm.toLowerCase()));
    
  if (!matches) {
     return message.channel.send('No username matches.');
} else {
    return message.channel.send(matches.map(u => u.tag).join(',\n'));
       }
};
module.exports.help = {
    name: "searchusername",
    aliases: [ "suname", "searchuname", "su" ],
    description: "Search for users matching a specific Username pattern.",
    usage: "searchusername <NamePattern>",
    example: "searchusername Dream",
    category: "Developer"
  }
