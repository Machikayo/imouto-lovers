const {Client, RichEmbed} = require('discord.js')
const bot = new Client()
const niggas ='L'
let state = '0'
bot.on('ready', ()=>{
    bot.user.setActivity('KICK BACK', { type: ('LISTENING')})
    console.log('online.')
})


bot.on('message', msg=>{
    let args = msg.content.substring(jordan.length - 1).split(" ")
    switch(args[0]){
        case 'Jordan':
            if(args[1] === 'Poke'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('whats going on')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} poked ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609637268906311707/tenor_1.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
            
                }
            }
            if(args[1] === 'feel'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('why is this happening')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} felt ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609642055743832064/tenor_2.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
            
                }
            }
            if(args[1] === 'Do you hate coding?'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('Yes I do')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} jumped ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609643265842741248/giphy_2.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
            
                }
            }
            if(args[1] === 'interact'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('sksksk I love cats')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} interacted ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609645305113214979/otku_c3f2bafc74382af2.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'Do you like coding?'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('I love it!')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} dapped up ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647217799856130/tenor_2.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'Do you love coding?'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('god stop asking')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} is tired of ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609647640665128980/source_1.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'Do you like co-'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('no')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} Killed ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648302756986880/tenor_3.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'Rihanna lyrics?'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('I dont wanna do this anymore')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} shanked ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609648786331009044/giphy_5.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'does tortuing me bring you joy?'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('yes! :D')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} Destroyed ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609649497315737600/wLV0Z40.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'help'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('instruction unclear, adding 20 new lines of bs coding')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} loves ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609650358792486942/giphy_6.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'I got nothing else to add this time'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('Will you make this code public Jordan?')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} contemplates with ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/570053851315568650/609991046155468810/tenor_4.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'relax'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('we are just about done')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} sighed of relief with ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/579112455075135498/610236517746737172/giphy_7.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }
            if(args[1] === 'Is this finally the end?'){
                let ment = msg.mentions.users.first()
                if(ment === undefined){
                    msg.channel.send('yes, now get sturdy')
                }
                else{
                    const embed = new RichEmbed()
                    .setTitle(`${msg.author.username.toString()} got sturdy ${ment.username}!`)
                    .setImage(`https://cdn.discordapp.com/attachments/579112455075135498/610237850553679891/tenor_5.gif`)
                    .setColor(0x4d7ac4)
        
                    msg.channel.sendEmbed(embed)
                }
            }

                
                
                













            if(args[1] === 'WA'){
                if(args[2] === 'HA'){
                    if(args[3] === 'HA'){
                        state = '1'
                        const channel = msg.guild.channels.find(channel => channel.id === '752749354674028596')
                        var reqTimer = setTimeout(function wakeUp() {
                            if(state === '1'){
                            channel.send('START');
                            return reqTimer = setTimeout(wakeUp, 10);
                            }
                        }, 10);
                    }
                }
            }
            if(args[1] === 'STOP'){
                state = '0'
            }
        break;
        
        
    }
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.id ==='514446545374937098')
    if(!channel) return;
    channel.send(`Welcome Friend! ${member}`)
})



bot.login(process.env.BOT_TOKEN); GET YOUR PERSONALIZED TOKEN DO NOT USE MINE (you cant even use mine anyways) - with love Jordan :)
