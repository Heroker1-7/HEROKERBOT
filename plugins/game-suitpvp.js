let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗] Termina tu juego antes de comenzar otro.*'
let textquien = `*¿A quién quieres desafiar? etiquetar a una persona*\n\n*—◉ Ejemplo:*\n${usedPrefix}suit @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗] La persona a la que quieres desafiar todavía está jugando otro juego, espera a que termine de jugar.`
let id = 'suit_' + new Date() * 1
let caption = `🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮\n\n—◉ @${m.sender.split`@`[0]} Desafiar @${m.mentionedJid[0].split`@`[0]} A en un PVP de piedra, papel o tijera.`.trim()
let footer = `◉ Escribe "Aceptar" para aceptar\n◉ Escribe "Rechazar" para rechazar`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`Aceptar`], [`Rechazar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] Terminó el tiempo de espera, el PVP fue cancelado por falta de respuesta`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|suit(pvp)?$/i
handler.group = true
handler.game = true
handler.register = true
export default handler
