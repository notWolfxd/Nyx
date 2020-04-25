const Discord = require("discord.js");
const { dbConnect } = require("../../events/dbConnection.js");

module.exports.run = async (client, message, args) => {
    
    let db;
    db = dbConnect();
    
    const text = "INSERT INTO gSettings(guildId, prefix, casenumber, autoroleenabled, roletogive, logsenabled, logschannel, wlchannel, wlsystem, welcomemessage, slowmodetime, modrole, commandchannel, blacklisteduser) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *"
    const values = [message.guild.id, "-", 1, "enabled", "none", "enabled", "bot-logs", "welcome", "disabled", "Hello %MENTION%, welcome to %GUILDNAME%.", 3, "Staff", "commands", "none"]`;
    
   db.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
   
  }
})
  /*   if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<:error:526841077248819250> You are lacking the permission `MANAGE_CHANNELS`!");

    let helper = await message.guild.roles.find(r => r.name.toLowerCase() == "helper").members.map(member => member.id)
    let mod = await message.guild.roles.find(r => r.name.toLowerCase() == "mod").members.map(member => member.id)
    let srmod = await message.guild.roles.find(r => r.name.toLowerCase() == "sr. mod").members.map(member => member.id)
    let admin = await message.guild.roles.find(r => r.name.toLowerCase() == "admin").members.map(member => member.id)
    let sradmin = await message.guild.roles.find(r => r.name.toLowerCase() == "sr. admin").members.map(member => member.id)
    let manage = await message.guild.roles.find(r => r.name.toLowerCase() == "management").members.map(member => member.id)
    let dev = await message.guild.roles.find(r => r.name.toLowerCase() == "development").members.map(member => member.id)

    let staff = await message.guild.roles.find(r => r.name.toLowerCase() == "staff")

    for(var i in manage){
        let user = await message.guild.members.get(manage[i])
        await user.addRole(staff)
        await console.log(user.displayName)
    }

    console.log("done!") */
    

}

module.exports.help = {
    name: "wolf"
}
