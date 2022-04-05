const fetch = require('node-fetch')
let handler = async(m, {command}) => {
    let title = command
    fetch(encodeURI(`http://kocakz.herokuapp.com/api/media/xnxx/search?query=${title}`))
        .then(response => response.json())
        .then(hasil => {
            let results = hasil.result
            ini_txt = ''
            for (var x of results) {
                ini_txt += `Url : ${x.link}\n\n`
            }
            m.reply(ini_txt)
        })
}

handler.owner = true
handler.command = ['xnxxs']

module.exports = handler