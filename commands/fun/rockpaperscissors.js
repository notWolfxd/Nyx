const { Discord } = require("discord.js");

module.exports.run = async (client, message, args) => {

if (message.author.id !== ("298812170093723649") && message.channel.id !== ("410526913879080960") && message.guild.id !== ("460208972306186252") && message.channel.id !== ("517488355693559818") && message.channel.id !== ("324056323794796544")) return;

    const choices = [ "rock", "paper", "scissors" ];
    const response = choices[Math.floor(Math.random() * choices.length)];
    const choice = args[0].toLowerCase();
  
  if (!choice && !choices.includes(choice))
     return message.channel.send(`${message.author.username}, that is not a valid option, idiot.`);
     
  if (choice === response)
     return message.channel.send(`🔫 ${message.author.username}, we both chose \`${choice}\`. It is a **tie**!`);
     
  else {
  
    if (choice === ("rock") && response === ("paper"))
       return message.channel.send(`🗒 ${message.author.username}, I chose \`Paper\`, you **lose**!`);
    if (choice === ("rock") && response === ("scissors"))
       return message.channel.send(`✂️ ${message.author.username}, I chose \`Scissors\`, you **win**!`);
    if (choice === ("scissors") && response === ("paper"))
       return message.channel.send(`🗒 ${message.author.username}, I chose \`Paper\`, you **win**!`);
    if (choice === ("scissors") && response === ("rock"))
       return message.channel.send(`🎐 ${message.author.username}, I chose \`Rock\`, you **lose**!`);
    if (choice === ("paper") && response === ("scissors"))
       return message.channel.send(`✂️ ${message.author.username}, I chose \`Scissors\`, you **lose**!`);
    if (choice === ("paper") && response === ("rock"))
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
