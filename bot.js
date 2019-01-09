const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});
client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.size} servers!`);

  client.user.setActivity("with big anime tiddies", {type: "PLAYING"});
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(!config.prefix) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let commandfile = client.commands.get(command.slice());
  if(commandfile) commandfile.run(client, message, args);
});

client.login(process.env.BOT_TOKEN);
