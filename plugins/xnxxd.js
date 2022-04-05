const fetch = require('node-fetch')
let handler = async(m, { args, conn }) => {
    let urll = args[0]
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xnxx/detail?url=${urll}`))
        .then(response => response.json())
        .then(hasil => {
            let results = hasil.result
            let bokep = `
              Title : *${results.title}*
              low: ${results.files.low}
              High: ${results.files.high}
              HLS: ${results.files.HLS}
            `
            conn.reply(m.chat, bokep, m)
        })
}

handler.owner = true
handler.command = ['xnxxd']

module.exports = handler