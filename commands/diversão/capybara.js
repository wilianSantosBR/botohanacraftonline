/**
 * O Comando "capybara" envia um gif de capivaras
*/

const Discord = require('discord.js')
const axios = require('axios').default

const capivaraURL = `https://api.tenor.com/v1/random?&key=${process.env.TENOR_TOKEN}&q=capivara&contentfilter=high&limit=1`

const titles = [
  'Linda capivara',
  'Faço que som mesmo?!',
  'Pare de procrastinar.',
  'Aproveitando bem o dia!',
  'Sim.',
  'Tem gente que acha que sou um cachorro >:(',
]

function randomTitle() {
  if (titles.length === 0) { return undefined }
  const index = Math.floor(Math.random() * titles.length)
  return titles[index]
}

module.exports = {

  run: async (client, message, args) => {
    try {
      const response = await axios.get(capivaraURL)
      const embed = new Discord.MessageEmbed()
        .setAuthor(randomTitle())
        .setImage(response.data.results[0].media[0].gif.url)
        .setColor(process.env.COLOR)
        .setFooter('2022 © OhanaCraft', 'https://media.discordapp.net/attachments/977382406501830727/989369781788495952/d10f6d29e7467ab049475fb5f9a3afa9.png?width=541&height=541')
        .setTimestamp()
      message.channel.send(embed)
    } catch (error) {
      message.reply('Infelizmente eu não consegui pegar um gif de capivara para você. 😔')
    }
  },

  conf: {},

  get help() {
    return {
      name: 'capybara',
      description: 'O Comando "capybara" envia um gif de capivaras!',
      usage: 'o!capybara',
      category: 'Diversão',
    }
  },
}
