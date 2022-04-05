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
      if (who.endsWith('g.us')) global.db.data.chats[who].diamond += 2
      else global.db.data.users[who].diamond += 2
      m.reply(`Berhasil Menambah diamond sebesar 2`)
    } catch (e) {
      throw `nomor tidak ada didatabase!`
    }
  }
  handler.owner = true
  handler.command = /^(adddiamond|addDiamond)?$/i
  
  module.exports = handler
  