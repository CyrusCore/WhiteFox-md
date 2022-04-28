const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let moment = require('moment-timezone')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
let img1 = fs.readFileSync('./src/img1.png')
let img2 = fs.readFileSync('./src/img2.png')
let user = global.DATABASE.data.users[m.sender]
let levelling = require('../lib/levelling')
let thumb = fs.readFileSync('./media/images.jpg')

let { exp, limit, level, money, role } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let math = max - xp
/*conn.sendFile(m.chat, img, '', `Halo juga kak ${conn.getName(m.sender)}`, { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/mikey.jpg')
}}})*/
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = m.fromMe ? conn.user : conn.contacts[who]
pushname2 = `*${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*`

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
runtime = process.uptime()
          teks = `AeroNetwork`// \n\n${kyun(runtime)}`
          run = `${kyun(runtime)}`
          var itsme = `0@s.whatsapp.net`
          var split = `teks`
          const ftrol = {
  key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `${teks}\n${run}`, //Kasih namalu
                            orderTitle: `${teks}\n${run}`,
                            thumbnail: await (await fetch(`https://i.ibb.co/jfZVKmC/babi2.jpg`)).buffer(), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
          //m.reply(teks)
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
          let waktu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
          let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
          let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
          let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
          let d = new Date(new Date + 3600000)
          let locale = 'id'
          let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
          let week = d.toLocaleDateString(locale, { weekday: 'long' })
          let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
          let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
          let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
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
          let totalreg = Object.keys(global.db.data.users).length
          let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
          let babi = await fetch(`https://api.lolhuman.xyz/api/random/quotes?apikey=${bearkey}`)
          let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
          let isOwner = isROwner || m.fromMe
          let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
          let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
          let isVip = isROwner || global.vip.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
          let isMvp = isROwner || global.mvp.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
          let isMvpp = isROwner || global.mvpp.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
          let quote = babi.result
          let jawab = `
┏━━━ꕥ〔 *${namabot}* 〕ꕥ━⬣
┃✾ Hi, *${ucapanWaktu}* ${pushname2}!
┃✾ Limit *${limit} Left*
┃✾ Role *${role}*
┃✾ Level *${level}* 
┃✾ XP: *TOTAL ${exp} (${exp - min} / ${xp})*
┗━━
┏━━━ 
┃✾ Day : *${week} ${weton}* 
┃✾ Date : *${date}*
┃✾ Wib : *${wib}*
┃✾ Wit : *${wit}*
┃✾ Wita : *${wita}*
┗━━━━
┏━━━━━〔 *Developer* 〕
┃✾ Organisation : *AeroNetwork*
┃✾ Github : *CyrusCore*
┃✾ Instagram : *@aero.productions_*
┃✾ Telegram : *@CyNetics*
┃✾ Born At : *Indonesia*
┃✾ Born At : *Jawa Timur, Malang*
┃✾ Born On : *24-May-2008*
┃✾ Status : *Single*
┗━━━━━━
┏━━━━━━━〔 *Stats* 〕
┃✾ Engine : *Baileys*
┃✾ Hosting : *Heroku/Replit*
┃✾ NodeJs : *16.14.0*
┃✾ Uptime : *${uptime} (${muptime})*
┃✾ CPU : *Intel(R) Xeon(R) Platinum 8* 
┃✾ Core : *8 Core 2.50 GHZ*
┃✾ CPU : *Amd EPYC*
┃✾ Core : *8 Core 2.249 MHz*
┗━━━━━━━━━
┏━━ꕥ〔 _*Dev Note*_ 〕ꕥ━⬣
┃If The Bot Doesnt Respond Maybe
┃I Updated The Bot Or Change The
┃Hosting Provider  -AeroNetwork
┗━━━━━━━━━`.trim()
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/WhiteFoxLogo.png')}, { upload: conn.waUploadToServer })
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
            quickReplyButton: {
              displayText: 'Bot info',
              id: '.botinfo',
            }

            },
          ]
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
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.quotes = [
    "Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja", 
    "Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.", 
    "Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
    "Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
    "Hidup tak selamanya tentang pacar.",
    "Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
    "Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
    "Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
    "Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
    "Aku memang diam. Tapi aku tidak buta.",
    "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
    "Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
    "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
    "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
    "Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
    "Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
    "Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
    "Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
    "Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
    "Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat “disisipkan” di antara pujian.",
    "Hidup ini hanya sekali dan peluang itu juga sekali munculnya, keduanya tidak datang dua kali.",
    "Karena perjuangan adalah tanda perjalananmu menuju sukses.",
    "Dunia tak lagi sama tak selamanya memihak kita, di saat kita mau berusaha di situlah kebahagiaan akan indah pada waktunya.",
    "Hidup tak semudah membalikkan telapak tangan, tetapi dengan telapak tangan kita dapat mengubah hidup kita jauh lebih baik lagi.",
    "Jadilah pribadi yang menantang masa depan, bukan pengecut yang aman di zona nyaman.",
    "Belajarlah rendah hati, rendahkan hatimu serendah-rendahnya hingga tidak ada seorangpun yang bisa merendahkanmu.",
    "Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
    "Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
    "Kekuatan dan perkembangan datang hanya dari usaha dan perjuangan yang terus menerus.",
    "Pengusaha itu bukan orang yang pintar tetapi mereka pintar mencari orang pintar.",
    "Hidup itu sebentar. Kamu harus bisa tersenyum saat merasakan kepedihan atau kita tak akan pernah melanjutkan hidup.",
    "Yang keren itu bukan anak muda yang banyak gaya, tapi anak muda yang banyak karya.",
    "Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
    "Siapapun yang berusaha menjatuhkanmu memang sudah berada di bawahmu.",
    "Kesuksesan dan kegagalan adalah sama-sama bagian dalam hidup. Keduanya hanyalah sementara.",
    "Ia yang mengerjakan lebih dari apa yang dibayar pada suatu saat akan dibayar lebih dari apa yang ia kerjakan.",
    "Rahasia dari kesuksesan kita adalah bahwa kita tidak pernah menyerah.",
    "Karena hidup adalah pilihan.",
    "Memaafkan belum tentu membuat kita lebih baik atau bahkan merasa lebih baik tetapi yang jelas membuka jalan kebaikan.",
    "Memaafkan belum tentu membuat kita lebih baik atau bahkan merasa lebih baik, tetapi yang jelas membuka jalan kebaikan.",
    "Ujian kesetiaan selalu datang setiap hari, pastikan kamu setia kepada orang yang tepat.",
    "Aku tak ingin membuatmu rindu padaku. Karena rindu itu artinya sedih. Dan aku tak ingin menjadi alasanmu bersedih.",
    "Aku memilih memandangimu daripada segala lukisan yang ada di dunia.",
    "Relasi itu seperti bunga yang membutuhkan air, bisa kering dan mati tanpa komunikasi.",
    "Akan lebih baik bersabar menunggu seseorang datang menyapa daripada mengharapkan dia yang memilih pergi untuk kembali.",
    "Mencintai itu butuh tenaga, jangan kau buang tenagamu untuk berlari dan menyerah.",
    "Percayalah, jika dia memang cinta sejati kau, mau semenyakitkan apa pun, mau seberapa sulit liku yang harus dilalui, dia tetap akan bersama kau kelak, suatu saat nanti.",
    "Cinta itu mempunyai kesanggupan yang hebat. Dia bisa membuat binatang menjadi manusia, dan manusia menjadi binatang.",
    "Jauh sebelum aku bertemu denganmu, aku telah mengenalmu dalam doaku.",
    "Cinta merupakan sesuatu yang indah, ia laksana sebuah lukisan di awan, cerah membingkai ufuk senja.",
    "Semoga kelak selimutku adalah kamu yang senantiasa menghangatkanku di kala dingin menyerang tubuh dan jiwaku.",
    "Aku menginginkanmu seutuhnya, selamanya, kamu dan aku, setiap hari.",
    "Cinta itu burung yang indah, yang mengemis untuk ditangkap tapi menolak untuk dilukai.",
    "Karena cinta, duri menjadi mawar. Karena cinta, cuka menjelma anggur segar.",
    "Cinta tak berupa tatapan satu sama lain, tetapi memandang keluar bersama ke arah yang sama.",
    "Cinta tidak terlihat dengan mata, tetapi dengan hati.",
    "Kau pikir aku memperhatikanmu? Tidak, Sayang. Aku memperhatikan lingkunganmu, barangkali ada yang akan mengganggumu, kuhajar dia.",
    "Cinta tidak pernah menuntut, cinta selalu memberi. Cinta selalu menderita, tanpa pernah meratap, tanpa pernah mendendam.",
    "Cinta itu layaknya angin, aku tidak bisa melihatnya tetapi aku bisa merasakannya.",
    "Cinta bukanlah bertahan seberapa lama. Tetapi seberapa jelas dan ke arah mana.",
    "Sahabat yang baik tidak akan mencelakai, tetapi sahabat yang baik akan menasehati, melindungi, dan tulus mengasihi.",
    "Hal terindah dari persahabatan adalah memahami dan dipahami, tanpa pernah memaksa dan ingin menang sendiri.",
    "Jika kau mendapat sahabat sejati yang tak luntur baik dalam keadaan suka ataupun duka. Berjanjilah dalam hatimu untuk selalu setia padanya.",
    "Persahabatan tidak perlu saling mengerti. Karena sahabat akan saling menerima hal yang tak bisa dimengerti.",
    "Sahabat bukan mereka yang menghampirimu ketika butuh, namun mereka yang tetap bersamamu ketika seluruh dunia menjauh.",
    "Persahabatan sejati itu layaknya kesehatan, nilainya baru kita sadari setelah kita kehilangannya.",
    "Lebih baik ku menemani sahabat di kala sendiri daripada menemani kekasih yang tak mempunyai waktu untukku di kala ku sendiri dalam sepi.",
    "Bersahabat bukan berarti kita mempercayainya, tapi bersahabat bagaimana kita dapat dipercaya olehnya. Kepercayaan itu penting.",
    "Sahabat adalah orang yang akan membangunkan kita dari tidur walaupun sedang bermimpi indah.",
    "Ketika dalam kesulitan, mereka menghilang, ketika dalam kebahagiaan, mereka datang dengan riang. Tidak, mereka bukan teman!",
    "Setiap orang berbeda, unik dengan caranya. Kamu harus menghargainya, tapi tak berarti kamu harus menyukai semuanya.",
    "Sahabat itu seperti halnya mata dan tangan. Saat mata menangis tangan mengusap, saat tangan terluka mata menangis.",
    "Persahabatan yang didasari oleh keikhlasan hati dan kasih sayang, akan melahirkan keabadian dalam kebersamaan.",
    "Jika kau mendapat sahabat sejati yang tak luntur baik dalam keadaan suka ataupun duka. Berjanjilah dalam hatimu untuk selalu setia padanya.",
    "Bila esok tiba aku ingin seperti hari-hari sebelumnya. Hari-hari bersama sahabat dan teman-teman untuk bisa bersama melakukan hal-hal positif yang menyenangkan.",
    "Apabila engkau menginginkan kemuliaan maka carilah sahabat dari orang orang yang takut kepada Allah subhanahu wataa'la.",
    "Bisa jadi semua teman kita pergi, tapi tidak dengan sahabat",
    "Persahabatan itu motivasi dan inspirasi, bukan hanya gengsi dan basa-basi.",
    "Tak ada yang terasa semengerikan dulu saat kau sudah punya teman sejati.",
    "Persahabatan tak terjalin dengan orang yang istimewa. Kita jadi istimewa karena bersahabat. Sahabatlah yang mengistimewakan kita."]
