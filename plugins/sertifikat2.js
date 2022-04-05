let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  let [teks, wm] = text.split`&`
  if (!text) throw `uhm. cari apa?\n\ncontoh:\n${usedPrefix + command} bear&athena`
  m.reply(wait)
  await conn.sendFile(m.chat, `https://apikey-bear3.herokuapp.com/api/sertifikat/pacarserti?apikey=${bearkey}&name1=${text}&name2=${wm}`, 'file.jpg', 'Subscribe terus _*King Of Bear*_', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['pacarserti <nama>&<nama>', 'sertipacar <nama>&<nama>']
handler.tags = ['sertifikat']
handler.command = /^(pacarserti|sertipacar)$/i

module.exports = handler
