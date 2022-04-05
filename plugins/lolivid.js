let handler = async(m, { conn }) => {
    conn.sendFile(m.chat, 'https://api-skybot.herokuapp.com/docs/asupan/santuy?apikey=Alphabot', 'asupan.mp4', footer, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}
handler.premium = true
handler.private = true
handler.command = ['asupan']
handler.help = ['asupan']
handler.tags = ['premium']
module.exports = handler