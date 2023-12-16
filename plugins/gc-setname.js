import Presence from '@whiskeysockets/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗]INGRESE EL NOMBRE QUE ES EL NUEVO NOMBRE DEL GRUPO`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '[❗𝐈𝐍𝐅𝐎❗]LO SIENTO, HUBO UN ERROR EL NOMBRE NO PUEDE TENER MÁS DE 25 CARACTERÍSTICAS
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
handler.register = true
export default handler
