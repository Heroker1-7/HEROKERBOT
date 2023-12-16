let handler = async (m, { conn, text, command, usedPrefix }) => {
let pp = './views/warn.jpg.png'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `[❗] etiquetar a un usuario o responder a un mensaje\n\n example:\n${usedPrefix + command} @${global.suittag}`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return
if (user.warn == 0) throw '[❗] el usuario no tiene advertencias'  
user.warn -= 1
await m.reply(`${user.warn == 1 ? `@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`} se eliminó una advertencia\n WARNINGS ${user.warn}/3*`, null, { mentions: [who]})}
handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
