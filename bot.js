
const {Client} = require('discord.js')
const bot = new Client()

bot.on('ready', ()=>{
    bot.user.setActivity('imouto ASMR', { type: ('LISTENING')})
    console.log('online.')
})

bot.login(process.env.BOT_TOKEN);
