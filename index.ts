// NjAzNjU3MTYyNTQzMjAyMzU3.XTixjg.APSAZEhKsvA9FC0E_IP1pp59PjI
// https://discordapp.com/oauth2/authorize?client_id=603657162543202357&scope=bot&permissions=8
// Admin ^

/*const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  console.log("Servers:");
  client.guilds.forEach(guild => {
    console.log(" - " + guild.name);

    // List all channels
    guild.channels.forEach(channel => {
      console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
    });
  });

  const generalChannel = client.channels.get("603674539184095245");

  generalChannel.send("Wassup retards");
});

client.on("message", msg => {
  console.log(msg);
  if (msg.content === "you are gay") {
    msg.reply("no u");
  }

  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login("NjAzNjU3MTYyNTQzMjAyMzU3.XTixjg.APSAZEhKsvA9FC0E_IP1pp59PjI");*/

import * as Discord from 'discord.js';
import MessageHandler from './src/MessageHandler';
const client = new Discord.Client();
client.on('ready', function() {
    console.log('Nibba');
});

const messageHandler = new MessageHandler({ x: 1 });

client.on('message', messageHandler.onMessage);

client.login("NjAzNjU3MTYyNTQzMjAyMzU3.XTnW_Q.LxFBRnR0xy2T-GvaEfggTWn7gHc");