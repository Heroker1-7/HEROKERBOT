import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, '[❗] no estás en ningún juego seguido no estás en ningún juego seguido', wm, null, [['𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝚂𝙰𝙻𝙰 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾', `${usedPrefix}ttt partida nueva`]], m)
delete conn.game[room.id]
await m.reply('[ ✔ ] el juego de tres en raya fue eliminado')}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
handler.register = true
export default handler
