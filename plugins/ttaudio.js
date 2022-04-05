let hzx = global.hxz
let handler = async(m, { conn, command }) => {
    
    if (!args[0]) throw `uhm.. url nya mana?`
    if (!args[0].match(/tiktok/gi)) throw `url salah`
    hzx.ttdownloader(args[1]).then( data => {
        conn.sendFile(m.chat, data.nowm, 'tt.mp3', null, m, true)
    })
}
handler.command = ['ttaudio']
module.exports = handler