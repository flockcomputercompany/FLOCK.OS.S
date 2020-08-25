var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", (message) => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = "<";

  if (msg === prefix + "ㅎㅇ?") {
    message.channel.send("ㅎㅇ");
  }
});

bot.login("NzM3ODM2OTUyNTMwNzE0NzE0.XyDKNQ.pjvy3gNpbtWjRbDlH0pjwMa1n3A");
