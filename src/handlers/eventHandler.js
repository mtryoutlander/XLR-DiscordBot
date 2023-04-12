const { log } = require("console");
const getAllFiles = require("../utils/getAllFiles");
const path = require('path');
const consoleLog = require("../events/consoleLog/consoleLog");
module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

    for (const eventFolder of eventFolders) {
        const eventFiles = getAllFiles(eventFolder);
        eventFiles.sort((a, b) => a > b);

        const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();
        console.log(eventName)
        client.on(eventName, async(arg) => {
            for (const eventFile of eventFiles) {
                const eventFunction = require(eventFile);
                await eventFunction(client, arg);
            }
        });
    }
}


/*

    client.on('messageCreate', (message) => {
        console.log("recived: " + message.content + " in " + message.channel.name + " from " + message.member.displayName)
    })




    client.on('interactionCreate', (interaction) => {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'create-raid') {
            const message = "Join the raid @"
            const name = interaction.options.get('raid-name').value;
            const tag = interaction.options.get('tags').value;
            const timeHr = interaction.options.get('time-hr').value;
            const timeMins = interaction.options.get('time-min').value;
            const day = interaction.options.get('day').value;
            createThread(name, message, tag, day, timeHr, timeMins);
        }
        interaction.reply({ content: "Raid Made", ephemeral: true })

    })




    client.on('interactionCreate', async(interaction) => {
        if (!interaction.isButton()) return
        var role_id = process.env.UTC0
        console.log('role id : ' + role_id)

        interaction.member.roles.cache.forEach(role => {
            switch (role.id) {
                case process.env.UTC0:
                case process.env.UTC1:
                case process.env.UTC2:
                case process.env.UTC3:
                case process.env.UTC4:
                case process.env.UTC5:
                case process.env.UTC6:
                case process.env.UTC7:
                case process.env.UTC8:
                case process.env.UTC9:
                case process.env.UTC10:
                case process.env.UTC11:
                case process.env.UTC12:
                case process.env.UTC_1:
                case process.env.UTC_2:
                case process.env.UTC_3:
                case process.env.UTC_4:
                case process.env.UTC_5:
                case process.env.UTC_6:
                case process.env.UTC_7:
                case process.env.UTC_8:
                case process.env.UTC_9:
                case process.env.UTC_10:
                case process.env.UTC_11:
                    return role_id = role.id;
            }
        })
        var text = interaction.message.content
        text = text.split('@').pop();
        const stringArray = text.split(':')
        const day = stringArray[0]
        const hr = Number(stringArray[1])
        const min = stringArray[2]
        console.log(stringArray)
        caculateTime(role_id, day, hr, min).then(time => { interaction.reply({ content: "time: " + time, ephemeral: true }) })

    })
    */