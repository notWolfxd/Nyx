const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

  if(message.author.id !== "298812170093723649") return;

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
    module.exports.help = {
        name: "eval"
      }
