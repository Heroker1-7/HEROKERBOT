let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  let pp = "./views/warn.jpg.png";
  let who;
  if (m.isGroup)
    who = m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.quoted
      ? m.quoted.sender
      : text;
  else who = m.chat;
  let user = global.db.data.users[who];
  let bot = global.db.data.settings[conn.user.jid] || {};
  let dReason = "Sin motivo";
  let msgtext = text || dReason;
  let sdms = msgtext.replace(/@\d+-?\d* /g, "");
  let warntext = `*[❗] Etiqueta a una persona o responde a un mensaje grupal para advertir al usuario*\n\n*—◉ Ejemplo++:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who)
    throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) });
  user.warn += 1;
  await m.reply(
    `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
    } Recibí una advertencia en este grupo.!\nReason: ${sdms}\n*WARRNINGS ${
      user.warn
    }/3*`,
    null,
    { mentions: [who] },
  );
  if (user.warn >= 3) {
    if (!bot.restrict)
      return m.reply(
        "*[❗𝐈𝐍𝐅𝐎❗] El propietario no tiene habilitadas las restricciones (#Enable Restrict) Contacta con el para que lo habilite.*",
      );
    user.warn = 0;
    await m.reply(
      `Te lo advertí varias veces!!\n*@${
        who.split`@`[0]
      }* Superaste las *3* advertencias, ahora serás eliminado 👽`,
      null,
      { mentions: [who] },
    );
    await conn.groupParticipantsUpdate(m.chat, [who], "remove");
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
