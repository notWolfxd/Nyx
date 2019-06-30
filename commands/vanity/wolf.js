const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<:error:526841077248819250> You are lacking the permission `MANAGE_CHANNELS`!");

    let helper = await message.guild.roles.find(r => r.name.toLowerCase() == "helper").members.map(member => member.id)
    let mod = await message.guild.roles.find(r => r.name.toLowerCase() == "mod").members.map(member => member.id)
    let srmod = await message.guild.roles.find(r => r.name.toLowerCase() == "sr. mod").members.map(member => member.id)
    let admin = await message.guild.roles.find(r => r.name.toLowerCase() == "admin").members.map(member => member.id)
    let sradmin = await message.guild.roles.find(r => r.name.toLowerCase() == "sr. admin").members.map(member => member.id)
    let manage = await message.guild.roles.find(r => r.name.toLowerCase() == "management").members.map(member => member.id)
    let dev = await message.guild.roles.find(r => r.name.toLowerCase() == "development").members.map(member => member.id)

    let staff = await message.guild.roles.find(r => r.name.toLowerCase() == "staff")

    for(var i in admin){
        let user = await message.guild.members.get(admin[i])
        await user.addRole(staff)
        await console.log(user.displayName)
    }

    console.log("done!")
    

}

module.exports.help = {
    name: "wolf"
}
