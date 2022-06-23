/**
 * O Comando "dog" envia um gif ou uma imagem aleatória de um ou mais doginhos.
*/

const Discord = require('discord.js')
const axios = require('axios').default

const api = axios.create({
  baseURL: 'https://api.thedogapi.com/v1',
  timeout: 1000,
})

const titles = [
  'Lindo doginho',
  'Wulf!',
  'Oi amiguinho.',
  'Tome água!',
  'Sim.',
  'O que?',
]

function randomTitle() {
  if (titles.length === 0) { return undefined }
  const index = Math.floor(Math.random() * titles.length)
  return titles[index]
}

module.exports = {

  run: async (client, message, args) => {
    try {
      const response = await api.get('images/search')
      const embed = new Discord.MessageEmbed()
        .setAuthor(randomTitle() + ' 🐶')
        .setImage(response.data[0].url)
        .setColor(process.env.COLOR)
        .setFooter('2022 © OhanaCraft', 'https://media.discordapp.net/attachments/977382406501830727/989369781788495952/d10f6d29e7467ab049475fb5f9a3afa9.png?width=541&height=541')
        .setTimestamp()
      message.channel.send(embed)
    } catch (error) {
      message.reply('Infelizmente eu não consegui pegar uma foto de gato para você. 😔')
    }
  },

  conf: {},

  get help() {
    return {
      name: 'dog',
      description: 'O Comando "dog" envia um gif ou uma imagem aleatória de um ou mais doginhos! API: https://docs.thedogapi.com/',
      usage: '!dog',
      category: 'Diversão',
    }
  },
}
