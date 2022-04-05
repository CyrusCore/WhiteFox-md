let handler = async(m, {conn,args,command}) => {
				// teks = '*Sticker List :*n\n'
				// for (let awokwkwk of setiker) {
				// 	teks += `- ${awokwkwk}\n`
				// }
				// teks += `\n*Total : ${setiker.length}*`
				// conn.sendMessage(from, teks.trim(), extendedText, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./akiraganz/fake.jpg')} }}, contextInfo: { "mentionedJid": setiker } })
}
handler.help = ['liststicker (soon)']
handler.tags = ['cloud']
handler.command = ['liststicker']

module.exports = handler