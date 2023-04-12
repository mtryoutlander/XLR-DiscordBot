require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [{
    name: "create-raid",
    description: "create raid",
    options: [{
            name: 'raid-name',
            description: 'name of raid',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'day',
            description: 'month/day',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'time-hr',
            description: 'what hr is the raid',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [{
                    name: '0',
                    value: '0'
                },
                {
                    name: '1',
                    value: '1'
                },
                {
                    name: '2',
                    value: '2'
                },
                {
                    name: '3',
                    value: '3'
                },
                {
                    name: '4',
                    value: '4'
                },
                {
                    name: '5',
                    value: '5'
                },
                {
                    name: '6',
                    value: '6'
                },
                {
                    name: '7',
                    value: '7'
                },
                {
                    name: '8',
                    value: '8'
                }, {
                    name: '9',
                    value: '9'
                },
                {
                    name: '10',
                    value: '10'
                },
                {
                    name: '11',
                    value: '11'
                },
                {
                    name: '12',
                    value: '12'
                },
                {
                    name: '13',
                    value: '13'
                },
                {
                    name: '14',
                    value: '14'
                },
                {
                    name: '15',
                    value: '15'
                },
                {
                    name: '16',
                    value: '16'
                },
                {
                    name: '17',
                    value: '17'
                },
                {
                    name: '18',
                    value: '18'
                },
                {
                    name: '19',
                    value: '19'
                },
                {
                    name: '20',
                    value: '20'
                }, {
                    name: '21',
                    value: '21'
                },
                {
                    name: '22',
                    value: '22'
                },
                {
                    name: '23',
                    value: '23'
                }
            ]

        }, {
            name: 'time-min',
            description: 'what min is the raid',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [{
                    name: '00',
                    value: '00'
                },
                {
                    name: '15',
                    value: '15'
                },
                {
                    name: '30',
                    value: '30'
                },
                {
                    name: '45',
                    value: '45'
                }
            ]

        },
        {
            name: 'tags',
            description: 'tag of the raid it must have a tag',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [{
                    name: 'Camps',
                    value: 'Camps'
                },
                {
                    name: 'Event',
                    value: 'Event'
                },
                {
                    name: 'Player',
                    value: 'Player'
                },
                {
                    name: 'Alliance',
                    value: 'Alliance'
                }
            ]

        }
    ]
}, ]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async() => {
    try {
        console.log('Registering Slash commands...')
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands }
        )
        console.log('Register slash commands success')
    } catch (error) {
        console.log(error)
    }
})();