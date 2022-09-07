const Discord = require('discord.js');
const mySqlConnector = require('../src/MySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, args) => {



    let list = await mySqlConnector.executeQuery("SELECT * FROM user");
   
   list.forEach(element => {

        message.channel.send(`user : ${element.nom} `);
   });
   
};

module.exports.name = 'userlist'