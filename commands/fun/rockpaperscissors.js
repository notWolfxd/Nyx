const { Discord } = require("discord.js");

module.exports.run = async (client, message, args) => {

    let choices = [ "rock", "paper", "scissors" ];
    let response = choices[Math.floor(Math.random() * choices.length)];
    let choice = args[0];
    
  if (!choice) 
     return message.channel.send(`${message.author.username}, you are not an airbender, choose else.`);
  if (!choices.includes(choice.toLowerCase()))
     return message.channel.send(`${message.author.username}, that is not a valid option, idiot.`);     
    
  if (choice.toLowerCase() === response)
     return message.channel.send(`🔫 ${message.author.username}, we both chose \`${choice}\`. It is a **tie**!`);
     
  else {
  
    if (choice.toLowerCase() === ("rock") && response === ("paper"))
       return message.channel.send(`🗒 ${message.author.username}, I chose \`Paper\`, you **lose**!`);
    if (choice.toLowerCase() === ("rock") && response === ("scissors"))
       return message.channel.send(`✂️ ${message.author.username}, I chose \`Scissors\`, you **win**!`);
    if (choice.toLowerCase() === ("scissors") && response === ("paper"))
       return message.channel.send(`🗒 ${message.author.username}, I chose \`Paper\`, you **win**!`);
    if (choice.toLowerCase() === ("scissors") && response === ("rock"))
       return message.channel.send(`🎐 ${message.author.username}, I chose \`Rock\`, you **lose**!`);
    if (choice.toLowerCase() === ("paper") && response === ("scissors"))
       return message.channel.send(`✂️ ${message.author.username}, I chose \`Scissors\`, you **lose**!`);
    if (choice.toLowerCase() === ("paper") && response === ("rock"))
       return message.channel.send(`🎐 ${message.author.username}, I chose \`Rock\`, you **win**!`);
           }
           
}
module.exports.help = {
    name: "rockpaperscissors",
    aliases: [ "rps" ],
    description: "Play a round of rock paper scissors with the bot.",
    usage: "rockpaperscissors <Choice>",
    example: "rockpaperscissors rock",
    category: "Fun"

}
