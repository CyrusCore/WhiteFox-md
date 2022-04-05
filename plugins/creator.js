const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Abram Satria;;;'
                    + 'FN:Abram Satria\n' // full name
                    + 'ORG:AeroNetwork;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=62859185953185:+62859185953185\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Abram Satria', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler