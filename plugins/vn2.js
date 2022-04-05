let fetch = require("node-fetch")
async function handler(m, {command}) {
m.reply('_Loading..._')
let res = await fetch(`https://github.com/CyrusCore/database-bot/raw/main/media/jangan.mp3`)
json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
}

handler.help = ['jangan-ngirim']
handler.tags = ['vn']
handler.command = /^(jangan-ini-ajg|jangan|jangan-ngirim|jangan-ngirim-ini-ajg)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 2

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler