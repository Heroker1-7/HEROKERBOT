import{readdirSync,unlinkSync,existsSync,promises as _0x258f71,rmSync}from'fs';import _0x3fdca2 from'path';const handler=async(_0x264afd,{conn:_0x3b315d,usedPrefix:_0x29169a})=>{if(global['conn']['user']['jid']!==_0x3b315d['user']['jid'])return _0x3b315d['sendMessage'](_0x264afd['chat'],{'text':'[❗]\x20use\x20this\x20Command\x20from\x20that\x20main\x20numberuse\x20this\x20Command\x20from\x20that\x20bot\x20main\x20number'},{'quoted':_0x264afd});const _0x50412e=_0x264afd['isGroup']?[_0x264afd['chat'],_0x264afd['sender']]:[_0x264afd['sender']],_0x117d01='./Session-activa/';try{const _0x5b4258=await _0x258f71['readdir'](_0x117d01);let _0x51ae64=0x0;for(const _0x44e21d of _0x5b4258){for(const _0xe44989 of _0x50412e){if(_0x44e21d['includes'](_0xe44989['split']('@')[0x0])){await _0x258f71['unlink'](_0x3fdca2['join'](_0x117d01,_0x44e21d)),_0x51ae64++;break;}}}_0x51ae64===0x0?await _0x3b315d['sendMessage'](_0x264afd['chat'],{'text':'[❗]\x20No\x20file\x20found\x20that\x20includes\x20the\x20chat\x20ID\x20'},{'quoted':_0x264afd}):await _0x3b315d['sendMessage'](_0x264afd['chat'],{'text':'[❗]\x20They\x20were\x20removed\x20'+_0x51ae64+'\x20session\x20files\x20'},{'quoted':_0x264afd});}catch(_0x1f73d3){console['error']('Error\x20reading\x20session\x20folder\x20or\x20files:',_0x1f73d3),await _0x3b315d['sendMessage'](_0x264afd['chat'],{'text':'[❗]\x20An\x20error\x20occurred\x20while\x20deleting\x20session\x20files\x20'},{'quoted':_0x264afd});}await _0x3b315d['sendMessage'](_0x264afd['chat'],{'text':'👋hello!\x20Now\x20do\x20you\x20see\x20me?\x0a\x0a[❗]\x20If\x20the\x20Bot\x20does\x20not\x20respond\x20to\x20your\x20commands\x20please\x20do\x20a\x20little\x20spam\x0a\x0a.S\x0a.S\x0a.S'},{'quoted':_0x264afd});};handler['help']=['fixmsgespera'],handler['tags']=['fix'],handler['command']=/^(fixmsgespera|ds)$/i,handler['register']=!![],handler['premium']=!![];export default handler;