const {Client, RichEmbed} = require('discord.js')
const bot = new Client()
const niggas ='L'
bot.on('ready', ()=>{
    bot.user.setActivity('Imouto hentai', { type: ('WATCHING')})
    console.log('online.')
})


bot.on('message', msg=>{
    let args = msg.content.substring(niggas.length - 1).split(" ")
    switch(args[0]){
        case 'Jordan':
            if(args[1] === 'hug'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('Nigga who you trynna hug')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} hugged ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609637268906311707/tenor_1.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
            
                }
            }
            if(args[1] === 'fuck'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('theres no one to fuck Onii-chan')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} fucked ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609642055743832064/tenor_2.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
            
                }
            }
            if(args[1] === 'kiss'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('they rejected your kiss, sad day')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} kissed ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609643265842741248/giphy_2.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
            
                }
            }
            
        break;
        
    }
})


bot.login(process.env.BOT_TOKEN);
