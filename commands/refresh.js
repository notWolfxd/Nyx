const Discord = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
  	if (message.author.id !== "298812170093723649") return;
  try {
      await message.channel.send('Refreshing all commands, this may take a bit.');
      fs.readdir("./commands/", (err, files) => {
        const filez = files.length
        if (err) return console.error(err);
        message.channel.send(`Refreshed \`${filez}\` commands successfully!`)
        console.log("Refreshed " + filez + " commands")
        files.forEach(file => {
             delete require.cache[require.resolve(`./${file}`)];
        });
    });
      process.exit(0);
    } catch (e) {
      console.log(e);
    }
}
module.exports.help = {
    name: "refresh"
}
