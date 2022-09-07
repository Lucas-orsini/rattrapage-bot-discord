const Discord = require('discord.js');
const mySqlConnector = require('../src/MySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, args) => {

    let content = message.content;
    let newContent = content.split(" ")
    newContent.shift()
    let Name = newContent
    await mySqlConnector.executeQuery('INSERT INTO user(nom, idProjet) VALUES("' + Name[0] + '","' + Name[1] + '" )');
    await message.channel.send(`"user ajouter"`);
   
};

module.exports.name = 'createUser'