require('dotenv').config()
const Discord = require('discord.js')
const MysqlConnector = require('./src/MySqlConnector');
const TOKEN = '';
const commandLoader = require("./commandLoader")
MysqlConnector.connect();



const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})
commandLoader.load(client);
client.on('messageCreate', async(message) => {
    //console.log(message)
    if (message.content === "ping") {
        message.channel.send("pong!");
    }
     if (message.content.startsWith("?")){
        console.log('ici');
        let words = message.content.split(' ');
        const nameCommand = words.shift().slice(1);
        const args = words;
        console.log(args)

        if (client.commands.has(nameCommand)) {
            
            client.commands.get(nameCommand).run(client, message, args);
        } else {
     
            await message.delete();
            await message.channel.send(`The ${nameCommand} command does not exist.`);
        }

    }
})
            client.login(TOKEN)

            .then(() => {
                console.log("connexion reussie");
            }).catch(error => {
                console.error(error);
            });

