const Discord = require('discord.js');
const ms = require('ms');
const moment = require('moment');

const client = new Discord.Client();

const prefix = '$';

const fs = require('fs');

//const axios = require('axios');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//bot ready
//console.log('ak is online');
client.once('ready', () => {
    console.log('ak is online');
    client.user.setActivity('ak', {
        type: 'PLAYING'
    }).catch(console.errore);
});


//command
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'discord') {
        message.channel.send('https://discord.gg/Pd8Dv5V');
    } else if (command == 'ak') {
        message.channel.send('sina');   
    } 
});



//info
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'discord') {
        message.channel.send('Bot Developer Ak_Warrior#0690');
    } else if (command == 'info') {
        message.channel.send('sina');   
    } 
});

//welcome

client.on('guildMemberAdd', member => {
    
    const channel = member.guild.channel.fine(channel => channel.name === "wellcome")
    if(!channel) return;

    channel.send(`be channel AloneKnight kheili khosh omadi, ${member}, lotfan qavanin discord ra hatamn bekhonid !`)
});


//kick
client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('you wher kick for trolling').then(() => {
                        message.reply(`fard mored nazar kick shod ${user.tag}`);
                    }).catch(err => {
                        message.reply('i was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("that user isn\'t in the this guild")
                }
            } else {
                message.reply("lotfan ye nafar ra tag konid !")
            }

            break;
    }
});

//ban
client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'ban':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.ban({ resseion: 'kheyli ann bodi ban shodi' }).then(() => {
                        message.reply(`fard mored nazar ban shod! ${user.tag}`)
                    }).catch(err => {
                        message.reply('i was unable to ban the member');
                        console.log(err);
                    });
                } else {
                    message.reply("that user isn\'t in the this guild")
                }
            } else {
                message.reply("lotfan yek nafar ra tag konid !")
            }

            break;
    }
});

//announce 
Discord.Clientinstancehere.on("message", message => {
    if(message.author.bot) return;
    
    let messageArray = message.content.split(" ");
         let command = messageArray[0];
            let args = messageArray.slice(1);
            
            if(message.channel.type === "dm") return;

                if(!message.content.startsWith('$')) return;
                
            if(command === '$announce') {
           let channel = message.mentions.channels();
        let announcement = args.slice(1).join("");

        channel.send(announcement);
    }
});
//dastor karbari $ann (#CHANNEL) (ANNOUNCEMENT)




//gif
if (msg.author.bot) return;
     if (msg.content.toLowerCase() === prefix + '$gif' ) {
         number = 100;
           imageNumber = Math.floor (Math.random() * (number -1 + 1)) + 1;
      client.channels.cache.get(`channelID`).send( {files: ["./images/" + imageNumber + ".gif"]})
  }



//covid all 
const countries = require("./countries.json")

const url = 'https://api.covid19api.com/total/country/'

const WAKE_COMMAND = '!cases'

client.on('message', async (msg) => {
  const content = msg.content.split(/[ ,]+/)
  if(content[0] === WAKE_COMMAND){
    if(content.length > 2){
      msg.reply("Too many arguments...")
    }
    else if(content.length === 1){
      msg.reply("Not enough arguments")
    }
    else if(!countries[content[1]]){
      msg.reply("Wrong country format")
    }
    else {
      const slug = content[1]
      const payload = await axios.get(`${url}${slug}`)
      const covidData = payload.data.pop()
      msg.reply(`Confirmed: ${covidData.Confirmed}, Deaths: ${covidData.Deaths}, Recovered: ${covidData.Recovered}, Active: ${covidData.Active} `)
    }
  }
})

//avatar command

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'embed':
            const embed = new Discord.MessageEmbed()
            .setTitle('user information')
            .addField('player name', message.author.username)
            .setThumbnail(message.author.displayAvatarURL())
            .setColor('0xFF5733')
            message.channel.send(embed);
            break;

    }
})








client.login('NzYzNTY4OTk1NjQ2NzAxNTc5.X35nCg.NPVB1g4mk-PUFUMsTYvVjI28Slw');