const Discord = require("discord.js");
const { inspect } = require("util");

module.exports.run = async (client, message, args) => {

if (message.author.id !== ("298812170093723649")) return;
   
        let toEval = args.join(" ");
        let evaluated = inspect(eval(toEval, { depth: 0 } ))
        try {
            if(toEval) {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart)
                return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
                
            } else {
                message.channel.send("Error whilst evaluating: `cannot evaluate air`")
            }
        } catch(e) {
            message.channel.send(`Error whilst evaluating: \`${e}\``)
        }
}

module.exports.help = {
    name: "eval",
    aliases: ["e"],
    description: "Run a code string on Discord.",
    usage: "eval <Code>",
    example: "eval message.channel.send(\"Hi.\");",
    category: "Developer"
}
