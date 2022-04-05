
let { MessageType } = require('@adiwajshing/baileys-md')
const potion = 525
const Spotion = 150 
const limit = 350
const Slimit = 100
const Bdiamond = 925
const Sdiamond = 750
const Bcommon = 225
const Scommon = 20
const Suncommon = 155
const Buncommon = 625
const Bmythic = 2250 
const Smythic = 550
const Blegendary = 7520 
const Slegendary = 3000
const BpetCrate = 8000
const Bsampah = 10
const Ssampah = 5
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.db.data.users[m.sender].armor
    const _sword = global.db.data.users[m.sender].sword
    const _budak = global.db.data.users[m.sender].budak
    const budak = (_budak == 0 ? 55000 : '' || _armor == 1 ? 650000 : '' || _armor == 2 ? 70000 : '' || _armor == 3 ? 800000 : '' || _armor == 4 ? 99999 : '')
    const armor = (_armor == 0 ? 24000 : '' || _armor == 1 ? 59890 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    const sword = (_sword == 0 ? 22000 : '' || _sword == 1 ? 52000 : '' || _sword == 2 ? 99999 : '' || _sword == 3 ? 149999 : '' || _sword == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
┏━ꕥ Exp Shop
┃ ${usedPrefix}shopxp <Buy> <item> <jumlah>
┃ Example: *${usedPrefix}shopxp buy limit 1*
┏*Item           |  Price*
┃
┃ Crate:
┃    ┗Common:     ${Bcommon}
┃    ┗Uncommon:   ${Buncommon}
┃    ┗Mythic:     ${Bmythic}
┃    ┗Legendary:  ${Blegendary}
┃    ┗Pet:        ${BpetCrate}
┃ Others:
┃    ┗Limit:      ${limit}
┃ Rpg:
┃    ┗Diamond:    ${Bdiamond}
┃    ┗Armor:      ${armor}
┃    ┗Sword:      ${sword}
┃    ┗Budak:      ${budak}
┃    ┗Potion:     ${potion}
┗━━━
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.db.data.users[m.sender].exp >= potion * count) {
                                global.db.data.users[m.sender].exp -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Success buys ${count} Potion for ${potion * count} exp\n\nUse potion by typing: *${usedPrefix}use potion <amount>*`, m)
                            } else conn.reply(m.chat, `Your money is not enough to buy $ {count} Potion at a price of $ {potion * count} EXP`,)
                        break
                    case 'limit':
                             if (gglobal.db.data.users[m.sender].exp >= limit * count) {
                             	gglobal.db.data.users[m.sender].exp -= limit * count
                                 global.db.data.users[m.sender].limit += count * 1
                                 conn.reply(m.chat, `Sukses membeli ${count} limit dengan harga ${limit * count} exp`, m)
                              } else conn.reply(m.chat, `Exp kamu tidak cukup untuk membeli ${count} limit dengan harga ${limit * count} exp`, m)
                           break
                    case 'common':
                            if (global.db.data.users[m.sender].exp >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].exp -= Bcommon * count
                                conn.reply(m.chat, `Success membeli ${count} Common crate dengan harga ${Bcommon * count} exp`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} exp\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].exp >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].exp -= Buncommon * count
                                conn.reply(m.chat, `Success membeli ${count} Uncommon crate dengan harga ${Buncommon * count} exp`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} exp\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].exp >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].exp -= Bmythic * count
                                conn.reply(m.chat, `Success membeli ${count} Mythic crate dengan harga ${Bmythic * count} exp`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} exp\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].exp >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].exp -= Blegendary * count
                                conn.reply(m.chat, `Success membeli ${count} Legendary crate dengan harga ${Blegendary * count} exp`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} exp\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'pet':
                    case 'petCrate':
                    case 'petcrate':
                            if (global.db.data.users[m.sender].exp >= BpetCrate * count ) {
                                global.db.data.users[m.sender].petcrate += count * 1
                                global.db.data.users[m.sender].exp -= BpetCrate * count
                                conn.reply(m.chat, `Success membeli ${count} Pet Crate dengan harga ${BpetCrate * count} exp`, m)
                            }

                        break
                    case 'sword':
                            if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'swordmu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].exp > sword) {
                                global.db.data.users[m.sender].sword += 1
                                global.db.data.users[m.sender].exp -= sword * 1
                                conn.reply(m.chat, `Success membeli sword seharga ${sword} exp` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli sword seharga ${sword} exp`, m)
                     
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].exp > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].exp -= armor * 1
                                conn.reply(m.chat, `Success membeli armor seharga ${armor} exp` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} exp`, m)
                        
                        break
                    case 'budak':
                            if (global.db.data.users[m.sender].budak == 5) return conn.reply(m.chat, 'Budakmu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].exp > budak) {
                                global.db.data.users[m.sender].budak += 1
                                global.db.data.users[m.sender].exp -= budak * 1
                                conn.reply(m.chat, `Success membeli budak seharga ${budak} exp` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli budak seharga ${budak} exp`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                return conn.reply(m.chat, 'ExpShop tidak melayani jual hanya bisa membeli', m)
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].exp >= potion * count) {
                            global.db.data.users[m.sender].exp -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Success membeli ${count} Potion dengan harga ${potion * count} exp\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} exp`,m)
                    
                    break
               case 'limit':
                        if (gglobal.db.data.users[m.sender].exp >= limit * count) {
                        	gglobal.db.data.users[m.sender].exp -= limit * count
                            global.db.data.users[m.sender].limit += count * 1
                            conn.reply(m.chat, `Success membeli ${count} limit dengan harga ${limit * count} exp`, m)
                         } else conn.reply(m.chat, `Exp kamu tidak cukup untuk membeli ${count} limit dengan harga ${limit * count} exp`, m)
                         break
                case 'diamond':
                        if (global.db.data.users[m.sender].exp >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].exp -= Bdiamond * count
                            conn.reply(m.chat, `Success membeli ${count} Diamond dengan harga ${Bdiamond * count} exp`, m)
                        } else conn.reply(m.chat, `exp anda tidak cukup`, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].exp >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].exp -= Bcommon * count
                            conn.reply(m.chat, `Success membeli ${count} Common crate dengan harga ${Bcommon * count} exp`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} exp\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].exp >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].exp -= Buncommon * count
                            conn.reply(m.chat, `Success membeli ${count} Uncommon crate dengan harga ${Buncommon * count} exp`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} exp\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].exp >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].exp -= Bmythic * count
                            conn.reply(m.chat, `Success membeli ${count} Mythic crate dengan harga ${Bmythic * count} exp`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} exp\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].exp >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].exp -= Blegendary * count
                            conn.reply(m.chat, `Success membeli ${count} Legendary crate dengan harga ${Blegendary * count} exp`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} exp\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'pet':
                case 'petCrate':
                case 'petcrate':
                        if (global.db.data.users[m.sender].exp >= BpetCrate * count ) {
                            global.db.data.users[m.sender].petcrate += count * 1
                            global.db.data.users[m.sender].exp -= BpetCrate * count
                            conn.reply(m.chat, `Success membeli ${count} Pet Crate dengan harga ${BpetCrate * count} exp`, m)
                        }

                    break
                case 'sword':
                        if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'swordmu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].exp > sword * 1) {
                            global.db.data.users[m.sender].sword += 1
                            global.db.data.users[m.sender].exp -= sword * 1
                            conn.reply(m.chat, `Success membeli armor seharga ${sword} exp` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli sword seharga ${sword} exp`, m)
                    
                    break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].exp > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].exp -= armor * 1
                            conn.reply(m.chat, `Success membeli armor seharga ${armor} exp` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} exp`, m)
                    
                    break
                case 'budak':
                        if (global.db.data.users[m.sender].budak == 5) return conn.reply(m.chat, 'Budakmu sudah *Level Max*', m)
                        if (gglobal.db.data.users[m.sender].exp > budak * 1) {
                            global.db.data.users[m.sender].budak += 1
                            gglobal.db.data.users[m.sender].exp -= budak * 1
                            conn.reply(m.chat, `Success membeli budak seharga ${budak} exp` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli budak seharga ${budak} exp`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/ykji|yujij|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].exp += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Success menjual ${count} Potion dengan harga ${Spotion * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'limit':
                    if (global.db.data.users[m.sender].limit >= count * 1) {
                        gglobal.db.data.users[m.sender].exp += Slimit * count
                        global.db.data.users[m.sender].limit -= count * 1
                        conn.reply(m.chat, `Success menjual ${count} limit dengan harga ${Slimit * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Limit kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].exp += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Success menjual ${count} Common Crate dengan harga ${Scommon * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].exp += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Success menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].exp += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Success menjual ${count} Mythic Crate dengan harga ${Smythic * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].exp += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Success menjual ${count} Legendary Crate dengan harga ${Slegendary * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].exp += Ssampah * count
                        conn.reply(m.chat, `Success menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} exp`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].exp += Sdiamond * count
                        conn.reply(m.chat, `Success menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} exp`, m)
                    } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['exp-shop/shop-exp']
handler.tags = ['rpg']
    
handler.command = /^(exp-shop|expshop|shopxp|shsop-exp)$/i
module.exports = handler
