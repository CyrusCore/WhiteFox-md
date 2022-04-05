
let handler  = async (m, { conn }) => {
	
    await m.reply('Si ajg mau coli,Di tunggu ya jing')
    conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jngn comly  ya', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['bokep']
handler.tags = ['nsfw']
handler.command = /^(bokep)$/i
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