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
            if(args[1] === 'kill'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('aint no one around to kill')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} killed ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609645305113214979/otku_c3f2bafc74382af2.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'cuddle'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('no one wants to cuddle ;-;')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} cuddled ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647217799856130/tenor_2.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'smack'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('smack yourself cunt')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} smacked ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647640665128980/source_1.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'bite'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('theres no want to bite ;-;')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} bit ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648302756986880/tenor_3.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'boop'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('theres no one to boop')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} booped ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648786331009044/giphy_5.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'lick'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('youre just licking air...')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} licked ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609649497315737600/wLV0Z40.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'love'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('theres no one to love')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} loves ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609650358792486942/giphy_6.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'pout'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('stop pouting')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} pouted at ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609991046155468810/tenor_4.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            
        break;
        
    }
})

bot.login(process.env.BOT_TOKEN);
