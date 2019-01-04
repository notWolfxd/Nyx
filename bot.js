const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", async () => {
    console.log(`${client.user.username}  is online!`);
    client.user.setGame("with big anime tiddies.");

});

client.on("message", (message) => {

    let prefix = config.prefix;
    // Exit and stop if the prefix is not there or if user is a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "iam") {
    let [gamemode, position, team] = args;
    if (!position) return message.mention.author("| To acquire a role do: `.iam [Gamemode (Factions | Skyblock | Prison)] [Position (Leader | CoLeader)] [Team name]`.");
    if (!team) return message.mention.author("| To acquire a role do: `.iam [Gamemode (Factions | Skyblock | Prison)] [Position (Leader | CoLeader)] [Team name]`.");
    if (!gamemode) return message.mention.author("| To acquire a role do: `.iam [Gamemode (Factions | Skyblock | Prison)] [Position (Leader | CoLeader)] [Team name]`.");
    var leaderEmbed = new Discord.RichEmbed()
    .setDescription("Leader Request")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Role requested by:", `${message.author} | ${message.author.id}`)
    .addField("They are looking for a role in the gametype:", `${gamemode}`)
    .addField("They are apart of:", `${team}`)
    .addField("In this team they are a:", `${position}`)
    .setFooter("Nyx v1.2.5 | Made By: Wolf#9001", client.user.avatarURL)
  message.reply("| Staff have been notified that you need the correct role. Please be patient.");
  client.channels.get("530178004928823306").sendEmbed(leaderEmbed);
  client.channels.get("530178004928823306").send("@everyone");
  }

});

client.login(process.env.BOT_TOKEN);
