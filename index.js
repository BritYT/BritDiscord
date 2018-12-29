const botConfig = require('./bot-config.json')
const Discord = require('discord.js')
const getJSON = require('get-json')

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() => {

    console.log(`${bot.user.username} is online`);

    setInterval(()=>{
        getJSON("http://5.196.93.109:28236/status.json", (err, response) => {
            bot.user.setActivity(response.players + "/100 online");
        });
    }, 100);
});

bot.on("message", (msg) => {
    if(msg.channel == "reports"){
        
    }
});

bot.login(botConfig.token);