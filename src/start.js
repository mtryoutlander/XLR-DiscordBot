require('dotenv').config();
const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');
const Discord = require('discord.js');
const eventHandler = require('./handlers/eventHandler')
const client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.GuildScheduledEvents,
        Discord.IntentsBitField.Flags.GuildMembers,
        Discord.IntentsBitField.Flags.GuildMessages,
        Discord.IntentsBitField.Flags.MessageContent,
    ]
});

eventHandler(client);



async function createThread(name, message, tag, day, timeHr, timeMins) {

    const channel = client.channels.cache.get(process.env.EVENT_ID)
    const tags = channel.availableTags
    var tag_id = '';
    tags.forEach(element => {
        if (element.name === tag)
            tag_id = element.id
    });
    const row = new ActionRowBuilder();
    row.components.push(
        new Discord.ButtonBuilder().setCustomId("i hope so").setLabel("covert time").setStyle(ButtonStyle.Primary)
    );
    console.log('after push')
    const finalMessage = message + day + ":" + timeHr + ':' + timeMins
    console.log(finalMessage)
    const thread = await channel.threads.create({
        name: name,
        autoArchiveDuration: 60,
        message: { content: finalMessage, components: [row] },
        appliedTags: [tag_id]
    });
    console.log('created thread: ${thread.name}');
}

async function caculateTime(role_id, day, hr, min) {
    var month = day.split('/')

    var time = 0;
    switch (role_id) {
        case process.env.UTC0:
            time = (hr + 0)
            break;
        case process.env.UTC1:
            time = (hr + 1)
            break;
        case process.env.UTC2:
            time = (hr + 2)
            break;
        case process.env.UTC3:
            time = (hr + 3)
            break;
        case process.env.UTC4:
            time = (hr + 4)
            break;
        case process.env.UTC5:
            time = (hr + 5)
            break;
        case process.env.UTC6:
            time = (hr + 6)
            break;
        case process.env.UTC7:
            time = (hr + 7)
            break;
        case process.env.UTC8:
            time = (hr + 8)
            break;
        case process.env.UTC9:
            time = (hr + 9)
            break;
        case process.env.UTC10:
            time = (hr + 10)
            break;
        case process.env.UTC11:
            time = (hr + 11)
            break;
        case process.env.UTC12:
            time = (hr + 12)
            break;
        case process.env.UTC_1:
            time = (hr - 1)
            break;
        case process.env.UTC_2:
            time = (hr - 2)
            break;
        case process.env.UTC_3:
            time = (hr - 3)
            break;
        case process.env.UTC_4:
            time = (hr - 4)
            break;
        case process.env.UTC_5:
            time = (hr - 5)
            break;
        case process.env.UTC_6:
            time = (hr - 6)
            break;
        case process.env.UTC_7:
            time = (hr - 7)
            break;
        case process.env.UTC_8:
            time = (hr - 8)
            break;
        case process.env.UTC_9:
            time = (hr - 9)
            break;
        case process.env.UTC_10:
            time = (hr - 10)
            break;
        case process.env.UTC_11:
            time = (hr - 11)
            break;
    }
    if (time >= 23) {
        time -= 24
    }
    if (time < 0) {
        time += 24
        day = day
    }

    return time + ':' + min;

}




//last line to log in 
client.login(process.env.TOKEN);