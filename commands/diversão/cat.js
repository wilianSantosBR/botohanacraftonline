/**
 * O Comando "cat" envia um gif ou uma imagem aleatória de um ou mais gatos.
*/

const Discord = require('discord.js')
const axios = require('axios').default

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 1000,
})

const titles = [
  'Lindo gatinho',
  'Meow!',
  'Pare de procrastinar.',
  'Aproveitando bem o dia!',
  'Sim.',
  'A mimir?',
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
      console.log(response)
      const embed = new Discord.MessageEmbed()
        .setAuthor(randomTitle() + ' 🐱')
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
      name: 'cat',
      description: 'Envia um gif ou uma imagem aleatória de um ou mais gatos! API: https://api.thecatapi.com/v1/images/get',
      usage: '!cat',
      category: 'Diversão',
    }
  },
}
