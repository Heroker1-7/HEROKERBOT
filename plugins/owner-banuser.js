let handler = async (m, { conn, participants, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let BANtext = conn.reply(m.chat, `[❗]ETIQUETAR A UNA PERSONA O RESPONDER UN MENSAJE ENVIADO POR EL USUARIO QUE QUIERES BANEAR EJEMPLO:\n${usedPrefix + command} @${global.suittag}`, fkontak, m)
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `[❗]EL USUARIO FUE BANEADO EXITOSAMENTE*\n*EL USUARIO NO PODRÁ UTILIZAR EL BOT HASTA QUE SE DESBANNE`, fkontak, m)
}
handler.command = /^banuser$/i
handler.rowner = true
export default handler
