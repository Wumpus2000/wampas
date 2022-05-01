const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", () => {
    bot.guilds.forEach((guild) => { //for each guild the bot is in
         let defaultChannel = "";
         guild.channels.forEach((channel) => {
               if(channel.type == "text" && defaultChannel == "") {
               if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                   defaultChannel = channel;
               }
               }
         })
         setInterval (function () {
              defaultChannel.send("Message here") //send it to whatever channel the bot has permissions to send on
         }, 30 * 1000);
   })
})