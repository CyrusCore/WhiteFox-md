let fetch = require("node-fetch")
async function handler(m) {
m.reply('_Loading..._')
let res = await fetch(`https://github.com/CyrusCore/database-bot/raw/main/media/WhatsApp-Ptt-2022-03-05-at-12.29.09.mp3`)
json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
}

handler.help = ['masa-sih']
handler.tags = ['vn']
handler.command = /^(masa-sih|masasih|masa)$/i
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