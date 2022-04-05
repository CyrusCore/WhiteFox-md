const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let moment = require('moment-timezone')
let fs = require('fs')
let fetch = require('node-fetch')
let os = require('os')
let util = require('util')
let osu = require('node-os-utils')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, command, usedPrefix }) => {
    //Greeting System
    const hour_now = moment.tz('Asia/Jakarta').format('HH')
    var ucapanWaktu = 'Good Morning'//'Pagi🌄'
    if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Good Evening'//'Pagi 🌅'
    } else if (hour_now >= '10' && hour_now <= '14') {
    ucapanWaktu = 'Good Evening'//'Siang 🌞'
    } else if (hour_now >= '14' && hour_now <= '17') {
    ucapanWaktu = 'Good Evening'//'Soree ☀️'
    } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Good Night'//'Selamat 🌠'
    } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Good Night'//'Malam 🌌'
    } else {
    ucapanWaktu = 'Good Night'//'Selamat Malam!'
    }
    //Time
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    //Info
    let groups = await (await client.groupList()).length
    let chats = Object.keys(global.chats).filter(v => v.endsWith('.net')).length
    let users = Object.keys(global.users).length
    let banned = 0
    for (let jid in global.users) global.users[jid].banned ? banned++ : ''
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
      let NotDetect = 'Not Detect'
  let drive = osu.drive
  let netstat = osu.netstat
  let OS = osu.os.platform()
  let driveTotal, driveUsed, drivePer
  let p2 = drive.info().then(info => {
      driveTotal = (info.totalGb + ' GB'),
      driveUsed = info.usedGb,
      drivePer = (info.usedPercentage + '%')
   }).catch(() => { 
      driveTotal = NotDetect,
      driveUsed = NotDetect,
      drivePer = NotDetect
  })
  let netsIn, netsOut
  let p4 = netstat.inOut().then(info => {
      netsIn = (info.total.inputMb + ' MB'),
      netsOut = (info.total.outputMb + ' MB')
  }).catch(() => { 
      netsIn = NotDetect,
      netsOut = NotDetect
  })
  await Promise.all([p2, p4])
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
    //Send Message
    let jawab =`
┏━━━ꕥ〔 *WhiteFox Info}* 〕ꕥ━⬣
┃✾ Time:
┃   ┗ Wib: *${wib}*
┃   ┗ Wita: *${wita}}*
┃   ┗ Wit: *${wit}*
┃✾ Groups: *${groups}*
┃✾ Users: *${users}*
┃✾ Personal Chat: *${chats}*
┃✾ Uptime: *${uptime}*
┗━━
┏━━━━━━━〔 *System* 〕
┃✾ Engine : *Baileys*
┃✾ Hosting : *Heroku/Replit*
┃✾ NodeJs : *16.14.0*
┃✾ CPU : *Intel(R) Xeon(R) Platinum 8* 
┃✾ Core : *8 Core 2.50 GHZ*
┃✾ CPU : *Amd EPYC*
┃✾ Core : *8 Core 2.249 MHz*
┃✾ Platform: ${format(os.platform())}
┃✾ Arch: ${format(os.arch())}
┃✾ Type: ${format(os.type())}
┃✾ RAM: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
┃✾ Drive: *${driveUsed} / ${driveTotal} (${drivePer})*
┃✾ Ping: *${speed}*
┗━━━━━━━━━
┏━━━━━〔 *Developer* 〕
┃✾ Name: *Abram Satria*
┃✾ Status : *Single*
┃✾ Born At : *Indonesia*
┃✾ Born At : *Jawa Timur, Malang*
┃✾ Born On : *24-May-2008*
┃✾ Organisation : *AeroNetwork*
┃✾ Github : *CyrusCore*
┃✾ Instagram : *@aero.productions_*
┃✾ Telegram : *@CyNetics*
┗━━━━━━
    `.trim()
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/190308_White_Fox_Brand_Big.png')}, { upload: conn.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: jawab,
           hydratedFooterText: wm,
           imageMessage: message.imageMessage,
           hydratedButtons: [{
            quickReplyButton: {
                displayText: 'Menu',
                id: '.allmenu',
              }
           },{
            urlButton: {
                displayText: 'Instagram',
                url: 'https://www.instagram.com/aero.productions_/',
            }
           },{
            urlButton: {
                displayText: 'Telegram',
                url: 'https://t.me/CyNetics',
            }
           },{
            urlButton: {
                displayText: 'Youtube',
                url: 'https://www.youtube.com/channel/UCl6K8DAtlXkonUjbzDkkA9g',
            }
            },{
            urlButton: {
                displayText: 'Sociabuzz',
                url: 'https://sociabuzz.com/projectred',
            }
            }]
        }
    }
}), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
   //conn.reply(m.chat, jawab, footer, {quoted: ftrol}

    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['botinfo']
handler.tags = ['main']
handler.command = ['botinfo','bot-info']

module.exports = handler