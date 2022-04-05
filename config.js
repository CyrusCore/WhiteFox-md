let fs = require('fs')

global.owner = ['62859185953185'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.vip = JSON.parse(fs.readFileSync('./src/vip.json'))
global.mvp = JSON.parse(fs.readFileSync('./src/mvp.json'))
global.mvpp = JSON.parse(fs.readFileSync('./src/mvp+.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  hardianto: 'https://hardianto.xyz/',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  vinco: 'https://viko-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '02b9d63a8a8e586b',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear3.herokuapp.com': 'ts4zVK7f',
  'https://viko-api.herokuapp.com': 'vinko',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'rey2k21'
zekskey = 'apivinz'
xteamkey = '02b9d63a8a8e586b'
leyskey = 'dappakntlll'
bearkey = 'ts4zVK7f'
ApiiKey = 'https://pastelink.net/v20Md'
vinkey = 'vinko'

namabot = 'WhiteFox'
namalu = 'AeroNetwork'
footer = '\n©AeroNetwork'
kasihcaption = `Nih Sayang`

// Sticker WM
global.aeroApi = require('./lib/AeroApi')
global.stiker_wait = '_*Please Wait...*_'
global.packname = 'WhiteFox By'
global.author = 'AeroNetwork'
global.email = 'abramsatria7@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '©AeroNetwork'
global.media = 'https://telegra.ph/file/5d45a3d1e12726d98c5e4.jpg'

global.wait = '_*Please Wait...*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
