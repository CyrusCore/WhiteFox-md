let handler = async(m, {conn, isOwner, text}) => {
    let who
    if(m.isGroup) return false
    if(!(isOwner)) return false
    if(isOwner) {
        global.db.data.users[m.sender].exp += 1000
        m.reply('Success Bro')
    }
}

handler.command = /^(citlevel)$/i
handler.owner = true
handler.mods = false
handler.group = false
handler.private = true
handler.premium = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler