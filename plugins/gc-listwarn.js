let handler=async(_0x30fdc9,{conn:_0x8c769b,isOwner:_0x44459b})=>{let _0x2d550f=Object['entries'](global['db']['data']['users'])['filter'](_0x2565f8=>_0x2565f8[0x1]['warn']),_0x5b83ac=global['db']['data']['users']['warn'],_0x12ef37=global['db']['data']['users'],_0x3dbaea='./src/warn.jpg',_0x2c6124='⚠️ Users warned\x0a \x0a*╔═══════════════════·•*\x0a║ *Total : '+_0x2d550f['length']+' Users* '+(_0x2d550f?'\x0a'+_0x2d550f['map'](([_0x40d06c,_0x1e935e],_0x422aa9)=>('\x0a║\x0a║ 1.- '+(_0x44459b?'@'+_0x40d06c['split']`@`[0x0]:_0x40d06c)+' *('+_0x1e935e['warn']+'/3)*\x0a║\x0a║ - - - - - - - - -')['trim']())['join']('\x0a'):'')+'\x0a*╚═══════════════════·•*';await _0x8c769b['sendButton'](_0x30fdc9['chat'],_0x2c6124,wm,_0x3dbaea,[['𝐌 𝐄 𝐍 𝐔 🌠','#menu']],_0x30fdc9,{'mentions':await _0x8c769b['parseMention'](_0x2c6124)});};handler['command']=/^(listwarn)$/i,handler['group']=!![],handler['admin']=!![],handler['register']=!![];export default handler;