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
    let projectName = newContent

    await mySqlConnector.executeQuery('INSERT INTO projet(nom) VALUES("' + projectName + '")');
    await message.channel.send(`projet ajouter`);
   
};

module.exports.name = 'createProject'