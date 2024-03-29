/**
 * maykell
 **/

 let handler = async (m, {
	conn,
	text
  }) => {
  
	let fishes = [{
		area: 1,
		name: "Pufferfish"
	  },
	  {
		area: 1,
		name: "Anchovy"
	  },
	  {
		area: 1,
		name: "Tuna"
	  },
	  {
		area: 2,
		name: "Sardine"
	  },
	  {
		area: 2,
		name: "Bream"
	  },
	  {
		area: 2,
		name: "Largemouth Bass"
	  },
	  {
		area: 3,
		name: "Smallmouth Bass"
	  },
	  {
		area: 3,
		name: "Rainbow Trout"
	  },
	  {
		area: 3,
		name: "Salmon"
	  },
	  {
		area: 4,
		name: "Walleye"
	  },
	  {
		area: 4,
		name: "Perch"
	  },
	  {
		area: 4,
		name: "Carp"
	  },
	  {
		area: 5,
		name: "Catfish"
	  },
	  {
		area: 5,
		name: "Pike"
	  },
	  {
		area: 5,
		name: "Sunfish"
	  },
	  {
		area: 6,
		name: "Red Mullet"
	  },
	  {
		area: 6,
		name: "Herring"
	  },
	  {
		area: 6,
		name: "Eel"
	  },
	  {
		area: 7,
		name: "Octopus"
	  },
	  {
		area: 7,
		name: "Red Snapper"
	  },
	  {
		area: 7,
		name: "Squid"
	  },
	  {
		area: 8,
		name: "Sea Cucumber"
	  },
	  {
		area: 8,
		name: "Super Cucumber"
	  },
	  {
		area: 8,
		name: "Ghostfish"
	  },
	  {
		area: 9,
		name: "Stonefish"
	  },
	  {
		area: 9,
		name: "Ice Pip"
	  },
	  {
		area: 9,
		name: "Lava Eel"
	  },
	  {
		area: 10,
		name: "Sandfish"
	  },
	  {
		area: 10,
		name: "Scorpion Carp"
	  },
	  {
		area: 10,
		name: "Flounder"
	  },
	  {
		area: 11,
		name: "Midnight Carp"
	  },
	  {
		area: 11,
		name: "Sturgeon"
	  },
	  {
		area: 11,
		name: "Tiger Trout"
	  },
	  {
		area: 12,
		name: "Bullhead"
	  },
	  {
		area: 12,
		name: "Tilapia"
	  },
	  {
		area: 12,
		name: "Chub"
	  },
	  {
		area: 13,
		name: "Slimejack"
	  },
	  {
		area: 13,
		name: "Void Salmon"
	  },
	  {
		area: 13,
		name: "Blue Discus"
	  },
	]
	let player = global.db.data.users[m.sender]
	let pname = conn.getName(m.sender)
  
	let cdm = `${MeNit(new Date - player.lastfishing)}`
	let cds = `${DeTik(new Date - player.lastfishing)}`
	let cd1 = Math.ceil(01 - cdm)
	let cd2 = Math.ceil(60 - cds)
  
	let areaPlayer = fishes.map(v => v.area)
	areaPlayer = areaPlayer[Math.floor(Math.random() * areaPlayer.length)]
	let area_fish = fishes.filter(fishtype => {
	  return fishtype.area === areaPlayer
	})
	let fishtype = area_fish[Math.floor(Math.random() * area_fish.length)]
	let fishName = fishtype.name.toUpperCase()
	let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	let isOwner = isROwner || m.fromMe
	let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	let isVip = isROwner || global.vip.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	let isMvp = isROwner || global.mvp.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
	let isMvpp = isROwner || global.mvpp.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
  
	if (new Date - global.db.data.users[m.sender].lastfishing > 120000) {
	  if (isVip) {
		let durability = areaPlayer * 1
		let coins = areaPlayer * 65
		let exp = areaPlayer * 35
		player.fishingroddurability -= durability
		player.money += coins * 2
		player.exp += exp * 2
		let pesan = `*${pname}* Menangkap *${fishName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)}       
		  coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${durability} Durability, Tersisa         
		  ${player.fishingroddurability}/${100}`
		m.reply(pesan)
	  }
	  if (isMvp) {
		let durability = areaPlayer * 1
		let coins = areaPlayer * 66
		let exp = areaPlayer * 36
		player.fishingroddurability -= durability
		player.money += coins * 3
		player.exp += exp * 3
		let pesan = `*${pname}* Menangkap *${fishName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)}       
		  coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${durability} Durability, Tersisa         
		  ${player.fishingroddurability}/${100}`
		m.reply(pesan)
	  }
	  if (isMvpp) {
		let coins = areaPlayer * 99
		let exp = areaPlayer * 99
		player.money += coins * 99
		player.exp += exp * 99
		let pesan = `*${pname}* Menangkap *${fishName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)}       
		  coins & ${new Intl.NumberFormat('en-US').format(exp)} XP`
		m.reply(pesan)
	  }
	  if (global.db.data.users[m.sender].fishingrod = 1) {
		let durability = areaPlayer * 2
		let coins = areaPlayer * 50
		let exp = areaPlayer * 30
		player.fishingroddurability -= durability
		player.money += coins * 1
		player.exp += exp * 1
		let pesan = `*${pname}* Menangkap *${fishName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)}       
		  coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${durability} Durability, Tersisa         
		  ${player.fishingroddurability}/${100}`
		m.reply(pesan)
	  } else throw `Tunggu *${cd1}:${cd2}* Untuk Memancing Lagi`
	  if (global.db.data.users[m.sender].fishingrod = 2) {
		let durability = areaPlayer * 1
		let coins = areaPlayer * 60
		let exp = areaPlayer * 40
		player.fishingroddurability -= durability
		player.money += coins * 3
		player.exp += exp * 3
		let pesan = `*${pname}* Menangkap *${fishName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)}       
		  coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${durability} Durability, Tersisa         
		  ${player.fishingroddurability}/${100}`
		m.reply(pesan)
	  } else throw `Tunggu *${cd1}:${cd2}* Untuk Memancing Lagi`
	  if (global.db.data.users[m.sender].fishingrod = 3) {
		let durability = areaPlayer * 1
		let coins = areaPlayer * 90
		let exp = areaPlayer * 70
		player.fishingroddurability -= durability
		player.money += coins * 6
		player.exp += exp * 6
		let pesan = `*${pname}* Menangkap *${fishName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)}       
		  coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${durability} Durability, Tersisa         
		  ${player.fishingroddurability}/${100}`
		m.reply(pesan)
	  } else throw `Tunggu *${cd1}:${cd2}* Untuk Memancing Lagi`
	  if (global.db.data.users[m.sender].fishingrod = 4) {
		let durability = areaPlayer * 1
		let coins = areaPlayer * 80
		let exp = areaPlayer * 60
		player.fishingroddurability -= durability
		player.money += coins * 5
		player.exp += exp * 5
		let pesan = `*${pname}* Menangkap *${fishName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)}       
		  coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${durability} Durability, Tersisa         
		  ${player.fishingroddurability}/${100}`
		m.reply(pesan)
	  } else throw `Tunggu *${cd1}:${cd2}* Untuk Memancing Lagi`
  
	}
  }
  if (player.fishingroddurability < 0) {
	global.db.data.users[m.sender].fishingrod = 0
	let msg = `*${pname}* Fishingrod anda hancur`
	global.db.data.users[m.sender].fishingroddurability = 0
	m.reply(msg)
  }
  
  
  handler.help = ['fish']
  handler.tags = ['rpg']
  handler.command = /^fish/i
  handler.fishingrod = 1
  
  
  handler.disabled = false
  
  handler.fail = null
  
  module.exports = handler
  
  function MeNit(ms) {
	let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
	return [m].map(v => v.toString().padStart(2, 0)).join(':')
  }
  
  function DeTik(ms) {
	let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
	return [s].map(v => v.toString().padStart(2, 0)).join(':')
  }