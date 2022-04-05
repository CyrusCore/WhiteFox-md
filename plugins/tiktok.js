const scrape = require('../lib/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://vt.tiktok.com/ZSwWCk5o/`
    let link = args[0]
    if (/(?:http(?:s|):\/\/|)(?:www\.|[a-z]+\.|)tiktok.com/i.test(link)) {
        reply(commannd_response('wait'))
        scrape.ttdownloader(link)
            .then(async ({ result }) => {
                cakrayp.sendMessage(from, { video: { url: result.nowm }, mimetype: 'video/mp4' }, { quoted: msg })
            }).catch(err => {
                if (err.code == 419) {
                    conn.reply(m.chat, 'Sorry, maybe the URL you entered is not valid', m)
                } else {
                    conn.reply(m.chat, `ERROR`, m)
                }
            })
    } else {
        conn.reply(m.chat, 'Sorry, this is special for tiktok Url', m)
    }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler