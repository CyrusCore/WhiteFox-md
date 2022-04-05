let handler = async(m, { conn, command, args }) => {
  		// 	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				// namastc = args[0]
				// result = fs.readFileSync(`../CloudStorage/sticker/${namastc}.webp`)
				// conn.sendMessage(from, result, sticker)
}

handler.help = ['getsticker (soon)']
handler.tags = ['cloud']
handler.command = ['getsticker','getstiker','getstick']

module.exports = handler