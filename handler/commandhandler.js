const Discord = require("discord.js");
const fs = require("fs");

 module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
 
    fs.readdir('./commands/', (err, categories) => {
        if (err) console.log(err);
        console.log(`Found total ${categories.length} category.`);
        categories.forEach(category => {
            let moduleConf = require(`../commands/${category}/module.json`);
            moduleConf.path = `./commands/${category}`;
            moduleConf.commands = [];
            if (!moduleConf) return;
            fs.readdir(`./commands/${category}`, (err, files) => {
                if (err) console.log(err);
                files.forEach(file => {
                    if (!file.endsWith('.js')) return;
                    let props = require(`../commands/${category}/${file}`);
                    client.commands.set(props.help.name, props);

                    if (props.help.aliases)  props.help.aliases.forEach(alias => {
                        client.aliases.set(alias, props.help.name);
                    });
                });
            });
        });
    });
 }
