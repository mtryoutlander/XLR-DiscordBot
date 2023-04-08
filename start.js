const { GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.GuildScheduledEvents,
        Discord.IntentsBitField.Flags.GuildMembers,
        Discord.IntentsBitField.Flags.GuildMessages,
        Discord.IntentsBitField.Flags.MessageContent,
        Discord.IntentsBitField.Flags.createThread,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag}` + " is online");
})


client.on('messageCreate', (message) => {
    console.log("recived: " + message.content + " in " + message.channel.name + " from " + message.member.displayName)
})


function createThread(name, firstmessage) {

    client.on('threadCreate', (thread => {
        thread.crea
    }))
}


//last line to log in 
client.login('');