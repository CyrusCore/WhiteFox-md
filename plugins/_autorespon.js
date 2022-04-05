let fs = require("fs")
let fetch = require("node-fetch")
let handler = m => m 

handler.all = async function (m, {isBlocked }) {
    if (isBlocked) return 
    let setting = db.data.settings

    let levelling = require('../lib/levelling')
    let { name, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let math = max - xp
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup && !m.fromMe && !m.isOwner) {
        this.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `┏━━━ꕥ〔 *${namabot}* 〕ꕥ━⬣
┃✾ Hai, ${name}!
┃
┃✾ Tersisa *${limit} Limit*
┃✾ Role *${role}*
┃✾ Level *${level} (${exp - min} / ${xp})* 
┃✾ [${math} XP lagi untuk levelup]
┃✾ ${exp} XP secara Total
┗━ꕥ
┏━━━ꕥ〔 *PEMBAYARAN* 〕ꕥ━⬣
┃✾ *Gopay :* +62859185953185
┃✾ *Pulsa :* +62859185953185
┗━ꕥ`.trim(), footer, 'Owner', '.owner', m)
}

        // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}