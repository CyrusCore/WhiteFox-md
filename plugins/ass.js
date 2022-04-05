let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
    m.reply(global.wait)
    res = await fetch(`https://api.xteam.xyz/randomimage/ass?APIKEY=${xteamkey}`)
    heum = await res.buffer()
    await conn.sendFile(m.chat, heum, 'asupan.jpg', 'jan sagne bro', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['ass']
handler.tags = ['nsfw']
handler.command = /^(ass)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.nsfw = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler