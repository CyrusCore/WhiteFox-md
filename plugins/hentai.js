let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
    m.reply(global.wait)
    heum = await fetch(`https://hardianto.xyz/api/anime/random?nsfw=hentai&apikey=hardianto`)
    if (!heum) throw json
        json = await heum.buffer()
    conn.sendFile(m.chat, json, 'hentai.jpg', 'dih sagne', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i
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