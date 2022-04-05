const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let CloudSticker = require('../CloudStorage/sticker.json') 
const fs = require('fs')
let handler = async(m, { conn, usedPrefix, args, command }) => {
    if (!m.quoted) throw `Reply Sticker With *${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    svst = args[0]
    if (!svst) throw `Sticker Name?`
    if (!/webp/.test(mime)) throw `Reply Sticker With *${usedPrefix + command}*`
    delb = await m.quoted.download()
    CloudSticker.push(`${svst}`)
    fs.writeFileSync(`../CloudStorage/Sticker/${svst}.webp`, delb)
    fs.writeFileSync(`../CloudStorage/sticker.json`, JSON.stringify(CloudSticker))
    conn.reply(m.chat, `Your Sticker Now Is On Our Cloud Database`, m)

}

handler.help = ['addsticker']
handler.tags = ['cloud']
handler.command = ['addsticker', 'addstiker', 'addstick']

module.exports = handler