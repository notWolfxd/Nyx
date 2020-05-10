const { Discord } = require("discord.js");

module.exports.run = async (client, message, args) => {

    let choice = args.join(" ").split(" | ");
    let unfilteredchoices = [];
    choice.forEach(choice => unfilteredchoices.push(choice))
    
    let choices = [];
    for (let i = 0; i < unfilteredchoices.length; i++) {
        if (choices.indexOf(unfilteredchoices[i]) === -1) {
            choices.push(unfilteredchoices[i])
            }
    }
    
    
    let response = choices[Math.floor(Math.random() * choices.length)];
    
  if (choices.length <= 1) 
     return message.channel.send(`${message.author.username}, you didn't give much to choose from?`);
     
  message.channel.send(`🤔 ${response}`);
     }
module.exports.help = {
    name: "choose",
    aliases: [ "choice", "decide" ],
    description: "Have the bot make a decision for you.",
    usage: "rockpaperscissors <Choice1> | <Choice2> | (Choice3) and so on...",
    example: "choose Game | Do work",
    category: "Fun"

}
