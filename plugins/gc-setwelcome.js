let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('[❗] MENSAJE DE BIENVENIDA CONFIGURADO EXITOSAMENTE PARA ESTE GRUPO')
} else throw `[❗] INGRESA EL MENSAJE DE BIENVENIDA QUE QUIERES AGREGAR A ESTE:*\n*- @user (mention)*\n*- @group (group name)*\n*- @desc (group description)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.register = true
export default handler
