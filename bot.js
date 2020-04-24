const Discord = require('discord.js');
const client = new Discord.Client({fetchAllMembers: true, disableEveryone: true});
const config = require('./config.json');
const db = require("./events/dbConnection.js");

require("./handler/commandhandler")(client);
require("./handler/eventhandler")(client);

client.login(process.env.BOT_TOKEN).catch(err => console.log(err));
