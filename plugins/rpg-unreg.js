import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '[❗] ingrese su numero de serie'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '[❗] número de serie incorrecto '
user.registered = false
m.reply(`[ ✔ ] has eliminado tu registro `)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
