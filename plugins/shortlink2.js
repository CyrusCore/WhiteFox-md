let axios = require('axios')
let handler = async(m, { args, conn }) => {
    const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
    }
    if (args.length < 0) return conn.reply(m.chat, `Penggunaan :\n*${prefix}tinyurl link`, m)
    if (!isUrl(args[0])) return conn.reply(m.chat, `Masukkan link yang benar`, m)
    axios.get(`http://docs-jojo.herokuapp.com/api/shorturl-at?url=${args[0]}`)
    .then((a) => conn.reply(m.chat, `Shorted Url: ${a.data.result}`, m))
}

handler.tags = ['internet']
handler.commands = ['shortlink2']
module.exports = handler