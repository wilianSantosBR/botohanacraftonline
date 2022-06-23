/**
 * O evento guildMemberRemove é emitido após um membro sair do servidor.
*/

module.exports = (client, member) => {
  const Discord = require('discord.js')

  const leave = new Discord.MessageEmbed()
    .setColor(process.env.COLOR)
    .setAuthor('👥 Um membro saiu do servidor.')
    .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}?size=1024`)
    .setDescription(`${member} acabou de sair.`)
    .setFooter('2022 © OhanaCraft', 'https://media.discordapp.net/attachments/977382406501830727/989369781788495952/d10f6d29e7467ab049475fb5f9a3afa9.png?width=541&height=541')
    .setTimestamp()

  member.guild.channels.cache.get(process.env.SAIDA).send(leave)
}
