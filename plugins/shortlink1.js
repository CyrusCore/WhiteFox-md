let axios = require('axios')
let handler = async(m, { conn, args }) => {
    const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
    }
    if (args.length < 1 )return conn.reply(m.chat, `Usage: .shortlink <url>`, m)
    if (!isUrl(args[0])) return conn.reply(m.chat, `Invalid Url`, m)
    axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
    .then((a) => conn.reply(m.chat, `Shorted Url: ${a.data}`, m))

}

handler.tags = ['internet']
handler.command = ['shortlink1','shortlink']
module.exports = handler