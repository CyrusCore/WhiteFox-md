let handler = async (m, { conn, isOwner, text}) => {
    let who
    if (m.isGroup) {
      if (!(isOwner)) {
        global.dfail('owner', m, conn)
        throw false
      }
      if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
      else who = m.chat
    } else {
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    }
  
    try {
      if (who.endsWith('g.us')) global.db.data.chats[who].exp += 100
      else global.db.data.users[who].exp += 100
      m.reply(`Berhasil Menambah Uang Sebesar 100.`)
    } catch (e) {
      throw `nomor tidak ada didatabase!`
    }
  }
  handler.command = /^(addexp)?$/i
  handler.owner = true
  
  module.exports = handler
  