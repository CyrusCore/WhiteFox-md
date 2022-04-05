let handler = async(m, { conn, command, args, isAdmin }) => {
    if(args == null) {
        antivirtex = `
        ╭─── 「 *Anti Virtex* 」── 
        │
        ├ • *antivirtex*
        ├ • *antialakazam*
        ├ • *antixvirus*
        ├ • *antivirustebel*
        ├ • *anticollosal*
        ├ • *antiviruschina*
        │
        ╰────`
        m.reply(antivirtex)
    }
    if(args == 'alakazam') {
        m.reply(`test`)
    }

}

handler.help = ['antivirtex']
handler.tags = ['security']
handler.command = ['antivirtex','virtexmenu']

module.exports = handler