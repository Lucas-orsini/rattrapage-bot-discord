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
    let projectId= newContent
// projectName =  await mySqlConnector.executeQuery("SELECT nom FROM projet WHERE id = " + "'" + projectId + "'");
// console.log(projectName);
  listUser =  await mySqlConnector.executeQuery("SELECT * FROM user WHERE idProjet = " + "'" + projectId + "'");
    listUser.forEach(element => {

         message.channel.send(`les membres du projet : ${projectId} user : ${element.nom} `);
    });
   
};

module.exports.name = 'project'