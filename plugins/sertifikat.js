let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  m.reply(wait)
  await conn.sendFile(m.chat, `https://apikey-bear3.herokuapp.com/api/sertifikat/${command}?apikey=${bearkey}&name=${text}`, 'file.jpg', 'Subscribe terus _*King Of Bear*_', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tolol <nama>', 'fuckboy <nama>', 'fuckgirl <nama>', 'bucinserti <nama>']
handler.tags = ['sertifikat']
handler.command = /^(tolol|fuckboy|fuckgirl|bucinserti)$/i

module.exports = handler
