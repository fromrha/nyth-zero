//base by DGXeon
require('./lib/listmenu')
const { downloadContentFromMessage,BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,InteractiveMessage,getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ytdl = require("ytdl-core")
const gis = require('g-i-s')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const { translate } = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
//======= LIB FILE 
const { userXp, userLeveling, } = require("./lib/user");
const scp2 = require('./lib/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const { exec,spawn,execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh,UploadFileUgu,webp2mp4File,floNime } = require('./lib/uploader')
const { toAudio,toPTT,toVideo,ffmpeg,addExifAvatar
} = require('./lib/converter')
const {smsg,getGroupAdmins,formatp,formatDate,getTime,isUrl,await,sleep,clockString,msToDate,sort,toNumber,enumGetKey,runtime,fetchJson,getBuffer,json,delay,format,logic,generateProfilePicture,parseMention,getRandom,pickRandom,fetchBuffer,buffergif,GIFBufferToVideoBuffer,totalcase } = require('./lib/myfunc')
const { AntiSpam } = require('./lib/antispam')
//prem owner function
const { addPremiumUser, getPremiumExpired, getPremiumPosition,expiredPremiumCheck, checkPremiumUser,getAllPremiumUser, } = require('./lib/premiun')
//store
const { addResponList,delResponList,isAlreadyResponList, isAlreadyResponListGroup,sendResponList,updateResponList, getDataResponList  } = require('./lib/list')
//data
let bad = JSON.parse(fs.readFileSync('./json/badword.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
//media
const VnMenhara = JSON.parse(fs.readFileSync('./json/vn.json'))
const StickerMenhara = JSON.parse(fs.readFileSync('./json/sticker.json'))
const ImageMenhara = JSON.parse(fs.readFileSync('./json/image.json'))
const VideoMenhara = JSON.parse(fs.readFileSync('./json/video.json'))
const DocMenhara = JSON.parse(fs.readFileSync('./json/doc.json'))
const ZipMenhara = JSON.parse(fs.readFileSync('./json/zip.json'))
const ApkMenhara = JSON.parse(fs.readFileSync('./json/apk.json'))

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5')
const { xeontext6 } = require('./src/data/function/XBug/xeontext6')
const wkwk = fs.readFileSync(`./src/data/function/XBug/x.mp3`)
const xsteek = fs.readFileSync(`./src/data/function/XBug/x.webp`)

//class databases

const dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json'))
let dbjadwal = JSON.parse(fs.readFileSync('./database/dbjadwal.json', 'utf8'));

// Load the student database
let dbmhs = JSON.parse(fs.readFileSync('./database/dbmhs.json', 'utf8'));

//task database
const db_kurasi_tugas = JSON.parse(fs.readFileSync('./src/store/dbtugassmt3.json'))

const userNya = JSON.parse(fs.readFileSync('./database/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []


//module
module.exports = conn = async (conn, m, msg, chatUpdate, store) => {
    try {
const { type,quotedMsg, mentioned,now,fromMe } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefix
        const isCmd = body.startsWith(prefix)
        //prefix2 and command2 particulary for auto download
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const sender = m.sender
        const sender1 = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const senderNumber = sender1.split('@')[0]
        const xeonymisc = (m.quoted || m)
        const quoted = (xeonymisc.mtype == 'buttonsMessage') ? xeonymisc[Object.keys(xeonymisc)[1]] : (xeonymisc.mtype == 'templateMessage') ? xeonymisc.hydratedTemplate[Object.keys(xeonymisc.hydratedTemplate)[1]] : (xeonymisc.mtype == 'product') ? xeonymisc[Object.keys(xeonymisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : prefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        //anti media
        const isHanMedia = m.mtype
        //user status
        const isUser = userNya.includes(sender)
        const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= isOwner || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(conn, m, premium)
        const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const math = (teks) => {
return Math.floor(teks)
}  

 //USER
const user = global.db.data.users[m.sender]
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false
//time
const wib = moment.tz('Asia/kolkata').format('HH:mm:ss')
const hariini = moment.tz('Asia/kolkata').format('DD/MM/YYYY')
const waktu = moment().tz('Asia/kolkata').format('HH:mm:ss') 
if (waktu >= "00:00:00" && waktu < "04:00:00") {
  ucapanWaktu = "Selamat Pagi 🌌";
} else if (waktu >= "04:00:00" && waktu < "10:01:00") {
  ucapanWaktu = "Selamat Pagi 🌄";
} else if (waktu >= "10:01:00" && waktu < "15:01:00") {
  ucapanWaktu = "Selamat Siang 🌄";
} else if (waktu >= "15:01:00" && waktu < "17:59:59") {
  ucapanWaktu = "Selamat Sore 🌅";
} else if (waktu >= "18:00:00" && waktu < "23:59:59") {
  ucapanWaktu = "Selamat Malam 🌃";
} else {
  ucapanWaktu = "Apa kabar?"; // Default for any time not covered
}
// TANGGAL ISLAMIC 
let dot = new Date(new Date() + 3600000);
const dateIslamic = Intl.DateTimeFormat("id" + "-TN-u-ca-islamic", {
day: "numeric",
month: "long",
year: "numeric",
}).format(dot);
//const qtod = m.quoted? "true":"false"

//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
        //theme sticker reply
        const sendStickAwait = () => {
        let StikAwait = fs.readFileSync('./temp/sticker/oke tunggu bentar.webp')
        conn.sendMessage(from, { sticker: StikAwait }, { quoted: m })
        }
        const sendStickAdmin = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/Hanya Admin.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }
        const sendStickBadmin = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/Badmin.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }
        const sendStickOwner = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/Husus Owner.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }
        const sendStickSpam = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/Jan Spam.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }
        const sendStickGroup = () => {
        let StikerReply = fs.readFileSync('./temp/sticker/group.webp')
        conn.sendMessage(from, { sticker: StikerReply }, { quoted: m })
        }

// FUNCTION TEXT
const Ehztext = (text, style = 1) => {
  if (style === 1) {
    return text.toUpperCase(); // Style 1 mengubah teks jadi kapital
  } else {
    return text; // Style lainnya, teks normal
  }
};
  // random makeid
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }
//MAKE Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${wm}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: pickRandom(global.fotoRandom),sourceUrl: `${sgc}`																												
}}, sticker: nah }, { quoted: m })   				
await fs.unlinkSync(stok)
}	

       
      
        //reply
   async function newReply(txt) {
const xeonnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid,
  serverMessageId: 100,
  newsletterName
},
externalAdReply: {  
showAdAttribution: true,
title: botName,
body: `Hai ${ucapanWaktu} ${pushname}`,
thumbnailUrl: pickRandom(global.fotoRandom),
sourceUrl: syt
},
},
text: txt,
}
return conn.sendMessage(from, xeonnewrep, {
quoted: m,
})
}

      
// jsjsjsj
        async function setReply(teks) {
            if (typereply === 'v1') {
              conn.sendMessage(m.chat, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: botName,
                        body: `${ucapanWaktu}`,
                        previewType: "GIF",
                        thumbnail: fs.readFileSync('./media/nythzero-graphic-one.jpg'),
                        sourceUrl: sgc
                    }
                },
                text: teks
            }, {
                quoted: m
            });
            } else if (typereply === 'v2') {
                conn.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botName,
                            body: `${ucapanWaktu}`,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./media/nythzero-graphic-two.jpg'),
                            sourceUrl: sgc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               conn.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botName,
                        body: ownerName,
                        thumbnail: fs.readFileSync('./media/nythzero-graphic-two.jpg'),
                        sourceUrl: syt,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'v4') {
                newReply(teks)
            }
        }
        
        //fake reply with channel link embedded
 //premium
        async function onlyPrem(teks) {
    setReply(`This feature is for premium user, contact the owner to become premium user`)
}
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://whatsapp.com/channel/0029VaLHOzB89ind3OdqBi2v", 
                     "mimetype": "image/jpeg", 
                     "caption": botName,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botName, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botName}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botName, orderTitle: ownerName, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botName,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botName, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownerName, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botName, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownerName, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownerName},;;;\nFN:${ownerName}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://whatsapp.com/channel/0029VaLHOzB89ind3OdqBi2v","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./media/nythzero-graphic-one.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const Anjel = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownerName}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botName}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = makeid(4)
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = conn.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: makeid(4).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
                exp: 100,
                level: 1,
                hit: 0,
                balance: 1000,
               badword: 0,
               afkReason: '',
               nick: conn.getName(m.sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            let me = m.sender
let anu = "https://telegra.ph/file/8fd0ed9c3128e8f028f28.jpg";

    let contextInfo = {
      externalAdReply: {
        showAdAttribution: false,
        title: "Saved to database",
        mediaType: 1,
        renderLargerThumbnail: true,
        thumbnailUrl: anu,
      },
    };
let teks =`*]───── REGISTERED ─────[*
 
👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serialNumber}
📍 Verified: ${calender}
💸 Saldo: Rp 1000
⚜️ Grade: Newbie
🥇 Rank : 
🌀 Level : 1
 `
/*await sleep(1000)
conn.sendMessage(m.chat,{contextInfo, text:teks},{quoted:m}) */
                                                                  

               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                   if (!('name' in chats)) chats.name = m.groupNmae
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antitoxic' in chats)) chats.antitoxic = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                   name : groupName,
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antitoxic: false,
                  antipromotion: false,
                  antilinkgc: false,
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packName , authorName }
               if (!('about' in setting)) setting.about = { bot: { nick: conn.getName(botNumber), alias: botName}, owner: { nick: conn.getName(global.nomerOwner + '@s.whatsapp.net'), alias: global.nomerOwner}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packName, 
                  author: global.authorName
               },
               about: {
                  bot: {
                     nick: conn.getName(botNumber), 
                     alias: botName
                  },
                  owner: {
                     nick: conn.getName(global.nomerOwner + '@s.whatsapp.net'), 
                     alias: global.nomerOwner
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        

// AUTO SHOLAT 
conn.autoshalat = conn.autoshalat ? conn.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender
	let id = m.chat 
    if(id in conn.autoshalat) {
    return false
    }
    let jadwalSholat = {
      shubuh: '04:27',
      terbit: '05:46',
      dhuha: '08:00',
      dzuhur: '11:43',
      ashar: '15:04',
      magrib: '17:41',
      isya: '18:51',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = (`Hai ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Wonosobo dan sekitarnya._`)
    conn.autoshalat[id] = [
    setReply(caption),
    setTimeout(async () => {
    delete conn.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }


//total features
const totalFitur = () =>{
  var mytext = fs.readFileSync("./case.js").toString()
  var numUpper = (mytext.match(/case '/g) || []).length
  return numUpper
}
// Jika ada yang cek bot, bot akan merespon dengan gambar
if (budy.startsWith('Bot') || budy.startsWith('bot')) {
  // Path ke file gambar di dalam folder media
  const imagePath = './media/nythzero-graphic-one.jpg';

  // Kirim pesan gambar dengan teks
  conn.sendMessage(m.chat, { 
      image: { url: imagePath }, // Mengirim gambar dari path lokal
      caption: `${global.botName} Aktif Kak

*❖ Statistik:* 
⊸ Total Fitur: *${totalFitur()}*
⊸ Total Pengguna: *${Object.keys(db.data.users).length}*
⊸ Waktu Berjalan: *${runtime(process.uptime())}*
⊸ Total Pesan: *${Object.keys(global.db.data.chats).length}*
⊸ Mode Bot: *${conn.public ? `Publik` : `Pribadi`}*
  
*❖ Hari & Tanggal:* 
⊸ ${hariini}
⊸ ${week}, ${calender}
⊸ ${dateIslamic}

> Nyth Zero - 2024
` // Teks yang menyertai gambar
  }, { 
      quoted: m 
  });

  return;
}

                        
        // YOUTUBE 
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
setReply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await conn.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
setReply(`${err}`)
}
}

// Remmatkul

const activeCronJobs = {};

// Function to send reminder messages to the group
function sendReminder(groupId, courseName) {
    const message = `Bersiaplah untuk mata kuliah ${courseName} yang akan dimulai 5 menit lagi.\n\n> Nyth Zero 2024`;

  //   conn.sendMessage(m.chat, {
  //     text: message,
  //     contextInfo: {
  //         "externalAdReply": {
  //             showAdAttribution: true,
  //             renderLargerThumbnail: true,
  //             title: `PENGUMUMAN`,
  //             body: `Pergantian Jadwal Pembelajaran`,
  //             mediaType: 1,
  //             thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // You can change this URL to a valid image
  //             sourceUrl: sgc // You can replace this with a custom URL
  //         }
  //     }
  // }, { quoted: m });
    conn.sendMessage(groupId, { text: message });
}

// Clear existing cron jobs for a specific group
const clearCronJobs = (groupId) => {
    if (activeCronJobs[groupId]) {
        // Stop all cron jobs for the group if they exist
        activeCronJobs[groupId].forEach(job => job.stop());
        activeCronJobs[groupId] = []; // Reset the list of jobs for the group
    }
};

// Set up cron jobs based on the course schedule in dbjadwal.json for a specific group
const setupCourseReminders = (groupId) => {
    const chats = global.db.data.chats[groupId];
    const dbJadwal = JSON.parse(fs.readFileSync('./database/dbjadwal.json', 'utf8'));

    if (!chats || !chats.remmatkul) {
        console.log(`Fitur ini belum di aktifkan di grub ${groupId}`);
        return;
    }

    clearCronJobs(groupId); // Ensure we don't have duplicate jobs

    dbJadwal.courses.forEach(course => {
        // Convert day name to the corresponding cron day format
        let cronDay;
        switch (course.day.toLowerCase()) {
            case 'monday': cronDay = 1; break;
            case 'tuesday': cronDay = 2; break;
            case 'wednesday': cronDay = 3; break;
            default: return; // Skip if it's not Monday, Tuesday, or Wednesday
        }

        // Calculate 5 minutes before the course's startTime
        const courseStartTime = moment(course.startTime, 'HH:mm');
        const reminderTime = courseStartTime.subtract(5, 'minutes');
        const reminderHour = reminderTime.format('HH'); // Get the hour (in 24-hour format)
        const reminderMinute = reminderTime.format('mm'); // Get the minute

        // Create a cron schedule for the reminder
        const job = cron.schedule(`${reminderMinute} ${reminderHour} * * ${cronDay}`, () => {
            if (chats.remmatkul) {
                sendReminder(groupId, course.courseName); // Send reminder to the group
            }
        });

        // Store the job in the activeCronJobs object for this group
        if (!activeCronJobs[groupId]) {
            activeCronJobs[groupId] = [];
        }
        activeCronJobs[groupId].push(job);
    });
};

// rempresensi
const activeAttendanceCronJobs = {};

// Function to send attendance reminder messages to the group
function sendAttendanceReminder(groupId, courseName) {
    const message = `Mata kuliah ${courseName} akan berakhir dalam 10 menit lagi, silakan manfaatkan kesempatan ini untuk melakukan presensi!`;
    conn.sendMessage(groupId, { text: message });
}

// Clear existing cron jobs for attendance reminders for a specific group
const clearAttendanceCronJobs = (groupId) => {
    if (activeAttendanceCronJobs[groupId]) {
        // Stop all cron jobs for the group if they exist
        activeAttendanceCronJobs[groupId].forEach(job => job.stop());
        activeAttendanceCronJobs[groupId] = []; // Reset the list of jobs for the group
    }
};

// Set up cron jobs based on the course schedule in dbjadwal.json for a specific group
const setupAttendanceReminders = (groupId) => {
    const chats = global.db.data.chats[groupId];
    const dbJadwal = JSON.parse(fs.readFileSync('./database/dbjadwal.json', 'utf8'));

    if (!chats || !chats.remmatkul) {
        console.log(`Fitur ini belum di aktifkan di grub ${groupId}`);
        return;
    }

    clearAttendanceCronJobs(groupId); // Ensure we don't have duplicate jobs

    dbJadwal.courses.forEach(course => {
        // Convert day name to the corresponding cron day format
        let cronDay;
        switch (course.day.toLowerCase()) {
            case 'monday': cronDay = 1; break;
            case 'tuesday': cronDay = 2; break;
            case 'wednesday': cronDay = 3; break;
            default: return; // Skip if it's not Monday, Tuesday, or Wednesday
        }

        // Calculate 10 minutes before the course's endTime
        const courseEndTime = moment(course.endTime, 'HH:mm');
        const reminderTime = courseEndTime.subtract(10, 'minutes');
        const reminderHour = reminderTime.format('HH'); // Get the hour (in 24-hour format)
        const reminderMinute = reminderTime.format('mm'); // Get the minute

        // Create a cron schedule for the attendance reminder
        const job = cron.schedule(`${reminderMinute} ${reminderHour} * * ${cronDay}`, () => {
            if (chats.remmatkul) {
                sendAttendanceReminder(groupId, course.courseName); // Send attendance reminder to the group
            }
        });

        // Store the job in the activeAttendanceCronJobs object for this group
        if (!activeAttendanceCronJobs[groupId]) {
            activeAttendanceCronJobs[groupId] = [];
        }
        activeAttendanceCronJobs[groupId].push(job);
    });
};

// remserang
function setupSchoolReminders(groupId) {
    const reminderTimes = {
        beforeLesson: "07:45",
        breakStart: "11:10",
        breakEnd: "16:45",
        schoolEnd: "16:46"
    };

    if (!activeCronJobs[groupId]) activeCronJobs[groupId] = [];

    activeCronJobs[groupId].push(cron.schedule('45 7 * * 1-3', () => {
      sendAudioReminder(groupId, './media/audio/airport-gate-call-chimes-om-fx-1-00-06.mp3', 'Selamat pagi wahai warga sipil sekalian.\n\nBersiaplah untuk mengikuti kelas pada hari ini, jadwal pertama akan dimulai dalam 30 menit lagi\n\n> Nyth Zero 2024');
    }));

    activeCronJobs[groupId].push(cron.schedule('10 11 * * 1-3', () => {
      sendAudioReminder(groupId, './media/audio/og-school-bell.mp3', '🔔 *Pengumuman!*\nSekarang waktunya untuk istirahat.\n\nManfaatkan waktu istirahat ini sebijak mungkin!\n\n> Nyth Zero 2024');
    }));

    activeCronJobs[groupId].push(cron.schedule('45 16 * * 1-3', () => {
      sendAudioReminder(groupId, './media/audio/airport-gate-call-chimes-om-fx-1-00-06.mp3', '🔔 *Pengumuman!*\nWaktu istirahat telah selesai.\n\nDimohon kepada seluruh mahasiswa KPI 2 untuk segera kembali ke dalam kelas!\n\n> Nyth Zero 2024');
    }));

    activeCronJobs[groupId].push(cron.schedule('46 16 * * 1-3', () => {
      sendAudioReminder(groupId, './media/audio/jp-school-bel.mp3', '🔔 *Pengumuman!*\nKelas telah selesai.\nterima kasih atas kerja samanya pada hari, kalian semua hebat! sampai jumpa di esok hari👋😁\n\n> Nyth Zero 2024');
    }));
}


function clearSchoolCronJobs(groupId) {
    if (activeCronJobs[groupId]) {
        activeCronJobs[groupId].forEach(job => job.stop()); 
        activeCronJobs[groupId] = [];
    }
}


async function sendAudioReminder(groupId, audioPath, message) {
  // Send audio file
  await conn.sendMessage(groupId, {
      audio: { url: audioPath },
      mimetype: 'audio/mp4',
      ptt: false
  });

  // Send message
  await conn.sendMessage(groupId, { text: message });
}





        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            setReply(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            conn.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !isOwner && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return setReply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${nomerOwner}`)
            }
        }
        // Private Only
        if (!isOwner && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return setReply("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	      }
	      }
	     
        if (!conn.public) {
            if (isOwner && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	conn.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            conn.readMessages([m.key])
        }

        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            conn.updateProfileStatus(`${botName} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
           let xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            conn.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
        let    xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            conn.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            conn.sendPresenceUpdate(xeonpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return conn.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return conn.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return conn.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnumber === true){ 
        	if (isOwner || isAdmins || !isBotAdmins) return
            conn.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await conn.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i)}\nFN:${await conn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${syt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${sgh}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await conn.sendMessage(m.chat, { forward: val }, { quoted: m })
    }

    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && AntiSpam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(isOwner) return
if (isAdmins) returnn
conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
conn.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
conn.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(isOwner) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          setReply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if ( isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isHanMedia) {
    if(isHanMedia=== "imageMessage"){
        if (isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isHanMedia) {
    if(isHanMedia === "videoMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isHanMedia) {
    if(isHanMedia === "stickerMessage"){
        if ( isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isHanMedia) {
    if(isHanMedia === "audioMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isHanMedia) {
    if(isHanMedia === "pollCreationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isHanMedia) {
    if(isHanMedia === "locationMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isHanMedia) {
    if(isHanMedia === "documentMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isHanMedia) {
    if(isHanMedia === "contactMessage"){
        if (isOwner || isAdmins || !isBotAdmins){		  
        } else {
          setReply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }

  // Handle button click for attendance
// if (m.message && m.message.buttonsResponseMessage && m.message.buttonsResponseMessage.selectedButtonId.startsWith('hadir_')) {
//   const sessionId = m.message.buttonsResponseMessage.selectedButtonId.split('_')[1];

//   // Load the session data
//   let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));
//   let activeSession = dbpresensi.sessions.find(s => s.sessionId === sessionId && !s.ended);

//   if (!activeSession) {
//       return setReply('Sesi presensi tidak ditemukan atau sudah berakhir.');
//   }

//   // Find the student based on the phone number of the sender
//   let dbmhs = JSON.parse(fs.readFileSync('./database/dbmhs.json', 'utf8'));
//   let student = dbmhs.students.find(s => s.phone === m.sender.split('@')[0]);

//   if (!student) {
//       return setReply('Nomor telepon Anda tidak terdaftar sebagai mahasiswa KPI 2.');
//   }

//   // Check if the student is already marked as present
//   if (activeSession.studentsPresent.find(s => s.phone === student.phone)) {
//       return setReply(`Anda sudah terdaftar dalam presensi mata kuliah *${activeSession.courseName}*.`);
//   }

//   // Mark the student as present
//   activeSession.studentsPresent.push({
//       name: student.name,
//       nim: student.nim,
//       phone: student.phone
//   });

//   // Save the updated session data
//   fs.writeFileSync('./database/dbpresensi.json', JSON.stringify(dbpresensi, null, 2));

//   // Send confirmation message
//   setReply(`Terima kasih, ${student.name}. Anda sudah terdaftar dalam presensi mata kuliah *${activeSession.courseName}* pada *${activeSession.date}*.`);

//   // Update the attendance list
//   let attendanceList = `Presensi mata kuliah *${activeSession.courseName}* pada *${activeSession.date}*\n\n`;
//   attendanceList += '*Daftar Hadir:*\n';
//   activeSession.studentsPresent.forEach((s, index) => {
//       attendanceList += `${index + 1}. ${s.name} (NIM: ${s.nim})\n`;
//   });

//   conn.sendMessage(m.chat, { text: attendanceList }, { quoted: m });
// }

        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
if (budy.match(`instagram.com`)) {
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
conn.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await conn.sendMessage(m.chat, { react: { text: "⏱",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
conn.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
conn.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
conn.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await conn.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                conn.sendImageAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                conn.sendVideoAsSticker(from, mediac, m, { packname: global.packName, author: global.authorName })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return setReply(bvl)
if (m.key.fromMe) return setReply(bvl)
if (isOwner) return setReply(bvl)
               await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return setReply(bvl)
if (m.key.fromMe) return setReply(bvl)
if (isOwmer) return setReply(bvl)
               await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            let janTag = Ehztext(`User yang anda sebut sedang AFK!\n\n> Alasan AFK: ${reason ? '' + reason : 'Alasan tidak ditulis'}\n> AFK selama: ${clockString(new Date - afkTime)}`.trim())
            setReply(janTag)
        }
       
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            let kembali = Ehztext(`${pushname} Telah Kembali Dari Afk\n\n> Alasan AFK: ${user.afkReason ? '' +user.afkReason : ''}\n> AFK selama: ${clockString(new Date - user.afkTime)}`.trim())
       
            user.afkTime = -1
            user.afkReason = ''
            conn.sendMessage(from, { 
    text: `${kembali}`,
    contextInfo:{
    "externalAdReply": {
    "showAdAttribution": true,
    "renderLargerThumbnail": true,
    "title": `${botName}`,
    "body": `${ucapanWaktu}, ${pushname}`,
    "containsAutoReply": true,
    "mediaType": 1, 
    "thumbnailUrl": 'https://telegra.ph/file/79adf4b030c9828118a04.jpg' ,
    }
    }
    },{ 
    quoted: m })
}
      
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        setReply('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        setReply('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        //autoreply
for (let BhosdikaXeon of VnMenhara) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./media/audio/${BhosdikaXeon}.mp3`)
conn.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerMenhara){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./media/sticker/${BhosdikaXeon}.webp`)
conn.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageMenhara){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./media/image/${BhosdikaXeon}.jpg`)
conn.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoMenhara){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./media/video/${BhosdikaXeon}.mp4`)
conn.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
conn.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkMenhara) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
conn.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipMenhara) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
conn.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocMenhara) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./media/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

// Response Addtugas
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_kurasi_tugas)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_kurasi_tugas)
if (get_data_respon.isImage === false) {
conn.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_kurasi_tugas) }, {
quoted: m
})
} else {
conn.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: conn.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
conn.ev.emit('messages.upsert', msg)
} 

//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return conn.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
        
//============= [LIST RESPONCE CHECKING END ]================

        
// GAME FUNCTION 
 //math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await setReply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else setReply('*Wrong Answer!*')
        }
//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += conn.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(conn.caklontong[id][3])
 delete conn.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi><*`)
// else setReply(`*Salah!*`)
 
}
       //GAME tebak gambar
     conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
     if(isGroup && from in conn.tebakgambar){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tebakgambar[id][1]))
      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebakgambar[id][2]
      var teks = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakgambar[id][2]} Money 💸`
        m.reply (teks)
      clearTimeout(conn.tebakgambar[id][3])
      delete conn.tebakgambar[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     }


     //Game Family 100
     conn.family = conn.family ? conn.family : {}
     if(isGroup && from in conn.family){
     if(!isGroup) {return} 
     let similarity = require('similarity')
     let threshold = 0.72 // semakin tinggi nilai, semakin mirip
     let id =  m.chat
     let room = conn.family[id]
     let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
     let isSurrender = /^((me)?nyerah|ah wes lah|wes|wes set|wes ndengen|dah|dahlah|ah mbuh|mbuh|wis lah|wis set|wis|bodo lah|bodo|nyerah yg|menyerah saya|nyerah wis|apa jir lah|wes ra reti|mbuhh|surr?ender)$/i.test(budy)
     if (!isSurrender) {
     let index = room.jawaban.indexOf(text)

     if (index < 0) {
     if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
      }
     if (!isCmd && room.terjawab[index]) {return} 
     user.balance += room.winScore
     room.terjawab[index] = m.sender
     }
     let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

     let caption = `*GAME FAMILY100*

     *Soal:* ${room.soal}

     Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
     (beberapa jawaban terdapat spasi)
     `: ''}
     ${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
     ${Array.from(room.jawaban, (jawaban, index) => {
      return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
      }).filter(v => v).join('\n')}

     ${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
          `.trim()

     conn.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted:fkontak}).then(msg => {
      conn.family[id].msg = msg
     }).catch(_ => _)
     if (isWin || isSurrender) delete conn.family[id] 
     //if (isWin || isSurrender) clearTimeout(200000)
     }
     //GAME tebak lirik Function
     conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
     if(isGroup && from in conn.tebaklirik){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
     let json = JSON.parse(JSON.stringify(conn.tebaklirik[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebaklirik[id][2]
      global.db.data.users[m.sender].exp += 10
        var teks = Ehztext(`*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklirik[id][2]} Money 💸\n EXP: +10`)
        setReply (teks)
      clearTimeout(conn.tebaklirik[id][3])
      delete conn.tebaklirik[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`)
      }
       //GAME tebak kimia Function
     conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}  
     if(isGroup && from in conn.tebakkimia){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
      let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

      if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
     user.balance += conn.tebakkimia[id][2]
      global.db.data.users[m.sender].exp += 10
        var teks = Ehztext(`*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkimia[id][2]} Money 💸`)
        setReply (teks)
      clearTimeout(conn.tebakkimia[id][3])
      delete conn.tebakkimia[id]
      } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi ><*`)
     // else setReply(`*Salah!*`)
      }
     //GAME MATH FUNCTION
     conn.math = conn.math ? conn.math : {}
     if(isGroup && from in conn.math){
     if(!isGroup) {return} 
     //console.log(conn.math)
     try{
     let id = from
     if (!(id in lconn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal tesebut sudah berakhir')
     let math = JSON.parse(JSON.stringify(conn.math[id][1]))
     if (budy == math.result) {
     user.balance += math.bonus
     clearTimeout(conn.math[id][3])
     delete conn.math[id]
     await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
     } else { 

     }
     }catch(err){
     console.log(err)
     }
     }
     //GAME  teka teki Function
     conn.tekateki = conn.tekateki ? conn.tekateki : {}  
     if(isGroup && from in conn.tekateki){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tekateki[id][2]
      var teks = Ehztext(`*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tekateki[id][2]} Money 💸`)
      setReply(teks)
      clearTimeout(conn.tekateki[id][3])
      delete conn.tekateki[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     }
      //GAME Susunkata Function
     conn.susunkata = conn.susunkata ? conn.susunkata : {}  
     if(isGroup && from in conn.susunkata){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.susunkata[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.susunkata[id][2]
        var teks = Ehztext(`*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.susunkata[id][2]} Money 💸`)
     setReply(teks)
      clearTimeout(conn.susunkata[id][3])
      delete conn.susunkata[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`)

     }
     //GAME tebak kata Function
     conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
     if(isGroup && from in conn.tebakkata){
     const similarity = require('similarity')
     const threshold = 0.72
     let id = from

      let json = JSON.parse(JSON.stringify(conn.tebakkata[id][1]))
      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.tebakkata[id][2]
     let kata = Ehztext(`*TEBAK KATA*

     Jawaban Kamu Benar!
     Bonus Saldo : +${conn.tebakkata[id][2]}
     Exp : +999`)  
     setReply(kata)
      clearTimeout(conn.tebakkata[id][3])
      delete conn.tebakkata[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

     }
     //GAME siapa aku Function
     conn.siapaaku = conn.siapaaku ? conn.siapaaku : {}  
     if(isGroup && from in conn.siapaaku){
     if(!isGroup) {return} 
     const similarity = require('similarity')
     const threshold = 0.72
     let id = m.chat
      let json = JSON.parse(JSON.stringify(conn.siapaaku[id][1]))

      if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
     user.balance += conn.siapaaku[id][2]
     var teks = Ehztext(`*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.siapaaku[id][2]} Money 💸`)
        m.reply (teks)
      clearTimeout(conn.siapaaku[id][3])
      delete conn.siapaaku[id]
      } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
     // else setReply(`*Salah!*`) 
     }
 //Game Suit PvP
	    conn.suit = conn.suit ? conn.suit : {}
	    let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|yo|iya|huuhmm|y|yawes|ok|okk|ya ayo|jal|gajal|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|up|males|malas|malaz(z)|moh|emoh|nko lah|gak mau|gak lah|ndak mua|nda mau|emooh|emoooh|mooh|rasah|ra|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete conn.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silakan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete conn.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete conn.suit[roof.id]
	    }
        }
        
        //user db
        if (isCommand && !isUser) {
userNya.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(userNya, null, 2))
}
// END BAGIAN COMMAND
        switch (isCommand) {
case 'help': case 'menu': {
if (!isGroup) return sendStickGroup()
let owned = `${global.nomerOwner}`
let statususer = isOwner ? 'Owner 🎐' : isPremium ? 'Premium 💎' : 'User 🐱';
let limitz = db.data.users[m.sender].limit;

wek = Ehztext(`
Saya adalah ${global.botName}, bot yang dirancang khusus oleh Shinrinyoku`, 2); // Style 2 untuk teks normal
const caption = `${wek}\n\n\n${menumenhara(prefix)}`;
let sections = [
{
  title: 'Pintasan',
  highlight_label: 'Show All',
  rows: [{
  title: 'Semua Menu',
  description: `Merinci semua menu`, 
  id: `${prefix}menu all`
  }]},
  {
  title: 'List Menu',
  rows: [{
  title: 'Group',
  description: `Merinci menu untuk grub`, 
  id: `${prefix}menu group`
  },
  {
  title: 'Kelas',
  description: `Merinci menu untuk kelas KPI 2`, 
  id: `${prefix}menu kelas`
  },
  {
  title: 'Game',
  description: `Merinci menu untuk fun game`, 
  id: `${prefix}menu game`
  },
  {
  title: 'AI',
  description: `Merinci menu dengan integrasi AI`, 
  id: `${prefix}menu ai`
  },
  {
  title: 'Download',
  description: `Merinci menu untuk mengunduh`, 
  id: `${prefix}menu download`
  },
  {
  title: 'Tools',
  description: `Merinci menu untuk peralatan`, 
  id: `${prefix}menu tools`
  },
  {
  title: 'Sticker',
  description: `Merinci menu untuk membuat stiker`, 
  id: `${prefix}menu sticker`
  },
  {
  title: 'Convert', 
  description: "Merinci menu untuk mengubah format file", 
  id: `${prefix}menu convert`
  },
  {
  title: 'Settings', 
  description: "Merinci menu untuk pengaturan", 
  id: `${prefix}menu settings`
  },
  {
  title: 'Storage', 
  description: "Merinci menu untuk storage", 
  id: `${prefix}menu storage`
  },
  {
  title: 'Owner', 
  description: "Merinci menu untuk pemilik bot", 
  id: `${prefix}menu owner`
  }]
  }]
  
  let listMessage = {
      title: 'Kurasi Menu', 
      sections
  };


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid,
  serverMessageId: 100,
  newsletterName
  },
 businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: (`© Nyth Zero - 2024`)
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `Hai ${ucapanWaktu}, ${pushname}`,
 subtitle: "nythzero",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e6f54418bdc9096b3f306.jpg" } }, { upload: conn.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
      {
        "name": "single_select",
        "buttonParamsJson": JSON.stringify(listMessage) 
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": `{"display_text":"Lisensi","id":"${prefix}script"}`
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": `{"display_text":"Donasi 💸","id":"${prefix}donasi"}`
      },
      {
        "name": "cta_url",
        "buttonParamsJson": "{\"display_text\":\"Pencipta\",\"url\":\"https://wa.me/6282114692838\",\"merchant_url\":\"https://wa.me/6282114692838\"}"
      },
      {
        "name": "cta_url",
        "buttonParamsJson": "{\"display_text\":\"Portofolio\",\"url\":\"https://fromrha.pages.dev/\",\"merchant_url\":\"https://fromrha.pages.dev/\"}"
      },
 ],
 })
 })
 }
 }
}, {})

if (!q) await conn.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
if (args[0] === "all") {
    
    let owned = `${global.nomerOwner}`
    let statususer = isOwner ? 'Owner 🎐' : isPremium ? 'Premium 💎' : 'User 🐱';
    let limitz = db.data.users[m.sender].limit;
let photo1 = pickRandom(global.fotoRandom)
   let wek = `
${gris}┈ ⋞ 〈 ALL MENU 〉 ⋟ ┈${gris}

➼ Nama: ${pushname}
➼ Nomor: ${m.sender.split('@')[0]}
➼ Status: ${statususer}
➼ Batas: ${limitz}`
 const caption = `${wek}\n\n${readmore}\n\n${menugrup(prefix)}\n\n\n${menukelas(prefix)}\n\n\n${menugame(prefix)}\n\n\n${menuai(prefix)}\n\n\n${menudownload(prefix)}\n\n\n${menutools(prefix)}\n\n\n${menusticker(prefix)}\n\n\n${menuconvert(prefix)}\n\n\n${menusettings(prefix)}\n\n\n${menustorage(prefix)}\n\n\n${menuowner(prefix)}`;

conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid,
serverMessageId: 100,
newsletterName },
externalAdReply: {  
title: botName, 
body: `Kurasi semua menu yang tersedia`,
thumbnailUrl:photo1,
sourceUrl: global.sgc, 
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: Anjel})
 } else if (args[0] === 'group') {
await sleep(1000)
    
 const caption = `${menugrup(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.sig, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'kelas') {
await sleep(1000)

const caption = `${menukelas(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.sig, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'game') {
await sleep(1000)
    
 const caption = `${menugame(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom (fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'ai') {
await sleep(1000)
    
 const caption = `${menuai(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom (fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'download') {
await sleep(1000)
    
 const caption = `${menudownload(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'tools') {
await sleep(1000)
    
 const caption = `${menutools(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'sticker') {
await sleep(1000)
    
 const caption = `${menusticker(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: `${botName}`, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'convert') {
await sleep(1000)
    
 const caption = `${menuconvert(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'settings') {
await sleep(1000)
    
 const caption = `${menusettings(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
} else if (args[0] === 'storage') {
await sleep(1000)
    
 const caption = `${menustorage(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 } else if (args[0] === 'owner') {
await sleep(1000)
    
 const caption = `${menuowner(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: syt, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
 }
}
break
// MENU GROUP 
case 'vote': {
            if (!m.isGroup) return sendStickGroup()
            if (m.chat in vote) return m.reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!q) return m.reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            m.reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote  [m.chat] = [q, [], []]
            await sleep(1000)
         let   upvote = vote[m.chat][1]
          let  devote = vote[m.chat][2]
          let  teks_vote = Ehztext(`* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`)
       conn.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return sendStickGroup()
            if (!(m.chat in vote)) return m.reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
         let   isVote = vote[m.chat][1].concat(vote[m.chat][2])
        let    wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply('You have Voted')
         vote[m.chat][1].push(m.sender)
          let  menvote = vote[m.chat][1].concat(vote[m.chat][2])
          let  teks_vote = Ehztext(`* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`)
            conn.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return sendStickGroup()
            if (!(m.chat in vote)) return m.reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
        let    isVote = vote[m.chat][1].concat(vote[m.chat][2])
       let     wasVote = isVote.includes(m.sender)
            if (wasVote) return m.reply('You have Voted')
    vote[m.chat][2].push(m.sender)
    let        menvote = vote[m.chat][1].concat(vote[m.chat][2])
           let teks_vote = Ehztext(`* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`)
            conn.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return sendStickGroup()
if (!(m.chat in vote)) return m.reply(`_*Tidak Ada Voting Dalam Grup Ini!*_\n\n*${prefix}vote* - to start voting`)
let teks_vote = Ehztext(`* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${conn.user.id}
`)
conn.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return sendStickGroup()
            if (!(m.chat in vote)) return m.reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'add':
                if (!m.isGroup) return sendStickGroup()
                if(!isOwner) return sendStickOwner()
                if (!isBotAdmins) return sendStickBadmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                m.reply(mess.succes)
                break

//Intro untuk member baru
case  'intro': {
if (!isGroup) return onlyGroup()
let teks = ('Halo semuanya saya anggota baru di sini👋\n\nNama lengkap:\nNama panggilan:\nAlamat:\nAlasan Bergabung:\nCatatan:\n\nMohon bantuan dan kerjasama kedepannya guys 😁')
setReply(teks)
}
break    
            case 'promote':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                setReply(mess.succes)
                break
            case 'demote':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                setReply(mess.succes)
                break
            case 'setnamegc':
            case 'setgcname':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                if (!q) return setReply('Berikan saya Nama yang ingin anda ganti/tambahkan')
                await conn.groupUpdateSubject(m.chat, q)
                setReply(mess.succes)
                break
  
        case 'delppgc': {
if (!m.isGroup) return sendStickGroup()
if (!isAdmins && !isOwner) return sendStickAdmin()
if (!isBotAdmins) return sendStickBadmin()
    await conn.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!isOwner) return sendStickOwner()
    await conn.removeProfilePicture(conn.user.id)
    setReply(`Foto profile bot berhasil dihapus.`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                if (!q) return setReply('Berikan saya deskripsi yang ingin anda ganti/tambahkan')
                await conn.groupUpdateDescription(m.chat, q )
                setReply(mess.succes)
                break
            
            case 'setppgc':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins) return setReply(mess.only.admin)
                if (!isBotAdmins) return sendStickBadmin()
                if (!quoted) return setReply(`Kirim/Balas pesan dengan teks ${prefix + command}`)
                if (!/image/.test(mime)) return setReply(`Kirim/Balas pesan dengan teks ${prefix + command}`)
                if (/webp/.test(mime)) return setReply(`Kirim/Balas pesan dengan teks ${prefix + command}`)
                var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await conn.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    setReply(mess.succes)
                } else {
                    var memeg = await conn.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    setReply(mess.succes)
                }
                break
            case 'tagall':
            
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                let me = m.sender
                let teks = (`${gris}TAG ALL${gris} \n➼ Tagger:  @${me.split('@')[0]}\n➼ Message: ${q ? q : 'no message'}\n\n`)
                for (let mem of participants) {
                teks += `☛  @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'kickall': {
 if (!m.isGroup) return sendStickGroup()
 if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
 if (!isBotAdmins) return sendStickBadmin()
  const xeonkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of xeonkickall) {
 await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 setReply(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return sendStickGroup()
 if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
 if (!isBotAdmins) return sendStickBadmin()
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 setReply(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return sendStickGroup()
 if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
 if (!isBotAdmins) return sendStickBadmin()
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 setReply(`Success`);
}
break
            case 'hidetag':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return sendStickGroup()
                if (!isBotAdmins) return sendStickBadmin()
                if (!isAdmins) return setReply(mess.only.admin)
                if (!m.quoted) return setReply(`Reply media with caption ${prefix + command}`)
                conn.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'gc':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => setReply(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => setReply(`Success Opening Group`))
                } else {
                    setReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
case "idgroup": case 'listgc' : {
if (!isOwner) return sendStickOwner()
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = Ehztext(`⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`)
for (let x of anu) {
let metadata2 = await conn.groupMetadata(x)
teks += Ehztext(`◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`)
}
setReply(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'closetime':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return m.reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                setReply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = Ehztext(`*Close time* group closed by admin\nnow only admin can send messages`)
                    conn.groupSettingUpdate(m.chat, 'announcement')
                    setReply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isOwner) return setReply(mess.only.admin)
                if (!isBotAdmins) return sendStickBadmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return setReply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                setReply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = Ehztext(`*Open time* the group was opened by admin\n now members can send messages`)
                    conn.groupSettingUpdate(m.chat, 'not_announcement')
                    setReply(open)
                }, timer)
                break
  case 'kick':
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!m.isGroup) return sendStickGroup()
                if (!isAdmins && !isGroupOwner && !isOwner) return sendStickAdmin()
                if (!isBotAdmins) return sendStickBadmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                setReply(mess.succes)
                break
case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return sendStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = Ehztext(`   
*Group Admins:*
${listAdmin}
`.trim())
    conn.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'reqjoin':{
	if (!m.isGroup) return sendStickGroup()
	if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
	const response = await conn.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    conn.sendMessage(m.chat, {text: 'Untuk sekarang, tidak ada permintaan untuk bergabung ke dalam grup ini'}, {quoted:m});
    return;
  }
  let replyMessage = `❖ List Permintaan Bergabung:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Detail Bergabung*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Metode:* ${request_method}`;
    replyMessage += `\n⏰ *Waktu:* ${formattedTime}\n`;
  });

  conn.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 conn.sendMessage(m.chat, { delete: key })
}
break
case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            setReply(from)
           }
          break
case 'Shinrinyoku': case '@6282114692838': case '6282114692838': {
let StikOwn = fs.readFileSync('./temp/sticker/Tag Owner.webp')
        conn.sendMessage(from, { sticker: StikOwn}, { quoted: m })
        }
let oah = (`hi ${pushname}, apabila ada keperluan dengan owner saya, mohon menunggu untuk beliau aktif.\n\nTerima kasih!`)
setReply(oah)
await sendTagOwner()
break
case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = q
                let alasan = Ehztext(`${pushname} telah Afk\n\n> Alasan${q ? ': ' + q : ''}`)
   conn.sendMessage(from, { 
text: `${alasan}`,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": `${ucapanWaktu}, ${pushname}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/3e24833fa717c93b72f35.jpg',
}
}
},{ 
quoted: m })
}
break	
case 'jadian': {
if (!isGroup) return sendStickGroup()
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = (`Ciee yang jadian, Jangan lupa pajak jadiannya yaa 😁

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`)
let menst = [orang, jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst },{quoted: Anjel}) 
}
break
case 'jodohku':{
if (!isGroup) return sendStickGroup()
let member = participants.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = (`Selamat Jodoh kamu sudah ditemukan🎉\n\nJodoh kamu adalah  @${jodoh.split('@')[0]}`)
let menst = [jodoh]
conn.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
 
 //keamanan
  case 'security': {
   if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
let pilihan = (`*Di bawah ini adalah menu keamanan untuk grub*

${gris}┈ ⋞ 〈 MANAJEMEN 〉 ⋟ ┈${gris}
➼ antibot 
➼ antiviewonce 
➼ readviewonce 
➼ welcome 
➼ adminevent 
➼ groupevent 
➼ antiforeign 
➼ antimedia 
➼ antiaudio 
➼ antivideo 
➼ antiimage 
➼ antidocument 
➼ antilocation 
➼ anticontact 
➼ antisticker 
➼ antipoll 
➼ antilink 
➼ antilinkgc 
➼ antipromotion 
➼ antivirtex 

${gris}┈ ⋞ 〈 MEDIA 〉 ⋟ ┈${gris}
➼ autoread
➼ unavailable
➼ autorecordtype
➼ autorecord
➼ autotype
➼ autobio
➼ autosticker
➼ autodownload
➼ autoblock
➼ onlygroup
➼ onlypc 
➼ onlyindia
➼ onlyindo

*❖ Contoh Penggunaan:* 
.antilinkgc on untuk mengaktifkan
.antilinkgc off untuk menonaktifkan`)
conn.relayMessage(m.chat,  {
      requestPaymentMessage: {
          noteMessage: {
              extendedTextMessage: {
                  text: pilihan }  }} }, {})}
        break
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  setReply(`${commad} is disabled`)
               }
               }
            break
     
 //—————「 GAME MENU 」—————//
 case 'limit':{


               let a = db.data.users[sender]
               let b = Ehztext(`${pushname}\nYour Limit ${a.limit}\n` )
               b += Ehztext(`Premium Status ${isPremium ? 'On' : 'Off' }\n`) 
               b += Ehztext(`Serial Code: ${gris}${a.serialNumber}${gris}`)
               setReply(b)
            }
            break
case 'caklontong':{
  if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 20000
	let poin = 3000
	let tiketcoin = 1500
	let id = m.chat
	if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = Ehztext(`
	${json.soal}
	
	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Balance: +${tiketcoin} Money
	`.trim())
	conn.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
let ntong = Ehztext(`*GAME CAK LONTONG*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
setReply(ntong)
	delete conn.caklontong[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].limit -= 1
	break
        case 'tebaklirik':{

            if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 10000
            let poin = 1000
            let id = m.chat
            if (id in conn.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())
            conn.tebaklirik[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tebaklirik[id]) 
        user.balance -= 200
        let lrik = Ehztext(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        setReply(lrik)
            delete conn.tebaklirik[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break

        case 'siapaaku':{
          if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 10000
            let poin = 1000
            let id = m.chat
            if (id in conn.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())
            conn.siapaaku[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.siapaaku[id]) 
        user.balance -= 200
        let spakah = Ehztext(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        setReply(spakah)
            delete conn.siapaaku[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break
        case 'susunkata':{
              if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return sendStickGroup()
            let timeout = 20000
            let poin = 1000
            let id = m.chat
            if (id in conn.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`
            Soal: ${json.soal}
            Tipe: ${json.tipe}

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())
            conn.susunkata[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            user.balance -= 200
        let sunkata = Ehztext(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        setReply(sunkata)
            delete conn.susunkata[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break
        case 'tekateki':{
          if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return setReply(mess.only.group)
            let timeout = 10000
            let poin = 1000
            let id = m.chat
            if (id in conn.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`
            Soal: ${json.soal}


            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money 💸
            `.trim())
            conn.tekateki[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tekateki[id]) 
        user.balance -= 200
        let tekaki = Ehztext(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        setReply(tekaki)
            delete conn.tekateki[id]
             }, timeout)
             ]
            }
        db.data.users[sender].limit -= 1
            break
        /*case 'math': case 'match': case 'mtk': case 'matematika': {
                let modes = {
              noob: [-3, 3, -3, 3, '+-', 10000, 500],
              easy: [-10, 10, -10, 10, '*+-', 15000, 600],
              medium: [-40, 40, -20, 20, '*+-', 15000, 730],
              hard: [-100, 100, -70, 70, '*+-', 20000, 850],
              extreme: [-999999, 999999, -999999, 999999, '*', 20000, 1000],
              impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*', 30000, 2500],
              impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 35000, 3000]
            }


            let operators = {
              '+': '+',
              '-': '-',
              '*': '×',
              '/': '÷'
            }

            function genMath(mode) {
              let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
              let a = randomInt(a1, a2)
              let b = randomInt(b1, b2)
              let op = pickRandom([...ops])
              let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
              if (op == '/') [a, result] = [result, a]
              return {
                str: `${a} ${operators[op]} ${b}`,
                mode,
                time,
                bonus,
                result
              }
            }

            function randomInt(from, to) {
              if (from > to) [from, to] = [to, from]
              from = Math.floor(from)
              to = Math.floor(to)
              return Math.floor((to - from) * Math.random() + from)
            }
              let tematik = Ehztext( `*MATEMATIKA*

        ┌─〔 Mode 〕
        ├ ${Object.keys(modes).join('\n├ ')}
        └────    
            contoh:
            ${prefix}math hard
            `)
              let mode = args[0].toLowerCase()
              if (!(mode in modes)) return setReply( `
        ┌─〔 Mode 〕
        ├ ${Object.keys(modes).join('\n├ ')}
        └────    
            contoh:
            ${prefix}math hard
            `)
            if (!q) return setReply(tematik)
              let id = from
              if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
              let math2 = genMath(mode)
              conn.math[id] = [
                 await setReply(`*MATEMATIKA*\n\nBerapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp ${math2.bonus} `),
                math2, 4,
                setTimeout(async () => {
                    if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
               delete conn.math[id]
                }, math2.time)
              ]
            }
            break*/ 	
case 'mtk': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) m.reply(`Masih ada soal belum terjawab di chat ini!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return setReply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh Penggunaan: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                conn.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    setReply("Waktu habis!\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
        case 'tebakkata':{
        if (!isGroup) return sendStickGroup()
        if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
        let poin = 1000
        let timeout = 10000
        let id = m.chat

        if (id in conn.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
        let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
        let json = src[Math.floor(Math.random() * src.length)]
        let caption = Ehztext(`*Soal :* ${json.soal}

        Timeout *${(timeout / 1000).toFixed(2)} detik*
        Exp : +999
        Bonus : +${poin} Saldo`.trim())
        conn.tebakkata[id] = [
        await setReply(caption),
        json, poin,
        setTimeout(() => {
        if (conn.tebakkata[id]) 
        setReply(`Waktu game telah habis
        Jawabannya adalah : ${json.jawaban}`)
        delete conn.tebakkata[id]
         }, timeout)
         ]
        }
        db.data.users[sender].limit -= 1
        break
         case 'tebakkimia':{
            if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        if (!isGroup) return onlyGroup()
            let timeout = 10000
            let poin = 1000
            let id = m.chat
            if (id in conn.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
            let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
            let json = src[Math.floor(Math.random() * src.length)]
            let caption = Ehztext(`*TEBAK KIMIA*
            Unsur: ${json.unsur}
            Soal: Singkatan atau lambang di atas adalah...

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())
            conn.tebakkimia[id] = [
            await setReply(caption),
            json, poin,
            setTimeout(() => {
            if (conn.tebakkimia[id]) 
        user.balance -= 200
       let kimia = Ehztext(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
       m.reply(kimia)
            delete conn.tebakkimia[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break
          case 'tebakgambar':{
            if (!isPremium && global.db.data.users[sender].limit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
            if (!isGroup) return setReply(mess.only.group)
            let timeout = 10000
            let poin = 2000
            let id = m.chat
            if (id in conn.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
          async function tebakgambar() {
          let random_level = Math.floor(Math.random() * 136)
          let random_eq = Math.floor(Math.random() * 20)
          return axios.get(`https://jawabantebakgambar.net/level-${random_level}/`).then((val) => {
            let url = "https://jawabantebakgambar.net"
            const $ = cheerio.load(val.data)
            let href = $("ul > * > a").eq(random_eq)
            let jwbn = href.find("span").text()
            let img = href.find("img").attr("data-src")
            let src = url + img
            let petunjuk = jwbn.replace(/[AIUEO|aiueo]/g, "_")
            return {
              img: src,
              jawaban: jwbn,
              petunjuk,
            }
          })
            }
          let tos = await tebakgambar ()
          console.log(tos)
            let caption = Ehztext(`*GAME TEBAK GAMBAR*

            Waktu: *${(timeout / 1000).toFixed(2)} detik*
            Hadiah: ${poin} Money
            `.trim())

            conn.tebakgambar[id] = [
            await conn.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: fkontak}),
            tos, poin,
            setTimeout(() => {
            if (conn.tebakgambar[id]) 
        user.balance -= 200
        let tbkgmbar = Ehztext(`*GAME TEBAK GAMBAR*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${tos.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
        m.reply(tbkgmbar)
            delete conn.tebakgambar[id]
             }, timeout)
             ]
            }
            db.data.users[sender].limit -= 1
            break
case 'suitpvp': case 'suit': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return setReply (mess.only.group)
            conn.suit = conn.suit ? conn.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${nomerOwner}`, m.chat, { mentions: [nomerOwner + '@s.whatsapp.net'] })
            if (Object.values(conn.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            conn.suit[id] = {
            chat: await conn.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (conn.suit[id]) conn.sendText(m.chat, `_Waktu suit habis_`, m)
            delete conn.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].limit -= 1
            break  
 
//========✓============
            case 'react': {
                if (!isOwner) return sendStickOwner()
                let reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
            break
  
            case 'antiaudio':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'poll': {
	if (!isOwner) return sendStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await setReply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|ehanz, ganteng,kan...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await conn.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  setReply(`${command} is disabled`)
               }
               }
            break
         case 'read':   case 'readviewonce': {
	if (!m.quoted) return setReply(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
            case 'antiviewonce':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antispam':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antispam = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antispam = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  setReply(`${command} is disabled`)
               }
               }
            break
            case 'antilink': {
               if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'antipromotion': {
               if (!m.isGroup) return sendStickGroup()
if (!isBotAdmins) return sendStickBadmin()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipromotion = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipromotion = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'welcome':
            case 'left': {
               if (!m.isGroup) return sendStickGroup()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return sendStickGroup()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  adminevent = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  setReply(`${command} is disabled`)
               }
            }
            break
            case 'groupevent': {
               if (!m.isGroup) return sendStickGroup()
if (!isAdmins && !isOwner) return sendStickAdmin()
               if (args.length < 1) return setReply('on/off?')
               if (args[0] === 'on') {
                  groupevent = true
                  setReply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  setReply(`${command} is disabled`)
               }
            }
            break

 //MENU STIKER===================>>
case 'sticker': case 'stiker': {
if (!quoted) return setReply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packName, author: global.authorName })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return setReply('Kirim/Balas Gambar/Video/Gif Dengan Teks ${prefix+command}\n Durasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packName, author: global.authorName })
} else {
setReply(`Kirim/Balas Gambar/Video/Gif Dengan Teks ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
            case 'take':
case 'swm': 
case 'wm':{
if (!isGroup) return sendStickGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)

if (!q) return setReply("Reply sticker dengan format pesan, Punya|Shin")
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${wm}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
//await xm.sendMessage(from,{sticker: nah},{quoted: m})
conn.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${wm}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `https://wa.me/${nomerOwner}`
}}, sticker: nah }, { quoted: m })   
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
db.data.users[sender].limit -= 1 
}
break
 case 'smeme': case 'stickermeme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!q) return m.reply(`Usage: ${prefix + command} text1|text2`)
    m.reply(mess.wait)
let { TelegraPh } = require('./lib/uploader')

let atas = q.split('|')[0] ? q.split('|')[0] : '-'
let bawah = q.split('|')[1] ? q.split('|')[1] : '-'
let mee = await conn.downloadAndSaveMediaMessage(quoted)

mem = await TelegraPh(mee)

let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`

 memek = await conn.sendImageAsSticker(m.chat, meme, m, { packname: global.packName, author: global.authorName })


} else {
setReply(`Send/reply image with caption ${prefix + command} text1|text2`)
}
}

break
 case 'emojimix': {
                let [emoji1, emoji2] = q.split`+`
                if (!emoji1) return m.reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return m.reply(`Example : ${prefix + command} 😅+🤔`)
                await m.reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packName,
                        author: global.authorName,
                        categories: res.tags
                    })
                }
            }
            break
 case 'gura':
case 'gurastick':{
  m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
let encmedia = await conn.sendImageAsSticker(from, wifegerakx, m, { packname: global.packName, author: global.authorName, })

}
break

case "donasi":
case "donate": {
    if (!m.isGroup) return sendStickGroup();
    await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 

    let total = 0;
    let getGroups = await conn.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
    let usergc = groups.map((v) => v.id);
    let time = ms(5000 * Number(usergc.length));

    // Prepare the image
    let jago = await prepareWAMessageMedia({ image: await fs.readFileSync("./src/donasi/bankjago_thumb.jpg") }, { upload: conn.waUploadToServer });
    let brimo = await prepareWAMessageMedia({ image: await fs.readFileSync("./src/donasi/brimo_thumb.jpg") }, { upload: conn.waUploadToServer });
    let dana = await prepareWAMessageMedia({ image: await fs.readFileSync("./src/donasi/qr-dana-shin-pay.png") }, { upload: conn.waUploadToServer });
    let saweria = await prepareWAMessageMedia({ image: await fs.readFileSync("./src/donasi/saweria-thumb.png") }, { upload: conn.waUploadToServer });

    // Define the carousel message content
    const msgii = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "Terima kasih king 🙇‍♀️\n"
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `✠ 𝐁𝐚𝐧𝐤 𝐉𝐚𝐠𝐨 ✠

Nomor rekening bank jago tertera pada gambar di atas\n\nApabila gambar tidak tidak muncul, berikut nomor rekening saya, A.N\n\nRahman Hanafi\n105914614838\n\nTerima kasih 😊`,
                                    hasMediaAttachment: true,
                                    ...jago
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_copy",
                                        buttonParamsJson: JSON.stringify({
                                          "display_text": "Salin No. Rekening",
                                          "copy_code": "105914614838"
                                      })
                                    }]
                                })
                            },
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `✠ 𝐁𝐚𝐧𝐤 𝐁𝐑𝐈 ✠
                                    
Silakan scan kode qr di atas\n\nApabila gambar tidak tidak muncul, berikut nomor rekening saya, A.N\n\nRahman Hanafi\n011201108655500\n\nTerima kasih 😊`,
                                    hasMediaAttachment: true,
                                    ...brimo
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_copy",
                                        buttonParamsJson: JSON.stringify({
                                          "display_text": "Salin No. Rekening",
                                          "copy_code": "011201108655500"
                                      })
                                    }]
                                })
                            },
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `✠ 𝐃𝐚𝐧𝐚 ✠

Silakan scan kode qr di atas\n\nApabila gambar tidak tidak muncul, berikut nomor dana saya, A.N\n\nhaishin\n(62)821214692838\n\n terima kasih 😊`,
                                    hasMediaAttachment: true,
                                    ...dana
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_copy",
                                        buttonParamsJson: JSON.stringify({
                                          "display_text": "Salin No. Telepon",
                                          "copy_code": "6282114692838"
                                      })
                                    }]
                                })
                            },
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `✠ 𝐒𝐚𝐰𝐞𝐫𝐢𝐚 ✠

Silakan tekan tautan berikut ini, dan isikan berapa yang ingin anda donasikan\n\nhttps://saweria.co/Shinrinyoku \n\nTerima kasih 😊`,
                                    hasMediaAttachment: true,
                                    ...saweria
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{\"display_text\":\"Saweria\",\"url\":\"https://saweria.co/Shinrinyoku\",\"merchant_url\":\"https://saweria.co/Shinrinyoku\"}`
                                    }]
                                })
                            },
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await conn.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });

    break;
}

  // MENU RANDOM================>>
 case 'script' :
    setReply(`_File sedang dikirim..._`)
   await conn.sendMessage(from, { document: fs.readFileSync('./temp/nythzero-gnu.zip'),fileName: 'nythzero-gnu.zip', mimetype: 'application/zip'  },{ quoted: m})
await sleep(2000)
//conn.sendMessage(m.chat, { image: { url:"https://telegra.ph/file/b46e7efa47051b328cbd3.jpg"}, caption: '_Kalian Bisa pake apk uptimerobot Biar Bot Bisa On 24 Jam_'}, { quoted: m})
break
case 'bcmem': case 'bcmember': {
    if (!isGroup) return m.reply(mess.only.group)
    if (!isOwner) return m.reply(mess.owner);
    if (!q) return m.reply(`⚠ Anda belum memberikan saya pesan broadcastnya!\n\nContoh Penggunaan: ${prefix+command} Halo Dunia`);

      let mem = [];
      participants.map( i => mem.push(i.id) )
     
      for (let yoi of mem) {
        if (yoi.includes('.net')) {
            await sleep (6000)
          conn.sendMessage(yoi, {text: `${q}`});
        }
      }
      m.reply(`✅ Berhasil Mengirimkan Broadcast ke ${mem.length} member`);
      }
      break;
case 'getcontact': case 'getcon': {
if (!m.isGroup) return sendStickGroup()
if (!(isGroupAdmins || isOwner)) return sendStickAdmin()
let xeonbigpp = await conn.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
conn.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
}
break
case'contag': {
 const froms = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false; 
 if (froms) {
 if (db && db.users && db.users.hasOwnProperty(froms)) {
 sendContact(db.users[froms].name, froms, m);
 } else {
 const name = await conn.getName(froms);
 sendContact(name, froms, m);
 }
 } else {
 m.reply('Tag pengguna yang ingin dikirimkan kontaknya!');
 } 
 function sendContact(name, jid, m) {
 let sngContact = {
 displayName: `ini namanya ${name}`,
 contacts: [{
 displayName: name,
 vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${jid.split('@')[0]}:${jid.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
 }]
 };
 
 conn.sendMessage(m.chat, { contacts: sngContact, mentions: [jid] }, { ephemeralExpiration: 86400 });
 }
}
break
case 'runtime': {
            	let lowq = `⏰ *Bot Aktif Selama :*\n*${runtime(process.uptime())}*`
                setReply(lowq)
            	}
            break
case 'ping': case 'botstatus': case 'statusbot': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
              let  neww = performance.now()
              let  oldd = performance.now()
               let respon = Ehztext(`
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim())
	conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
	
	break


 // MENU DOWNLOAD =================>>
  
    
 case 'play': {
if (!isGroup) return sendStickGroup()
 if (!q) return setReply(`Contoh: ${prefix + command} Drunk Text`)
sendStickAwait()
                let search = await yts(q)
                let linknya = search.all[0].url
                let bodytextnya = `➸ Judul: *${search.all[0].title}*\n➸ Penonton: *${search.all[0].views}*\n➸ Durasi: *${search.all[0].timestamp}*\n➸ Diupload: *${search.all[0].ago}*\n➸ Tautan: *${linknya}*`
            
                
            let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: wm
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: conn.waUploadToServer})), 
                  title: botName,
                  gifPlayback: true,
                  subtitle: ownerName,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎦","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎵","id":"${prefix}ytmp3 ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                        serverMessageId: 100,
                        newsletterName
                }
                }
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
            }
            break
case 'ytmp3': case 'youtubemp3': {
if (!isGroup) return sendStickGroup()
if (!q) return setReply(`Contoh: ${prefix + command} link`)
await sendStickAwait()
downloadMp3(q)
}
break
case 'ytreels': case 'ytmp4':{
if (!isGroup) return sendStickGroup()
if (!q) return setReply(mess.query)
await setReply('scraping')
downloadMp4(q)
}
break
case 'tt':
case 'tiktok': {
if (!q) return m.reply( `Contoh: ${prefix + command} link`)
if (!q.includes('tiktok')) return setReply(`Link Invalid!!`)
 sendStickAwait()
require('./lib/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { caption: mess.succes, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'ttmp3':
case 'tiktokaudio':{
if (!q) return setReply( `Contoh: ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
setReply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
const titokmp3 = {url:data.audio}
conn.sendMessage(m.chat, { audio: titokmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case 'ig': {

	  if (!q) return m.reply(`Anda perlu memberikan URL video, postingan, reel, gambar Instagram apa pun`)

  let res

  try {

    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${q}`)

  } catch (error) {

    return m.reply(`An error occurred: ${error.message}`)

  }

  let api_response = await res.json()

  if (!api_response || !api_response.data) {

    return m.reply(`Tidak ada video atau gambar yang ditemukan atau Respons tidak valid dari API.`)

  }

  const mediaArray = api_response.data;

  for (const mediaData of mediaArray) {

    const mediaType = mediaData.type

    const mediaURL = mediaData.url_download

    let cap = `Mempersembahkan ${mediaType.toUpperCase()}`

    if (mediaType === 'video') {

      conn.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})

    } else if (mediaType === 'image') {

      conn.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})

    }

  }

}

break
case 'mediafire': {
  	if (!args[0]) return m.reply(`Kirimkan tautan mediafire ke dalam perintah`)
    if (!args[0].match(/mediafire/gi)) return setReply(`File tidak ditemukan`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    m.reply(mess.wait)
   conn.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })

    }
    break
case'ttslide': case 'tiktokslide':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh:_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
await conn.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await conn.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await conn.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break

// MENU CONVERT ===============>>
case 'kodebahasa':{
	let LANGUAGES = (`
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesia
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`)
	setReply(LANGUAGES)
	}
break

case 'tr':
case 'translate':{
    //if (!isGroup) return sendStickGroup()
    let translate = require('translate-google-api')
    let defaultLang = 'en'
    let tld = 'cn'
    let toks = (`
*Perintah Alih Bahasa:*
${prefix + command} <Bahasa> [Pesan]\n
*Contoh Penggunaan:*
${prefix + command} en aku sayang kamu\n
Perintah ini akan mengubah kalimat \`Aku sayang kamu\` ke bahasa inggris (en) menjadi \`I love you\`.

Kirimkan perintah \`kodebahasa\` untuk mengetahui bahasa apa saja yang didukung dalam fitur ini.
`.trim())

    let lang = args[0]
    let text = args.slice(1).join(' ')

    if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
    }
    
    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text
    }

    // Jika teks kosong, tampilkan petunjuk
    if (!text) {
      return setReply(toks)
    }

    let result
    try {
    result = await translate(`${text}`, {to: lang})
    } catch (e) {
    result = await translate(`${text}`, {to: defaultLang,})
    setReply(toks)
    } finally {
    setReply(result[0])
    }
  }
    break

case'toptv':{
try {
  if (!isGroup) return sendStickGroup()
if (m.message.extendedTextMessage) 
{ var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
    conn.relayMessage(m.chat, dataVideo, {})} } 
catch (error) { m.reply(error); } } 
break
 case 'tts':
	const gtts = require( 'node-gtts')
	function tts(text, lang = 'id') {
	// console.log(lang, text)
	return new Promise((resolve, reject) => {
	try {
	let tts = gtts(lang)
	let filePath =  (1 * new Date) + '.mp3'
	tts.save(filePath, text, () => {
	resolve(fs.readFileSync(filePath))
	fs.unlinkSync(filePath)
	})
	} catch (e) { reject(e) }
	})
	}
	
	const defaultLang = 'id'
	
	
	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && m.quoted?.text) text = m.quoted.text
	
	let ras
	try { ras = await tts(text, lang) }
	catch (e) {
	m.reply(e + '')
	text = args.join(' ')
	if (!text) setReply( `Use example ${prefix}${command} en hello world ketik .kodebahasa untuk list bahasa`)
	ras = await tts(text, defaultLang)
	} finally {
	if (ras) conn.sendMedia2(from, ras, m, {caption: "Nih"})
	//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}
	
	break
  case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return m.reply(`Balas stiker dengan menambahkan pesan *${prefix + command}*`)
                await setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return setReply(`Balas stiker dengan menambahkan pesan *${prefix + command}*`)
                await setReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Balas Video yang ingin dijadikan Audio dengan disertai pesan ${prefix + command}`)
                await setReply(mess.wait)
                let media = await conn.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                conn.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Balas Video/Audio yang ingin dijadikan MP3 dengan disertai pesan ${prefix + command}`)
                await setReply(mess.wait)
                let media = await conn.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                conn.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `menhara.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Kirim/Balas Video/Audio yang ingin dijadikan VN dengan disertai pesan ${prefix + command}`)
                await sendStickAwait()
                let media = await conn.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                conn.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
    case 'terbalik':{
if (!isGroup) return sendStickGroup()
	if (/audio/.test(mime)){ 
	setReply(mess.wait)
	let media3 = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await conn.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
 case 'volaudio': {
if (!args.join(" ")) return setReply(`Example: ${prefix + command} 10`)
let media = await conn.downloadAndSaveMediaMessage(quoted, "volume")
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('kelebihan')
let jadie = fs.readFileSync(rname)
conn.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return setReply(`Example: ${prefix + command} 10`)
    m.reply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted, "volume")
let rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(mess.error)
let jadie = fs.readFileSync(rname)
conn.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await m.reply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else setReply(`Balas audio yang ingin Anda convert dengan menambahkan pesan *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'togif': {
                if (!/webp/.test(mime)) return m.reply(`Balas stiker dengan menambahkan pesan *${prefix + command}*`)
                await m.reply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            
     case 'toonce':
            case 'toviewonce': {
                if (!quoted) return setReply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                   let anuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.succes,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                  let  anuanuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.succes,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                let   bebasap = await conn.downloadAndSaveMediaMessage(quoted)
                   conn.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
 // MENU TOOLS ===================>>
 case "get":
case "fetch":
  if (!q) {
    return m.reply(`Contoh:\n${prefix + command} https://telegra.ph/file/858bebe9d61dba5430881.jpg'`);
  }
  if (!/^https?:\/\//.test(q)) {
    return m.reply("URL is Invalid!");
  }
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  if (body.match(/(mp4)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(mp3)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else if (body.match(/(png|jpg|jpeg)/gi)) {
    fetch(`${q}`, requestOptions)
      .then((res) => ehz.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
      .catch((error) => m.reply("Error", error));
  } else {
    fetch(`${q}`, requestOptions)
      .then((response) => response.text())
      .then((result) => m.reply(result))
      .catch((error) => m.reply("Error", error));
  }
  break;
 case 'ss': case 'ssweb': {
if (!q) return m.reply(`Example ${prefix+command} link`)
await m.reply(mess.wait)
let krt = await scp2.ssweb(q)
conn.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'remini': case 'hdr': case 'hd': {
			if (!quoted) return m.reply(`Silakan mengirimkan foto/gambar anda!`)
			if (!/image/.test(mime)) return m.reply(`Kirimkan foto/gambar dengan caption! ${prefix + command}`)
			await m.reply(mess.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			conn.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
case 'google': {
if (!q) return m.reply(`Example : ${prefix + command} ${botName}`)

let google = require('google-it')
google({'query': q}).then(res => {
let teks = Ehztext(`${gris}Pencarian dari google${gris}: ${q}\n\n`)
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n─────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'tourl': {
                await sendStickAwait()
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    setReply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    setReply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
 case 'pinterest': case 'pin': {
  if (!q) return setReply(mess.query);
  //try {
  await setReply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: conn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${q}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${q}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let pus of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Gambar ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil',
        hasMediaAttachment: true,
        imageMessage: await createImage(pus)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"url","Klik disini":"${pus}","merchant_url":"${pus}"}`
          }
        ]
      })
    });
  }

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: 'Hai\nDibawah ini Adalah hasil dari Pencarian Kamu'
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botName
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await conn.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  });
  
}
break
//MENU PHOTOOXY===============>>




  // MENU STORAGE ===============>>

 case 'addvideo':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama file videonya')
if (VideoMenhara.includes(q)) return setReply("Tidak dapat menambahkan video, karena nama tersebut sudah digunakan")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
VideoMenhara.push(q)
await fsx.copy(delb, `./media/video/${q}.mp4`)
fs.writeFileSync('./database/video.json', JSON.stringify(VideoMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama file videonya')
if (!VideoMenhara.includes(q)) return setReply("Video tersebut tidak dapat ditemukan")
let wanu = VideoMenhara.indexOf(q)
VideoMenhara.splice(wanu, 1)
fs.writeFileSync('./database/video.json', JSON.stringify(VideoMenhara))
fs.unlinkSync(`./media/video/${q}.mp4`)
setReply(`Success deleting video ${q}`)
}
break
case 'listvideo': {
  let teksoooo = '✠ 𝐊𝐮𝐫𝐚𝐬𝐢 𝐕𝐢𝐝𝐞𝐨 ✠\n';
  teksoooo += 'Dibawah adalah kurasi dari video yang ada di dalam database. Untuk melihat file yang diinginkan, kirimkan nama video tersebut\n\n';

  for (let x of VideoMenhara) {
      teksoooo += `➸ ${x}\n`;
  }

  teksoooo += `\n> © Nyth Zero - 2024`;

  // Send the message with renderLargerThumbnail
  conn.sendMessage(m.chat, {
      text: teksoooo,
      contextInfo: {
          "externalAdReply": {
              showAdAttribution: true,
              renderLargerThumbnail: true,
              title: `Catalyst Collective`,
              body: `Jumlah Video: ${VideoMenhara.length}`,
              mediaType: 1,
              thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', 
              sourceUrl: sgc 
          }
      }
  }, { quoted: m });

  break;
}

case 'addimage':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama gambarnya')
if (ImageMenhara.includes(q)) return setReply("Tidak dapat menambahkan gambar, karena nama tersebut sudah digunakan")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
ImageMenhara.push(q)
await fsx.copy(delb, `./media/image/${q}.jpg`)
fs.writeFileSync('./database/image.json', JSON.stringify(ImageMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama gambarnya')
if (!ImageMenhara.includes(q)) return setReply("Gambar tersebut tidak dapat ditemukan")
let wanu = ImageMenhara.indexOf(q)
ImageMenhara.splice(wanu, 1)
fs.writeFileSync('./database/image.json', JSON.stringify(ImageMenhara))
fs.unlinkSync(`./media/image/${q}.jpg`)
setReply(`Success deleting image ${q}`)
}
break

case 'listimage': {
  let teksoooo = '✠ 𝐊𝐮𝐫𝐚𝐬𝐢 𝐆𝐚𝐦𝐛𝐚𝐫 ✠\n';
  teksoooo += 'Dibawah adalah kurasi dari gambar yang ada di dalam database. Untuk melihat file yang diinginkan, kirimkan nama gambar tersebut\n\n';

  for (let x of ImageMenhara) {
      teksoooo += `➸ ${x}\n`;
  }

  teksoooo += `\n> © Nyth Zero - 2024`;

  // Send the message with renderLargerThumbnail
  conn.sendMessage(m.chat, {
      text: teksoooo,
      contextInfo: {
          "externalAdReply": {
              showAdAttribution: true,
              renderLargerThumbnail: true,
              title: `Catalyst Collective`,
              body: `Jumlah Gambar: ${ImageMenhara.length}`,
              mediaType: 1,
              thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // Change this URL to your own image if needed
              sourceUrl: sgc // Replace this with a custom URL if needed
          }
      }
  }, { quoted: m });

  break;
}

// add sticker
case 'addsticker':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama stikernya')
if (StickerMenhara.includes(q)) return setReply("Tidak dapat menambahkan stiker, karena nama tersebut sudah digunakan")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
StickerMenhara.push(q)
await fsx.copy(delb, `./media/sticker/${q}.webp`)
fs.writeFileSync('./database/sticker.json', JSON.stringify(StickerMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama stikernya')
if (!StickerMenhara.includes(q)) return setReply("Nama tersebut tidak dapat ditemukan")
let wanu = StickerMenhara.indexOf(q)
StickerMenhara.splice(wanu, 1)
fs.writeFileSync('./database/sticker.json', JSON.stringify(StickerMenhara))
fs.unlinkSync(`./media/sticker/${q}.webp`)
setReply(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerMenhara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Jumlah stiker: ${StickerMenhara.length}*`
setReply(teks)
}
break

case 'addmsg': {
                if (!m.quoted) return setReply('Balasan pesan yang ingin Anda simpan di database')
                if (!text) return setReply(`Contoh: ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return setReply(`'${text}'telah terdaftar dalam daftar pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
setReply(`Successfully added message in message list as '${text}'
    
Silakan akses menggunakan perintah ${prefix}getmsg ${text}

Lihat daftar pesan dengan perintah ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return setReply(`Contoh: ${prefix + command} file name\n\nLihat daftar pesan dengan perintah ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return setReply(`'${text}' Pesan tersebut tidak dapat ditemukan`)
                conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        setReply(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return setReply(`'${text}' Pesan tersebut tidak dapat ditemukan`)
		delete msgs[text.toLowerCase()]
setReply(`Successfully deleted '${text}' from the message list`)
            }
	    break

case 'addvn':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama file vn nya')
if (VnMenhara.includes(q)) return setReply("Tidak dapat menambahkan vn, karena nama tersebut sudah digunakan")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
VnMenhara.push(q)
await fsx.copy(delb, `./media/audio/${q}.mp3`)
fs.writeFileSync('./json/vn.json', JSON.stringify(VnMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama file vn nya')
if (!VnMenhara.includes(q)) return setReply("File tersebut tidak dapat ditemukan")
let wanu = VnMenhara.indexOf(q)
VnMenhara.splice(wanu, 1)
fs.writeFileSync('./json/vn.json', JSON.stringify(VnMenhara))
fs.unlinkSync(`./media/audio/${q}.mp3`)
setReply(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VnMenhara) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Jumlah VN: ${VnMenhara.length}*`
setReply(teks)
}
break
case 'addzip':{

if (args.length < 1) return setReply(`Anda belum memberikan saya nama file .zip nya`)
let teks = `${text}`
{
if (ZipMenhara.includes(teks)) return setReply("Tidak dapat menambahkan .zip, karena nama tersebut sudah digunakan")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
ZipMenhara.push(teks)
await fsx.copy(delb, `./media/zip/${teks}.zip`)
fs.writeFileSync('./json/zip.json', JSON.stringify(ZipMenhara))
fs.unlinkSync(delb)
setReply(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (args.length < 1) return setReply('Anda belum memberikan saya nama file .zip nya')
let teks = `${text}`
{
if (!ZipMenhara.includes(teks)) return setReply("File tersebut tidak dapat ditemukan")
let wanu = ZipMenhara.indexOf(teks)
ZipMenhara.splice(wanu, 1)
fs.writeFileSync('./json/zip.json', JSON.stringify(ZipMenhara))
fs.unlinkSync(`./media/zip/${teks}.zip`)
setReply(`Successfully deleted zip ${teks}`)
}
}
break

case 'listzip': {
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipMenhara) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipMenhara.length}*`
setReply(teksooooo)
}
break
case 'addapk':{

if (args.length < 1) return setReply('Anda belum memberikan saya nama file .apk nya')
let teks = `${text}`
{
if (ApkMenhara.includes(teks)) return setReply("Tidak dapat menambahkan .apk, karena nama tersebut sudah digunakan")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./media/apk/${teks}.apk`)
fs.writeFileSync('./json/apk.json', JSON.stringify(ApkMenhara))
fs.unlinkSync(delb)
setReply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{

if (args.length < 1) return setReply('Anda belum memberikan saya nama file .apk nya')
let teks = `${text}`
{
if (!ApkMenhara.includes(teks)) return setReply("File tersebut tidak dapat ditemukan")
let wanu = ApkMenhara.indexOf(teks)
ApkMenhara.splice(wanu, 1)
fs.writeFileSync('./json/apk.json', JSON.stringify(ApkMenhara))
fs.unlinkSync(`./media/apk/${teks}.apk`)
setReply(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkMenhara) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkMenhara.length}`
setReply(teksoooooo)
}
break

//add pdf
case 'addpdf': {

  // Ensure the user provides a name for the PDF file
  if (args.length < 1) return setReply('Anda belum memberikan saya nama file .pdf nya');

  let pdfName = args.join(' '); // Join arguments to get the full name of the PDF

  // Check if the PDF name already exists in DocMenhara
  if (DocMenhara.includes(pdfName)) return setReply("Tidak dapat menambahkan .pdf, karena nama tersebut sudah digunakan");

  try {
      // Ensure there is a quoted message with a PDF attached
      if (!quoted || !quoted.message || !quoted.message.documentMessage || quoted.message.documentMessage.mimetype !== 'application/pdf') {
          return setReply('Harap kutip pesan yang berisi file PDF valid untuk ditambahkan.');
      }

      // Download the PDF file from the quoted message
      const savedFilePath = await conn.downloadAndSaveMediaMessage(quoted, `./media/doc/${pdfName}.pdf`);

      // Add the new PDF name to the DocMenhara list
      DocMenhara.push(pdfName);

      // Save the updated DocMenhara list to the JSON file
      fs.writeFileSync('./json/doc.json', JSON.stringify(DocMenhara));

      // Send confirmation message
      setReply(`Berhasil menambahkan PDF dengan nama *${pdfName}*\nUntuk melihat daftar PDF, ketik ${prefix}listpdf`);
  } catch (err) {
      console.error(err); // Log the error for debugging
      setReply("Terjadi kesalahan saat menambahkan PDF. Pastikan file yang dikutip adalah PDF valid.");
  }
}
break;



case 'delpdf': {
  if (!isOwner) return sendStickOwner(); // Only the owner can delete PDF files

  // Check if the PDF name is provided
  if (args.length < 1) return setReply('🔴 Error! Anda belum memberikan saya nama pdf-nya');

  let teks = args.join(' '); // Get the name of the PDF file to delete

  // Check if the file exists in the list
  if (!DocMenhara.includes(teks)) return setReply("File tersebut tidak dapat ditemukan");

  try {
      // Remove the PDF from the DocMenhara list
      let wanu = DocMenhara.indexOf(teks);
      DocMenhara.splice(wanu, 1);

      // Save the updated list to the JSON file
      fs.writeFileSync('./json/doc.json', JSON.stringify(DocMenhara));

      // Delete the actual PDF file from the media/doc directory
      fs.unlinkSync(`./media/doc/${teks}.pdf`);

      // Send a confirmation message
      setReply(`Successfully deleted PDF ${teks}`);
  } catch (err) {
      console.error(err); // Log the error
      setReply("An error occurred while deleting the PDF.");
  }
}
break;

case 'listpdf': {
  let teksoooo = '✠ 𝐊𝐮𝐫𝐚𝐬𝐢 𝐏𝐃𝐅 ✠\n';
  teksoooo += 'Dibawah adalah kurasi dari file pdf yang ada di dalam database. Untuk melihat file yang diinginkan, kirimkan nama file pdf tersebut\n\n';

  // Loop through the DocMenhara array and list the PDF files
  for (let x of DocMenhara) {
      teksoooo += `➸ ${x}\n`;
  }

  teksoooo += `\n> © Nyth Zero - 2024`;

  // Send the message with renderLargerThumbnail
  conn.sendMessage(m.chat, {
      text: teksoooo,
      contextInfo: {
          "externalAdReply": {
              showAdAttribution: true,
              renderLargerThumbnail: true,
              title: `Catalyst Collective`,
              body: `Jumlah PDF: ${DocMenhara.length}`,
              mediaType: 1,
              thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // Change this URL to your own image if needed
              sourceUrl: sgc // Replace this with a custom URL if needed
          }
      }
  }, { quoted: m });

  break;
}



 // MENU SETTINGS==============>>
 case 'setppbot':
                if (!isOwner) return sendStickOwner()
                if (!quoted) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await conn.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.succes)
                } else {
                    var memeg = await conn.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    m.reply(mess.succes)
                }
                break
 case 'setnamebot':
	if (!isOwner) return m.reply(mess.only.owner)
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
case 'setbio':
{
if (!isOwner ) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} sedang berak`)
await conn.updateProfileStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
  case 'deleteppbot': case 'delppbot': {
if (!isOwner) return XeonStickOwner()
    await conn.removeProfilePicture(conn.user.id)
    m.reply(`Berhasil menghapus foto profil bot`)
    }
    break
  case 'delsampah':{
 if (!isOwner) return m.reply(mess.owner);
 let directoryPath = './'; // Ganti dengan path yang sesuai di dalam kontainer
 fs.readdir(directoryPath, async function (err, files) {
 if (err) {
 return m.reply('Tidak dapat memindai direktori: ' + err);
 } 
 let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")|| item.endsWith("zip")|| item.endsWith("tar.gz"));
 var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
 if (filteredArray.length == 0) return m.reply(teks);
 for (let i = 0; i < filteredArray.length; i++) {
 console.log("Nama file:", filteredArray[i]); // Tambahkan log untuk memeriksa nama file
 let stats = fs.statSync(path.join(directoryPath, filteredArray[i]));
 console.log("Stats:", stats); // Tambahkan log untuk memeriksa informasi stats
 let fileSizeInBytes = stats.size;
 let fileSize;
 if (fileSizeInBytes < 1024) {
 fileSize = `${fileSizeInBytes} Bytes`;
 } else if (fileSizeInBytes < 1024 * 1024) {
 fileSize = `${(fileSizeInBytes / 1024).toFixed(2)} KB`;
 } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
 fileSize = `${(fileSizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
 } else {
 fileSize = `${(fileSizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
 }
 teks += `${i+1}. ${filteredArray[i]} - ${fileSize}\n`;
 }
 setReply(teks);
 await sleep(2000);
 setReply("Menghapus file sampah...");
 await Promise.all(filteredArray.map(async function (file) {
 try {
 await fs.unlinkSync(path.join(directoryPath, file));
 } catch (err) {
 console.error(err);
 }
 }));
 await sleep(2000);
 setReply("Berhasil menghapus semua sampah");
 });
}
break
 case 'restart':
                if (!isOwner) return sendStickOwner()
                setReply(`Proses memulai ulang akan selesai beberapa saat lagi...`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    setReply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    setReply(`Successfully changed autoread to ${q}`)
                }
            break
            case 'unavailable':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    setReply(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    setReply(`Successfully changed unavailable to ${q}`)
                }
            break
            case 'autorecordtype':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    setReply(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    setReply(`Successfully changed Auto-RecordingTyping to ${q}`)
                }
            break
            case 'autorecord':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    setReply(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    setReply(`Successfully changed Auto-Recording to ${q}`)
                }
            break
            case 'autotype':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    setReply(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    setReply(`Successfully changed Auto-Typing to ${q}`)
                }
            break
            case 'autobio':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    setReply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    setReply(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autosticker': case 'autostickergc':
if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    setReply(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    setReply(`Successfully Changed Auto Sticker To ${q}`)
                }
            break
            case 'autodownload': case 'autodl':
if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autodownload = true
                    setReply(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autodownload = false
                    setReply(`Successfully Changed Auto Download To ${q}`)
                }
            break
            case 'autoblock':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    setReply(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    setReply(`Successfully Changed Auto-Block To ${q}`)
                }
            break
            case 'onlygroup':
            case 'onlygc':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    setReply(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    setReply(`Successfully Changed Onlygroup To ${q}`)
                }
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    setReply(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    setReply(`Successfully Changed Only-Pc To ${q}`)
                }
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    setReply(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    setReply(`Successfully Changed Only-Indian To ${q}`)
                }
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    setReply(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    setReply(`Successfully Changed Only-Indonesian To ${q}`)
                }
            break
            case 'self': {
                if (!isOwner) return sendStickOwner()
                conn.public = false
                setReply('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!isOwner) return sendStickOwner()
                conn.public = true
                setReply('*Successful in Changing To Public Usage*')
            }
            break

  // TUGAS

case 'addtugas':
    if (!isGroupAdmins) return sendStickAdmin();
    if (!m.isGroup) return sendStickGroup();
    
    await conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key }});
    
    // Parse the courseId and task description
    const args1 = q.split("@")[0]; // courseId (e.g., 007)
    const args2 = q.split("@")[1]; // task description (e.g., Membuat makalah)

    if (!q.includes("@")) return setReply(`*Teknis Penggunaan:* ${prefix+command} ID Matkul@Instriksi`);
    
    // Check if courseId exists in dbjadwal.json
    const courseData = dbjadwal.courses.find(course => course.courseId === args1);
    if (!courseData) {
        return setReply(`ID Mata kuliah *${args1}* tidak ditemukan di database jadwal.`);
    }
    
    const courseName = courseData.courseName;

    // Get all tasks related to the current courseId from db_kurasi_tugas
    const existingTasks = db_kurasi_tugas.filter(task => task.key.endsWith(args1));

    // Get the current task count and increment it for the new task ID
    const taskCount = existingTasks.length + 1;  // Increment task count for this courseId
    
    // Generate the new task ID (e.g., 01007 for first task of course 007, 02007 for second)
    const newTaskId = taskCount.toString().padStart(2, '0') + args1;
    
    // Add the new task to db_kurasi_tugas
    db_kurasi_tugas.push({
        id: m.chat,  // The group ID where the task is added
        key: newTaskId,
        response: args2,
        isImage: false,
        image_url: '-'  // No image for this task
    });

    // Save the updated task list back to the file (optional, if you persist it)
    fs.writeFileSync('./src/store/dbtugassmt3.json', JSON.stringify(db_kurasi_tugas, null, 2));
    
    // Send a confirmation message
    setReply(`Tugas mata kuliah *${courseName}* dengan ID *${newTaskId}* telah berhasil ditambahkan ke dalam database.`);
    
    break;

    // Remove Tugas

    case 'rmtugas': {
      if (!isGroupAdmins) return sendStickAdmin();
      if (!m.isGroup) return sendStickGroup();
  
      await conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  
      // Check if there are any tasks in the database
      if (db_kurasi_tugas.length === 0) return setReply(`Saat ini, tidak ada tugas di dalam database`);
      
      // Validate the task name (ID)
      if (!q) return setReply(`*Teknis Penggunaan:* ${prefix + command} ID tugas`);
      
      // Check if the task exists
      const taskIndex = db_kurasi_tugas.findIndex(task => task.key === q);
      if (taskIndex === -1) return setReply(`Tugas dengan ID *${q}* tidak ada dalam database!`);
      
      // Remove the task from the array
      db_kurasi_tugas.splice(taskIndex, 1);
  
      // Save the updated task list back to the file
      fs.writeFileSync('./src/store/dbtugassmt3.json', JSON.stringify(db_kurasi_tugas, null, 2));
  
      // Confirmation message
      setReply(`Tugas *${q}* telah berhasil dihapus dalam database!`);
  }
  break;
  

case 'listtugas': case 'listtg': {
    let teks = '*✠ 𝐊𝐮𝐫𝐚𝐬𝐢 𝐓𝐮𝐠𝐚𝐬 𝐒𝐌𝐓 𝟑 ✠* \n\n';

    let db_kurasi_tugas = JSON.parse(fs.readFileSync('./src/store/dbtugassmt3.json', 'utf8'));

    // Check if there are no tasks in the database
    if (db_kurasi_tugas.length === 0) {
        teks += 'Santai Kawan, saat ini tidak ada tugas yang aktif 😁\n';
    } else {
        // Add the instruction if there are tasks
        teks += '> Untuk melihat detail tiap tugas kirimkan *ID-nya* saja, contoh: _01033_\n\n';

        // Loop through all tasks in db_kurasi_tugas
        for (let x of db_kurasi_tugas) {
            // Extract the courseId from the task key (last 3 characters)
            const courseId = x.key.slice(-3);
            
            // Find the courseName from dbjadwal.json using the courseId
            const course = dbjadwal.courses.find(course => course.courseId === courseId);
            const courseName = course ? course.courseName : 'Unknown Course'; // Default if not found

            // Add both task key and course name to the output text
            teks += `➸ ID: ${x.key} | ${courseName}\n`;
        }
    }

    // Send the message
    conn.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
            "externalAdReply": {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: `Catalyst Collective`,
                body: `Daftar Tugas yang masih aktif`,
                mediaType: 1,
                thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // You can change this URL to a valid image
                sourceUrl: sgc // You can replace this with a custom URL
            }
        }
    }, { quoted: m });
}
break;

// Manually archive a task by its ID or key
case 'arctugas': case 'arctg': {
    if (!isGroupAdmins) return sendStickAdmin(); // Only group admins can use this command
    if (!m.isGroup) return sendStickGroup(); // Command for groups only

    let taskId = q; // Get the task ID (key) from the user's input
    if (!taskId) return setReply(`*Teknis Penggunaan:* ${prefix + command} [ID tugas]`);

    // Load both active and archive databases
    let db_kurasi_tugas = JSON.parse(fs.readFileSync('./src/store/dbtugassmt3.json', 'utf8'));
    let db_archive_tugas = JSON.parse(fs.readFileSync('./database/dbarchivetugas.json', 'utf8'));

    // Find the task in the active database based on the task ID (key)
    let taskIndex = db_kurasi_tugas.findIndex(task => task.key === taskId);
    if (taskIndex === -1) return setReply(`Tugas dengan ID *${taskId}* tidak ditemukan dalam database aktif.`);

    // Move the task to the archive
    let taskToArchive = db_kurasi_tugas[taskIndex];
    db_archive_tugas.push(taskToArchive);

    // Remove the task from the active database
    db_kurasi_tugas.splice(taskIndex, 1); // Remove task from active list

    // Save the updated databases
    fs.writeFileSync('./src/store/dbtugassmt3.json', JSON.stringify(db_kurasi_tugas, null, 2));
    fs.writeFileSync('./database/dbarchivetugas.json', JSON.stringify(db_archive_tugas, null, 2));

    // Send confirmation message
    setReply(`Tugas dengan ID *${taskId}* telah berhasil dipindahkan ke arsip.`);

    break;
}

// Restore tasks from archive back to the active database
case 'restoretugas': case 'restoretg': {
    if (!isGroupAdmins) return sendStickAdmin(); // Only group admins can use this command
    if (!m.isGroup) return sendStickGroup(); // Command for groups only

    let taskId = q; // Get the task ID from the user's input
    if (!taskId) return setReply(`*Teknis Penggunaan:* ${prefix + command} [ID tugas]`);

    // Load both active and archive databases
    let db_kurasi_tugas = JSON.parse(fs.readFileSync('./src/store/dbtugassmt3.json', 'utf8'));
    let db_archive_tugas = JSON.parse(fs.readFileSync('./database/dbarchivetugas.json', 'utf8'));

    // Find the task in the archive
    let taskIndex = db_archive_tugas.findIndex(task => task.key === taskId);
    if (taskIndex === -1) return setReply(`Tugas dengan ID *${taskId}* tidak ditemukan dalam arsip.`);

    // Move the task back to the active database
    let taskToRestore = db_archive_tugas[taskIndex];
    db_kurasi_tugas.push(taskToRestore);

    // Remove the task from the archive
    db_archive_tugas.splice(taskIndex, 1); // Remove task from archive list

    // Save the updated databases
    fs.writeFileSync('./src/store/dbtugassmt3.json', JSON.stringify(db_kurasi_tugas, null, 2));
    fs.writeFileSync('./database/dbarchivetugas.json', JSON.stringify(db_archive_tugas, null, 2));

    // Send confirmation message
    setReply(`Tugas dengan ID *${taskId}* telah berhasil dikembalikan dari arsip ke database aktif.`);

    break;
}

case 'listarctg': case 'listarctugas': {
  let teks = '*✠ 𝐀𝐫𝐬𝐢𝐩 𝐓𝐮𝐠𝐚𝐬 ✠* \n\n';

  let db_archive_tugas = JSON.parse(fs.readFileSync('./database/dbarchivetugas.json', 'utf8'));

  // Check if there are no tasks in the database
  if (db_archive_tugas.length === 0) {
      teks += 'Santai Kawan, semua tugas sudah diselesaikan 😁\n';
  } else {
      // Add the instruction if there are tasks
      teks += '> Untuk melihat detail tiap tugas kirimkan *ID-nya* saja, contoh: _01033_\n\n';

      // Loop through all tasks in db_kurasi_tugas
      for (let x of db_archive_tugas) {
          // Extract the courseId from the task key (last 3 characters)
          const courseId = x.key.slice(-3);
          
          // Find the courseName from dbjadwal.json using the courseId
          const course = dbjadwal.courses.find(course => course.courseId === courseId);
          const courseName = course ? course.courseName : 'Mata kuliah tidak diketahui'; // Default if not found

          // Add both task key and course name to the output text
          teks += `➸ ID: ${x.key} | ${courseName}\n`;
      }
  }

  // Send the message
  conn.sendMessage(m.chat, {
      text: teks,
      contextInfo: {
          "externalAdReply": {
              showAdAttribution: true,
              renderLargerThumbnail: true,
              title: `Catalyst Collective`,
              body: `Daftar tugas yang melewati tengat waktu`,
              mediaType: 1,
              thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // You can change this URL to a valid image
              sourceUrl: sgc // You can replace this with a custom URL
          }
      }
  }, { quoted: m });
}
break;

case 'rmarctugas': case 'rmarctg': {
  if (!isGroupAdmins) return sendStickAdmin();
  if (!m.isGroup) return sendStickGroup();

  await conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });

  let db_archive_tugas = JSON.parse(fs.readFileSync('./database/dbarchivetugas.json', 'utf8'));

  // Check if there are any tasks in the database
  if (db_archive_tugas.length === 0) return setReply(`Saat ini, tidak ada tugas di dalam database`);
  
  // Validate the task name (ID)
  if (!q) return setReply(`*Teknis Penggunaan:* ${prefix + command} ID tugas`);
  
  // Check if the task exists
  const taskIndex = db_archive_tugas.findIndex(task => task.key === q);
  if (taskIndex === -1) return setReply(`Tugas dengan ID *${q}* tidak ada dalam database!`);
  
  // Remove the task from the array
  db_archive_tugas.splice(taskIndex, 1);

  // Save the updated task list back to the file
  fs.writeFileSync('database/dbarchivetugas.json', JSON.stringify(db_archive_tugas, null, 2));

  // Confirmation message
  setReply(`Tugas *${q}* telah berhasil dihapus dalam database!`);
}
break;

case 'listpj': {
  if (!m.isGroup) return sendStickGroup(); // Command for groups only

  // Define the path to the image
  const imagePath = './media/pjclasssmt3-v2.png';

  // Send the image with a caption
  conn.sendMessage(m.chat, {
      image: { url: imagePath },
      caption: `Halo ${pushname}, berikut adalah PJ untuk semester 3 di kelas KPI 2\n\n> Kirimkan perintah \`listmhs\`, untuk melihat informasi mengenai pj tersebut`
  }, { quoted: m });

  break;
}

 // MENU OWNER =====================>>
case 'owner': case 'creator':{
  const p = `${global.nomerOwner}`;
  let pp = await conn.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/2f51e8f62e53492c5df62.jpg");
  let owner = `wa.me/${p}`;
  let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Shinrinyoku
ORG: Nerd Valley & TheNextGeegThink
TITLE:Graphic Designer
item1.TEL;waid=${global.nomerOwner}:${global.nomerOwner}
item1.X-ABLabel:Contact Owner
item2.TEL;waid= ${global.nomerBot}:${global.nomerBot}
item2.X-ABLabel:Contact Bot
item3.URL:https://fromrha.pages.dev/
item3.X-ABLabel:💬 More
item4.EMAIL;type=INTERNET: rahmanhanafi365@outlook.com
item4.X-ABLabel:Email
item5.ADR:;;🇮🇩 Indonesia;;;;
item5.X-ABADR:💬 More
END:VCARD`;
  const sentMsg = await conn.sendMessage(m.chat, {
    contacts: {
      displayName: ownerName,
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: `${botName}`,
        body: `hai ${pushname}, ${ucapanWaktu}`,
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

conn.sendMessage(from, { text : `Hai @${sender.split("@")[0]}, Di atas adalah owner saya, boleh di spam... tapi boleh di coba juga hp siapa yang mati duluan 😁 `, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: sentMsg })
}
break
   case 'bcgc':
            case 'bcgroup': {
                if (!isOwner) return sendStickOwner()
                if (!q) return m.reply(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                setReply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = Ehztext(`*${ownerName}* ${gris}BROADCAST GROUP${gris}\n\n` + '```' + `• Message : ${q}\n\n` + '```')
                    conn.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botName,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: await pickRandom(global.fotoRandom),
                                sourceUrl: syt,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                m.reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
             case 'bcdb':
            case 'bcdatabase': {
               if (!isOwner) return sendStickOwner()
               if (!q) return m.reply('Text?')
               let teksnya = `${q}\n\n\n\nDate: ${wib} ${hariini}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await conn.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await conn.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (q) {
                     await conn.sendMessage(i, {
                        q: teksnya
                     })
                  }
               }
              m.reply(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
  case 'block': case 'ban': {
		if (!isOwner) return sendStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'block')
		await m.reply(mess.succes)
	}
	break
	case 'unblock': case 'unban': {
		if (!isOwner) return sendStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await conn.updateBlockStatus(users, 'unblock')
		await m.reply(mess.succes)
	}
	break
 case 'addlimit':
            case 'givelimit':{
                if (!isOwner) return sendStickOwner()
                if (!text) return setReply(`Usage ${prefix + command} number|limit amount`)
              let  usernya = text.split('|')[0]
               let limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                setReply(mess.succes)
            }
            break
            case 'dellimit':{
                if (!isOwner) return sendStickOwner()
                if (!text) return setReply(`Usage ${prefix + command} number|limit amount`)
               let usernya = text.split('|')[0]
              let  limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return setReply(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                setReply(mess.succew)
            }
            break               
        
case 'addowner':
if (!isOwner) return sendStickOwner()
if (!args[0]) return setReply(`Use ${prefix+command} number\nExample ${prefix+command} ${nomerOwner}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await conn.onWhatsApp(bnnd)
if (ceknye.length == 0) return setReply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
setReply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isOwner) return sendStickOwner()
if (!args[0]) return setReply(`Use ${prefix+command} nomor\nExample ${prefix+command} 916909137213`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
setReply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                setReply(teks)
            }
            break
case 'addprem':
                if (!isOwner) return sendStickOwner()
                if (args.length < 2)
                    return setReply(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    setReply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                   setReply("Premium Success")
                }
            break
            case 'delprem':
                if (!isOwner) return sendStickOwner()
                if (args.length < 1) return setReply(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 916909137213`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
                    }
                    setReply("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
                    setReply("Delete Success")
                }
            break
            case 'listprem': {
                if (!XeonTheCreator) return XeonStickOwner()
                let data = require('./database/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                conn.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break

case 'join':
                try {
                    if (!isOwner) return sendStickOwner()
                    if (!text) return setReply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    conn.groupAcceptInvite(result)
                    await setReply(`Done`)
                } catch {
                    setReply('Failed to join the Group')
                }
                break
  case 'leave':
            case 'out':
                if (!isOwner) return sendStickOwner()
                if (!m.isGroup) return sendStickGroup()
                setReply('Bye Everyone 🥺')
                await conn.groupLeave(m.chat)
            break
case 'delsession':
            case 'clearsession': {
                if (!isOwner) return sendStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return setReply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return setReply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    setReply(teks)
                    await sleep(2000)
                    setReply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    setReply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'getsession':
                if (!isOwner) return sendStickOwner()
         setReply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                conn.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
  case 'addtitle':{
               if (!isOwner) return sendStickOwner()
               if (!text) return setReply(`Usage ${prefix + command} number|title`)
            let   nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await setReply(mess.done)
            }
            break
            case 'deltitle':{
               if (!isOwner) return sendStickOwner()
               if (!text) return setReply(`Usage ${prefix + command} number`)
             let  nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await setReply(mess.succes)
            }
            break
       case 'addbadword': case 'addbd':
               if (!isOwner) return sendStickOwner()
               if (!groupAdmins) return setReply(mess.only.admin)
               if (args.length < 1) return m.reply( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./database/badword.json', JSON.stringify(bad))
               setReply('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!isOwner) return sendStickOwner()
               if (!groupAdmins) return setReply(mess.only.admin)
               if (args.length < 1) return m.reply( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./database/badword.json', JSON.stringify(bad))
               setReply('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'clearuser': {
               if (!isOwner) return sendStickOwner()
               let totalusernya = db.data.users[0]
               setReply(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!isOwner) return sendStickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               setReply(mess.succes)
            }
            break
                case 'delcase': {
if (!isOwner) return setReply(mess.only.ownerB)
if (!q) return setReply('*Masukan nama case yang akan di hapus*')

dellCase('./case.js', q)
setReply('*Dellcase Successfully*')
}
break

case 'addcase': {
 if (!isOwner) return setReply(mess.only.ownerB)
 if (!q) return setReply('Case tidak ditemukan, silakan kirimkan case!');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${q}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                m.reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                setReply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        m.reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
setReply(listCase())
}
break
case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./case.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break" }
  try{
  if (!isOwner) return setReply(mess.only.owner)
  if (!q) return setReply(`contoh : ${prefix + command} antilink`)
  let nana = await getCase(q)
 setReply(nana)
  } catch(err){
 console.log(err)
 m.reply(`Case ${q} tidak di temukan`)
   } }
break 

//============= [MENU CLASS]================

case 'presensis': {
  if (!m.isGroup) return sendStickGroup(); 
  if (!isGroupAdmins) return sendStickAdmin(); 

  // Load presensi data
  let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));
  let activeSession = dbpresensi.sessions.find(s => !s.ended);

  if (activeSession) {
      return setReply(`*⚠ Peringatan*\n\nSedang ada sesi presensi yang berlangsung\n\n➸ Matkul: *${activeSession.courseName}*\n➸ ID: *${activeSession.sessionId}*\n➸ Pada: *${activeSession.date}*\n\nSilakan akhiri sesi ini sebelum memulai sesi baru.`);
  }

  const courseId = q.trim();
  let course = dbjadwal.courses.find(c => c.courseId === courseId);

  if (!course) {
      return setReply(`Mata kuliah dengan ID ${courseId} tidak ditemukan.`);
  }

  let sessionId = `${courseId}${String(dbpresensi.sessions.length + 1).padStart(2, '0')}`;
  let newSession = {
      sessionId: sessionId,
      courseId: course.courseId,
      courseName: course.courseName,
      date: new Date().toLocaleDateString(),
      studentsPresent: [],
      ended: false
  };

  dbpresensi.sessions.push(newSession);
  fs.writeFileSync('./database/dbpresensi.json', JSON.stringify(dbpresensi, null, 2));

  const caption = `Presensi mata kuliah *${course.courseName}* pada *${newSession.date}* telah dimulai.\n\nSilakan tekan tombol "Hadir" di bawah untuk mengisi presensi.\n\n> ID: ${newSession.sessionId}`;

  // Send message with "Hadir" button and thumbnail
  let msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
          message: {
              interactiveMessage: proto.Message.InteractiveMessage.create({
                  body: proto.Message.InteractiveMessage.Body.create({
                      text: caption
                  }),
                  header: proto.Message.InteractiveMessage.Header.create({
                      hasMediaAttachment: true,
                      ...(await prepareWAMessageMedia({ image: { url: "https://pomf2.lain.la/f/oaxo9x92.jpg" } }, { upload: conn.waUploadToServer }))
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                      buttons: [
                          {
                              name: "quick_reply",
                              buttonParamsJson: `{"display_text":"Hadir","id":"${prefix}hadir"}`
                          }
                      ]
                  })
              })
          }
      }
  }, {});

  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
  break;
}

case 'hadir': {
  const sessionId = q.replace('hadir').trim();
  let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));
  let activeSession = dbpresensi.sessions.find(s => !s.ended);

  if (!activeSession) {
      return setReply('Sesi presensi tidak ditemukan atau sudah berakhir.');
  }

  let dbmhs = JSON.parse(fs.readFileSync('./database/dbmhs.json', 'utf8'));
  let student = dbmhs.students.find(s => s.phone === m.sender.split('@')[0]);

  if (!student) {
      return setReply('Nomor telepon Anda tidak terdaftar sebagai mahasiswa KPI 2');
  }

  if (activeSession.studentsPresent.some(s => s.nim === student.nim)) {
      return setReply(`${student.name} (NIM: ${student.nim}) sudah melakukan presensi.`);
  }

  activeSession.studentsPresent.push({
      name: student.name,
      nim: student.nim
  });

  fs.writeFileSync('./database/dbpresensi.json', JSON.stringify(dbpresensi, null, 2));

  // Saat sesi presensi diperbarui atau pesan update presensi dikirim:
// Saat sesi presensi diperbarui atau pesan update presensi dikirim:
let attendanceList = `Presensi mata kuliah *${activeSession.courseName}* pada *${activeSession.date}*\n\n`;
attendanceList += '*Daftar Hadir:*\n';
activeSession.studentsPresent.forEach((s, index) => {
    attendanceList += `${index + 1}. ${s.name} (NIM: ${s.nim})\n`;
});

// Buat pesan dengan tombol interaktif, termasuk tombol 'Copy'
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: attendanceList
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
                        {
                            name: "quick_reply",
                            buttonParamsJson: `{"display_text":"Hadir","id":"${prefix}hadir"}`
                        },
                        {
                            name: "cta_copy",
                            buttonParamsJson: JSON.stringify({
                                "display_text": "Salin Presensi",
                                "copy_code": attendanceList
                            })
                        }
                    ]
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: `Presensi ${activeSession.courseName}`,
                    hasMediaAttachment: true,
                    ...(await prepareWAMessageMedia({ image: { url: "https://pomf2.lain.la/f/oaxo9x92.jpg" } }, { upload: conn.waUploadToServer }))
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `© Nyth Zero - 2024`
                })
            })
        }
    }
}, {});

await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;



// Function to start attendance session
// case 'presensis': {
//     if (!m.isGroup) return sendStickGroup(); // Ensure command is only for groups
//     if (!isGroupAdmins) return sendStickAdmin(); // Ensure only group admins can start a session

//     // Load presensi data
//     let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));

//     // Check if there's already an active session
//     let activeSession = dbpresensi.sessions.find(s => !s.ended);

//     if (activeSession) {
//         return setReply(`Sesi presensi mata kuliah *${activeSession.courseName}* (ID: ${activeSession.sessionId}) pada *${activeSession.date}* sedang berlangsung. Silakan akhiri sesi ini sebelum memulai sesi baru.`);
//     }

//     // Get course information by courseId (e.g., 008)
//     const courseId = q.trim();
//     let course = dbjadwal.courses.find(c => c.courseId === courseId);

//     if (!course) {
//         return setReply(`Mata kuliah dengan ID ${courseId} tidak ditemukan.`);
//     }

//     // Create a new session with a unique session ID
//     let sessionId = `${courseId}${String(dbpresensi.sessions.length + 1).padStart(2, '0')}`;
//     let newSession = {
//         sessionId: sessionId,
//         courseId: course.courseId,
//         courseName: course.courseName,
//         date: new Date().toLocaleDateString(),
//         studentsPresent: [],
//         ended: false
//     };

//     // Add the new session to the database
//     dbpresensi.sessions.push(newSession);
//     fs.writeFileSync('./database/dbpresensi.json', JSON.stringify(dbpresensi, null, 2));

//     //Notify that the session has started
//     let message = `Sesi Presensi mata kuliah *${course.courseName}* pada *${newSession.date}* telah dimulai. Silakan balas pesan ini dengan nomor presensimu.\n\nKirimkan perintah \`listmhs/daftarmhs\`untuk melihat nomor presensimu!\n\n> ID: ${newSession.sessionId}`;
//     conn.sendMessage(m.chat, { 
//         text: message, 
//         contextInfo: { 
//             "externalAdReply": { 
//                 showAdAttribution: true, 
//                 renderLargerThumbnail: true, 
//                 title: `Presensi ${course.courseName}`, 
//                 body: `Presensi dimulai`, 
//                 mediaType: 1, 
//                 thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', 
//                 sourceUrl: sgc
//             } 
//         } 
//     }, { quoted: m });

// }
// break;


//presensis end

case 'presensie': {
    if (!m.isGroup) return sendStickGroup(); // Ensure command is only for groups
    if (!isGroupAdmins) return sendStickAdmin(); // Ensure only group admins can end a session

    // Load presensi data
    let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));

    // Find the active session
    let activeSession = dbpresensi.sessions.find(s => !s.ended);

    if (!activeSession) {
        return setReply('Tidak ada sesi presensi yang aktif saat ini.');
    }

    // End the active session
    activeSession.ended = true;
    fs.writeFileSync('./database/dbpresensi.json', JSON.stringify(dbpresensi, null, 2));

    // Notify that the session has ended
    setReply(`Sesi presensi mata kuliah *${activeSession.courseName}* dengan ID *${activeSession.sessionId}* telah berakhir.`);
}
break;


//delete presensi

case 'presensid': case 'presensidel': {
    if (!isOwner) return sendStickOwner(); // Ensure only the owner can delete a session
    if (!m.isGroup) return sendStickGroup(); // Ensure command is only for groups

    if (!q) return setReply(`Please specify the session ID. Example: ${prefix}presensid 00801`);

    // Load presensi data
    let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));

    // Find the session by ID
    const sessionIndex = dbpresensi.sessions.findIndex(s => s.sessionId === q.trim());

    if (sessionIndex === -1) {
        return setReply(`Sesi presensi dengan ID ${q} tidak ditemukan.`);
    }

    // Remove the session from the list
    dbpresensi.sessions.splice(sessionIndex, 1);

    // Save the updated presensi data
    fs.writeFileSync('./database/dbpresensi.json', JSON.stringify(dbpresensi, null, 2));

    // Confirmation message
    setReply(`Sesi presensi dengan ID: ${q} berhasil dihapus.`);
}
break;

// List Presensi
case 'listpresensi': {
    if (!isOwner) return sendStickOwner(); // Ensure only the owner can use this command
    if (!m.isGroup) return sendStickGroup(); // Ensure command is only for groups

    // Load presensi data
    let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));

    if (dbpresensi.sessions.length === 0) {
        return setReply('Tidak ada sesi presensi yang tersedia.');
    }

    // Build the list message with the new structure
    let presensiList = '✠ 𝐃𝐚𝐟𝐭𝐚𝐫 𝐒𝐞𝐬𝐢 𝐏𝐫𝐞𝐬𝐞𝐧𝐬𝐢 ✠\n\n';
    presensiList += '> Untuk melihat detail tiap sesi, silakan kirimkan perintah \`dbpresensi [id-presensi]\`\n\n';
    for (let session of dbpresensi.sessions) {
        presensiList += `*${session.courseName}*\n`;
        presensiList += `➸ ID: ${session.sessionId}\n`;
        presensiList += `➸ Tanggal: ${session.date}\n\n`;
    }

    // Send the list as a message with larger thumbnail
    conn.sendMessage(m.chat, { 
        text: presensiList, 
        contextInfo: { 
            "externalAdReply": { 
                showAdAttribution: true, 
                renderLargerThumbnail: true, 
                title: `Daftar Sesi Presensi`, 
                body: `Jumlah Sesi: ${dbpresensi.sessions.length}`, 
                mediaType: 1, 
                thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', 
                sourceUrl: sgc // You can replace this with a custom URL if needed
            } 
        } 
    }, { quoted: m });
}
break;

// database presensi

case 'dbpresensi': {
    if (!isOwner) return sendStickOwner(); // Ensure only the owner can use this command
    if (!m.isGroup) return sendStickGroup(); // Ensure command is only for groups
    if (!q) return setReply(`Tolong sertakan ID Presensinya! Contoh: ${prefix}dbpresensi 00801\n\n> Untuk mengetahui ID Presensi kirimkan perintah \'listpresensi\'.`);

    // Load presensi data
    let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));

    // Find the session by ID
    const session = dbpresensi.sessions.find(s => s.sessionId === q.trim());

    if (!session) {
        return setReply(`Sesi presensi dengan ID ${q} tidak ditemukan.`);
    }

    // Build the detailed session information
    let sessionInfo = `✠ 𝐃𝐚𝐭𝐚 𝐒𝐞𝐬𝐢 𝐏𝐫𝐞𝐬𝐞𝐧𝐬𝐢 ✠\n\n`;
    sessionInfo += `*Mata Kuliah*: ${session.courseName}\n`;
    sessionInfo += `*ID Sesi*: ${session.sessionId}\n`;
    sessionInfo += `*Tanggal*: ${session.date}\n\n`;

    // Add the list of students who have marked their attendance
    if (session.studentsPresent.length > 0) {
        sessionInfo += '*Daftar Hadir:*\n';
        session.studentsPresent.forEach((student, index) => {
            sessionInfo += `${index + 1}. ${student.name} (NIM: ${student.nim})\n`;
        });
    } else {
        sessionInfo += 'Belum ada mahasiswa yang melakukan presensi.\n';
    }

    // Send the session information as a message
    conn.sendMessage(m.chat, { 
        text: sessionInfo, 
        contextInfo: { 
            "externalAdReply": { 
                showAdAttribution: true, 
                renderLargerThumbnail: true, 
                title: `Data Sesi Presensi`, 
                body: `${session.courseName}`, 
                mediaType: 1, 
                thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', 
                sourceUrl: sgc // You can replace this with a custom URL if needed
            } 
        } 
    }, { quoted: m });
}
break;

// presensi
// this command will allow students to do their attendance

// case 'presensi': {
//     if (!m.isGroup) return sendStickGroup(); // Ensure command is only for groups

//     // Parse the input and check for attendance number
//     let args = q.trim().split(' ');  // Split the command and its arguments
//     let studentNumber = parseInt(args[0]);  // Take the first part as the student number

//     if (isNaN(studentNumber)) {  // If the number is not provided or invalid
//         return setReply(`Tolong sertakan nomor presensimu. Contoh: ${prefix}presensi 3\n\n> Untuk mengetahui nomor presensi, kirimkan perintah \`listmhs\``);
//     }

//     // Load presensi and students data
//     let dbpresensi = JSON.parse(fs.readFileSync('./database/dbpresensi.json', 'utf8'));
//     let dbmhs = JSON.parse(fs.readFileSync('./database/dbmhs.json', 'utf8'));

//     // Find the active session
//     let activeSession = dbpresensi.sessions.find(s => !s.ended);

//     if (!activeSession) {
//         return setReply('Tidak ada sesi presensi yang aktif saat ini.');
//     }

//     // Find the student by the provided attendance number
//     let student = dbmhs.students.find(s => s.id === studentNumber);

//     if (!student) {
//         return setReply(`Mahasiswa dengan nomor presensi ${studentNumber} tidak ditemukan.`);
//     }

//     // Check if the student has already marked attendance
//     if (activeSession.studentsPresent.some(s => s.nim === student.nim)) {
//         return setReply(`${student.name} (NIM: ${student.nim}) sudah melakukan presensi.`);
//     }

//     // Mark attendance
//     activeSession.studentsPresent.push({ name: student.name, nim: student.nim });

//     // Save the updated presensi data
//     fs.writeFileSync('./database/dbpresensi.json', JSON.stringify(dbpresensi, null, 2));

//     // Build the attendance confirmation message
//     let attendanceList = `Presensi mata kuliah *${activeSession.courseName}* pada *${activeSession.date}*\n\n`;
//     attendanceList += '*Daftar Hadir:*\n';
//     activeSession.studentsPresent.forEach((s, index) => {
//         attendanceList += `${index + 1}. ${s.name} (NIM: ${s.nim})\n`;
//     });

//     // Send the attendance confirmation message
//     conn.sendMessage(m.chat, { 
//         text: attendanceList, 
//         contextInfo: { 
//             "externalAdReply": { 
//                 showAdAttribution: true, 
//                 renderLargerThumbnail: true, 
//                 title: `Presensi ${activeSession.courseName}`, 
//                 body: `Jumlah Hadir: ${activeSession.studentsPresent.length}`, 
//                 mediaType: 1, 
//                 thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', 
//                 sourceUrl: sgc // You can replace this with a custom URL if needed
//             } 
//         } 
//     }, { quoted: m });
// }
// break;

// LECTURER COMMANDS ==============>>

// dosen
case 'dosen': case 'datadosen': {
    if (!isGroup) return sendStickGroup()
    let owned = `${global.nomerOwner}`
    let statususer = isOwner ? 'Owner 🎐' : isPremium ? 'Premium 💎' : 'User 🐱';
    let limitz = db.data.users[m.sender].limit;
    
    
    const caption = `${menumenhara(prefix)}`;


    let sections = [
      {
      title: 'List Dosen',
      rows: [{
      title: 'Dr. H., Samsul Munir, M.A.',
      description: `6281328084159`, 
      id: `${prefix}paksamsul`
      },
      {
      title: 'Reny Atika Asya\'roni., S.Sos.,M.Sos', 
      description: "6285727317864", 
      id: `${prefix}bureny`
      },
      {
      title: 'Siti Robiah Adawiyah., Alhz., S.Sos.I., M.S', 
      description: "6282223264395", 
      id: `${prefix}burob`
      },
      {
      title: 'Dr. Samsurrohman., Alh., S. Ag., M.S.I', 
      description: "6285786773771", 
      id: `${prefix}paksamsur`
      },
      {
      title: 'Dr. H., Ahsin Wijaya., Alh., M. Ag', 
      description: "N/A", 
      id: `${prefix}pakahsin`
      },
      {
      title: 'Sri Rahayu., S.Sos., M.I.Kom', 
      description: "6285600063526", 
      id: `${prefix}busri`
      },
      {
      title: 'Drs. H., Yudino., M.Pd.I', 
      description: "6287702312759", 
      id: `${prefix}pakyudino`
      },
      {
      title: 'Drs., Moh. Amin., M.Pd.I.', 
      description: "6281380301924", 
      id: `${prefix}pakamin`
      },
      {
      title: 'Muhammad Yusuf., S.Sos., M.Ag', 
      description: "6281225938685", 
      id: `${prefix}pakyusuf`
      },
      {
      title: 'Supartinah., S.Pd.,M.I.Kom.', 
      description: "6285327298084", 
      id: `${prefix}busupar`
      },
      {
      title: 'Ahmad Anwar., MA., LL.M.', 
      description: "6285227100127", 
      id: `${prefix}pakanwar`
      }]
      }]
      
      let listMessage = {
          title: 'Dosen KPI 2 SMT 3', 
          sections
      };
    
    
    let msg = generateWAMessageFromContent(m.chat, {
     viewOnceMessage: {
     message: {
     "messageContextInfo": {
     "deviceListMetadata": {},
     "deviceListMetadataVersion": 2
     },
     interactiveMessage: proto.Message.InteractiveMessage.create({
     contextInfo: {
     mentionedJid: [m.sender], 
     isForwarded: true, 
     forwardedNewsletterMessageInfo: {
     newsletterJid,
      serverMessageId: 100,
      newsletterName
      },
     businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
     }, 
     body: proto.Message.InteractiveMessage.Body.create({
     text: caption
     }),
     footer: proto.Message.InteractiveMessage.Footer.create({
     text: Ehztext(`© Nyth Zero - 2024`)
     }),
     header: proto.Message.InteractiveMessage.Header.create({
     title: `Hai ${ucapanWaktu}, ${pushname}\n\nBerikut adalah data dosen yang mengajar kelas KPI 2`,
     subtitle: "nythzero",
     hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e6f54418bdc9096b3f306.jpg" } }, { upload: conn.waUploadToServer }))
     }),
     nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
     buttons: [ 
        {
        "name": "single_select",
        "buttonParamsJson": JSON.stringify(listMessage) 
        },
        {
        "name": "cta_url",
        "buttonParamsJson": "{\"display_text\":\"Pencipta\",\"url\":\"https://wa.me/6282114692838\",\"merchant_url\":\"https://wa.me/6282114692838\"}"
        },
     ],
     })
     })
     }
     }
    }, {})
    
    if (!q) await conn.relayMessage(msg.key.remoteJid, msg.message, {
     messageId: msg.key.id
    })
    if (args[0] === "all") {
        
        let owned = `${global.nomerOwner}`
        let statususer = isOwner ? 'Owner 🎐' : isPremium ? 'Premium 💎' : 'User 🐱';
        let limitz = db.data.users[m.sender].limit;
    let photo1 = pickRandom(global.fotoRandom)
       let wek = `
    
    ${gris}┈ ⋞ 〈 PROFIL DOSEN 〉 ⋟ ┈${gris}
    Hai ${pushname}
    
    ▸ ɴᴀᴍᴇ : ${pushname}
    ▸ ɴᴜᴍʙᴇʀ : ${m.sender.split('@')[0]}
    ▸ sᴛᴀᴛᴜs : ${statususer}
    ▸ ʟɪᴍɪᴛ : ${limitz}`
     const caption = `${wek}\n\n${readmore}\n\n${paksamsul(prefix)}\n\n\n${bureny(prefix)}\n\n\n${burob(prefix)}\n\n\n${paksamsur(prefix)}\n\n\n${pakahsin(prefix)}\n\n\n${busri(prefix)}\n\n\n${pakyudino(prefix)}\n\n\n${pakamin(prefix)}\n\n\n${pakyusuf(prefix)}\n\n\n${busupar(prefix)}\n\n\n${pakanwar(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl:photo1,
    sourceUrl: global.sig, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: m})
    
     } else if (args[0] === 'paksamsul') {
    await sleep(1000)
        
     const caption = `${menugrup(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: global.sig, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'bureny') {
    await sleep(1000)

    const caption = `${menukelas(prefix)}`;

    conn.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: botName, 
    body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
    thumbnailUrl: pickRandom(fotoRandom),
    sourceUrl: global.sig, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: Anjel})
    
 } else if (args[0] === 'game') {
await sleep(1000)
        
     const caption = `${menugame(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom (fotoRandom),
        sourceUrl: global.syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'burob') {
    await sleep(1000)
        
     const caption = `${menuai(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom (fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'paksamsur') {
    await sleep(1000)
        
     const caption = `${menudownload(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'pakahsin') {
    await sleep(1000)
        
     const caption = `${menudownload(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'busri') {
    await sleep(1000)
        
     const caption = `${menudownload(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'pakyudino') {
    await sleep(1000)
        
     const caption = `${menudownload(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'pakamin') {
    await sleep(1000)
        
     const caption = `${menudownload(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'pakyusuf') {
    await sleep(1000)
        
     const caption = `${menudownload(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'busupar') {
    await sleep(1000)
        
     const caption = `${menudownload(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } else if (args[0] === 'pakanwar') {
    await sleep(1000)
        
     const caption = `${menudownload(prefix)}`;
    
        conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName },
        externalAdReply: {  
        title: botName, 
        body: `Library: Whiskeysockets/Baileys ${baileysVersion}`,
        thumbnailUrl: pickRandom(fotoRandom),
        sourceUrl: syt, 
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
     } 
    }
    break

// dosen pak samsul
case 'paksamsul': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Samsul Munir'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}

// dosen bu reny
case 'bureny': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Reny Atika'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}

case 'burob': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Siti Robiah'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}
case 'paksamsur': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Samsurrohman'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}
case 'pakahsin': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Ahsin'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}
case 'busri': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Sri Rahayu'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}
case 'pakyudino': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Yudino'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}
case 'pakamin': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Moh. Amin'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}
case 'pakyusuf': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Muhammad Yusuf'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}
case 'busupar': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Supartinah'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}
case 'pakanwar': { 
  if (!isGroup) return sendStickGroup();

  // Path to dbdosen.json
  const dbDosenPath = path.join(__dirname, 'database', 'dbdosen.json');
  
  // Read and parse the database
  const dosenData = JSON.parse(fs.readFileSync(dbDosenPath, 'utf-8'));

  // Find the lecturer by name
  const lecturer = dosenData.lecturers.find(d => d.name.includes('Ahmad Anwar'));

  if (lecturer) {
    // Format the message with the lecturer's information
    const lecturerInfo = `✠ 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃𝐨𝐬𝐞𝐧 ✠\n\n*➸ Nama:* ${lecturer.name}\n*➸ Matkul:* ${lecturer.courses.join(', ')}\n*➸ WA:* ${lecturer.phone}\n*➸ Surel:* ${lecturer.email || 'N/A'}\n`;
    
    // Send the formatted lecturer info
    conn.sendMessage(m.chat, { 
      text: lecturerInfo 
    }, { 
      quoted: m 
    });
  } else {
    // Lecturer not found, send error message
    conn.sendMessage(m.chat, { 
      text: 'Dosen tersebut tidak ditemukan' 
    }, { 
      quoted: m 
    });
  }
  
  break;
}

  case 'listmhs': case 'daftarmhs': {
    if (!m.isGroup) return sendStickGroup(); 

    const sortedStudents = dbmhs.students.sort((a, b) => a.id - b.id);

    // Format the list of students
    let studentList = '*✠ 𝐃𝐚𝐟𝐭𝐚𝐫 𝐌𝐚𝐡𝐚𝐬𝐢𝐬𝐰𝐚 ✠*\n\n➸ Kelas: KPI 2\n➸ Semester: 3\n\n> Catatan\n\nKirimkan perintah \`snmhs\` atau \`snpmhs\` untuk melihat informasi mengenai mahasiswa tersebut.\n\n';
    sortedStudents.forEach(student => {
      studentList += `${student.id}. ${student.name} (${student.nim})\n`;
    });

    // Send the student list as a message
    conn.sendMessage(m.chat, { 
        text: studentList, 
        contextInfo: { 
            "externalAdReply": { 
                showAdAttribution: true, 
                renderLargerThumbnail: true, 
                title: `Catalst Collective`, 
                body: `${dbmhs.students.length} Total Mahasiswa`, 
                mediaType: 1, 
                thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', 
                sourceUrl: sgc
            } 
        } 
    }, { quoted: m });
    break;
  }

  // search nomor presensi mahasiswa

  case 'snpmhs': {
    if (!m.isGroup) return sendStickGroup(); // Command is for groups only
    if (!q) return setReply(`Tolong sertakan nomor presensi! Contoh: ${prefix}snpmhs 2`);

    // Parse the student's presensi number
    const presensiNumber = parseInt(q.trim());

    // Find the student with the corresponding ID
    const student = dbmhs.students.find(s => s.id === presensiNumber);

    if (!student) {
        return setReply(`Mahasiswa dengan nomor presensi ${presensiNumber} tidak ditemukan.`);
    }

    // Build the student's information
    let studentInfo = `✠ 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐬𝐢 𝐌𝐚𝐡𝐚𝐬𝐢𝐬𝐰𝐚 ✠\n\n`;
    studentInfo += `*➸ Nama*: ${student.name}\n`;
    studentInfo += `*➸ NIM*: ${student.nim}\n`;
    studentInfo += `*➸ Angkatan*: ${student.year}\n`;
    studentInfo += `*➸ WA*: ${student.phone}\n`;

    // Send the student's information as a message
    conn.sendMessage(m.chat, {
        text: studentInfo,
        contextInfo: {
            "externalAdReply": {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: `Catalyst Collective`,
                body: `Informasi Mahasiswa`,
                mediaType: 1,
                thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // You can change this URL to a valid image
                sourceUrl: sgc // You can replace this with a custom URL
            }
        }
    }, { quoted: m });
}
break;

case 'snmhs': {
    if (!m.isGroup) return sendStickGroup(); // Command is for groups only
    if (!q) return setReply(`Tolong sertakan nama mahasiswa! Contoh: ${prefix}snmhs Hamid`);

    // Find the student by name (case insensitive)
    const studentName = q.trim().toLowerCase();
    const student = dbmhs.students.find(s => s.name.toLowerCase().includes(studentName));

    if (!student) {
        return setReply(`Mahasiswa dengan nama '${q}' tidak ditemukan.`);
    }

    // Build the student's information
    let studentInfo = `✠ 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐬𝐢 𝐌𝐚𝐡𝐚𝐬𝐢𝐬𝐰𝐚 ✠\n\n`;
    studentInfo += `*➸ Nama*: ${student.name}\n`;
    studentInfo += `*➸ NIM*: ${student.nim}\n`;
    studentInfo += `*➸ Angkatan*: ${student.year}\n`;
    studentInfo += `*➸ WA*: ${student.phone}\n`;

    // Send the student's information as a message
    conn.sendMessage(m.chat, {
        text: studentInfo,
        contextInfo: {
            "externalAdReply": {
                showAdAttribution: true,
                renderLargerThumbnail: true,
                title: `${student.name}`,
                body: `Informasi Mahasiswa`,
                mediaType: 1,
                thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // You can change this URL to a valid image
                sourceUrl: sgc // You can replace this with a custom URL
            }
        }
    }, { quoted: m });
}
break;

case "listjadwal":
case "jadwalkelas": {
    if (!m.isGroup) return sendStickGroup();
    await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 

    let total = 0;
    let getGroups = await conn.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
    let usergc = groups.map((v) => v.id);
    let time = ms(5000 * Number(usergc.length));

    // Prepare the image
    let jdmd = await prepareWAMessageMedia({ image: await fs.readFileSync("media/jadwal/slidestu (1).jpg") }, { upload: conn.waUploadToServer });
    let jdte = await prepareWAMessageMedia({ image: await fs.readFileSync("media/jadwal/slidestu (2).jpg") }, { upload: conn.waUploadToServer });
    let jdwd = await prepareWAMessageMedia({ image: await fs.readFileSync("media/jadwal/slidestu (3).jpg") }, { upload: conn.waUploadToServer });

    // Define the carousel message content
    const msgii = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "Berikut adalah jadwal kelas KPI 2 Semester 3\n"
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: [
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `✠ 𝐉𝐚𝐝𝐰𝐚𝐥 𝐇𝐚𝐫𝐢 𝐒𝐞𝐧𝐢𝐧 ✠

➸ Hukum dan Etika Jurnalistik 
➸ Komunikasi Politik
➸ Fiqh Al Dakwah
➸ Ulumul Qur'an`,
                                    hasMediaAttachment: true,
                                    ...jdmd
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6282114692838\",\"merchant_url\":\"https://wa.me/6282114692838\"}`
                                    }]
                                })
                            },
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `✠ 𝐉𝐚𝐝𝐰𝐚𝐥 𝐇𝐚𝐫𝐢 𝐒𝐞𝐥𝐚𝐬𝐚 ✠
                                    
➸ Tafsir Ayat-Ayat Dakwah
➸ Qiro'ah Sab'ah
➸ Komunikasi Publik dan Massa
➸ Retorika Dakwah`,
                                    hasMediaAttachment: true,
                                    ...jdte
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6282114692838\",\"merchant_url\":\"https://wa.me/6282114692838\"}`
                                    }]
                                })
                            },
                            {
                                header: proto.Message.InteractiveMessage.Header.fromObject({
                                    title: `✠ 𝐉𝐚𝐝𝐰𝐚𝐥 𝐇𝐚𝐫𝐢 𝐑𝐚𝐛𝐮 ✠

➸ Studi Pesantren
➸ Metodologi Penelitian Sosial
➸ Studi Agama Kontemporer
➸ Analisis Teks Media`,
                                    hasMediaAttachment: true,
                                    ...jdwd
                                }),
                                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                    buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: `{\"display_text\":\"Creator\",\"url\":\"https://wa.me/6282114692838\",\"merchant_url\":\"https://wa.me/6282114692838\"}`
                                    }]
                                })
                            },
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await conn.relayMessage(m.chat, msgii.message, { messageId: msgii.key.id });

    break;
}


// Membuat Kelompok ==========>>

case 'mkgroup': {
    if (args.length < 3) return setReply(`Teknis Penggunan: ${prefix}mkgroup [ID matkul] [s atau g] [value]\n\n> mkgroup 033 g 4\nUntuk membuat kelompok dengan total 4 kelompok\n\n> mkgroup 033 s 5\nUntuk membuat kelompok dengan total 5 orang dalam satu kelompok`);

    await conn.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 

    const path = './database/groups.json';

const students = JSON.parse(fs.readFileSync('./database/dbmhs.json', 'utf8'));
const courses = JSON.parse(fs.readFileSync('./database/dbjadwal.json', 'utf8'));

let groups = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, 'utf8')) : [];

function generateGroupId(courseID) {
    let groupCount = groups.filter(g => g.courseID === courseID).length;
    return `g${courseID}${groupCount + 1}`;
}

    const courseID = args[0];
    const mode = args[1];
    const value = parseInt(args[2]);

    const course = courses.courses.find(c => c.courseId === courseID);
    if (!course) return setReply('🔴 Error!\nTidak ada mata kuliah dengan ID tersebut!\n\nKirimkan perintah\`listjadwal`untuk melihat mata kuliah dengan ID-nya.');

    if (!['s', 'g'].includes(mode)) return setReply('🔴 Error!\nGunakan "s" untuk jumlah orang dalam satu grub, atau "g" untuk jumlah keseluruhan grub.');

    let studentList = [...students.students]; 
    const totalStudents = studentList.length;    
    
    let totalGroups = 0;
    let studentsPerGroup = 0;
    
    if (mode === 's') {
        studentsPerGroup = value;
        totalGroups = Math.floor(totalStudents / studentsPerGroup);
    } else if (mode === 'g') {
        totalGroups = value;
        studentsPerGroup = Math.floor(totalStudents / totalGroups);
    }

    let remainingStudents = totalStudents % (mode === 's' ? studentsPerGroup : totalGroups);

    studentList.sort(() => Math.random() - 0.5);

    let groupData = [];
    for (let i = 0; i < totalGroups; i++) {
        groupData.push({
            groupId: i + 1,   
            students: studentList.splice(0, studentsPerGroup)
        });
    }

    // If there are remaining students, distribute them into the groups
    if (remainingStudents > 0) {
        if (remainingStudents < studentsPerGroup) {
            // Create a smaller group with the remaining students if they're close to a full group
            groupData.push({
                groupId: totalGroups + 1,
                students: studentList.splice(0, remainingStudents)
            });
        } else {
            // Randomly assign the remaining students to existing groups
            while (studentList.length > 0) {
                let randomGroup = Math.floor(Math.random() * totalGroups);
                groupData[randomGroup].students.push(studentList.shift());
            }
        }
    }

    // Generate the unique group ID
    const groupId = generateGroupId(courseID);

    // Save the group in the groups database
    let newGroup = {
        groupId: groupId,
        courseID: courseID,
        courseName: course.courseName,
        totalGroups: groupData.length,
        studentsPerGroup: studentsPerGroup,
        creationDate: new Date().toISOString().split('T')[0], // Only date
        groups: groupData
    };
    groups.push(newGroup);

    // Save the updated group list to the JSON file
    fs.writeFileSync(path, JSON.stringify(groups, null, 2));

    // Prepare the success message
    let message = `✅ *Kelompok ${course.courseName} telah berhasil dibentuk*\n\n`;
    message += `➸ Id Kelompok: ${groupId}\n`;
    message += `➸ Total Kelompok: ${groupData.length}\n`;
    message += `➸ Jumlah Orang: ${studentsPerGroup}\n`;
    message += `➸ Tanggal Dibentuk: ${newGroup.creationDate}\n\n`;

    groupData.forEach((g, i) => {
        message += `Kelompok ${i + 1}:\n`;
        g.students.forEach((s, j) => {
            message += `${j + 1}. ${s.name}\n`;
        });
        message += '\n';
    });

    // Send the success message
    setReply(message);
}
break;

// List Kelompok

case 'grouplist': case 'listkelompok': {
  const path = './database/groups.json';

  // Check if the groups database exists
  if (!fs.existsSync(path)) return setReply('Belum ada kelompok yang terbentuk.');

  // Load the groups from the database
  const groups = JSON.parse(fs.readFileSync(path, 'utf8'));

  // Check if there are any groups
  if (groups.length === 0) return setReply('Belum ada kelompok yang terbentuk.');

  // Prepare the group list message
  let message = '✠ 𝐊𝐮𝐫𝐚𝐬𝐢 𝐊𝐞𝐥𝐨𝐦𝐩𝐨𝐤 ✠\n\n';
  message += '> Untuk melihat detail kelompok, silakan kirimkan perintah \`view [id-kelompok]\`\n\n'
  groups.forEach((group, index) => {
      message += `${index + 1}. Kelompok ${group.groupId} | ${group.courseName}\n`;
  });

  // Send the group list message
  conn.sendMessage(m.chat, {
    text: message,
    contextInfo: {
        "externalAdReply": {
            showAdAttribution: true,
            renderLargerThumbnail: true,
            title: `Catalyst Collective`,
            body: `Total Kelompok: ${groups.length}`,
            mediaType: 1,
            thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // You can change this URL to a valid image
            sourceUrl: sgc // You can replace this with a custom URL
        }
    }
}, { quoted: m });
}
break;

// Logika untuk melihat informasi kelompok

case 'view': {
  const path = './database/groups.json';

  // Check if the group ID is provided
  if (args.length < 1) return setReply('Harap berikan ID kelompok, contoh: view g0331');

  const groupId = args[0];

  // Check if the groups database exists
  if (!fs.existsSync(path)) return setReply('Belum ada kelompok yang terbentuk.');

  // Load the groups from the database
  const groups = JSON.parse(fs.readFileSync(path, 'utf8'));

  // Find the group with the provided groupId
  const group = groups.find(g => g.groupId === groupId);
  if (!group) return setReply(`Kelompok dengan ID ${groupId} tidak ditemukan.`);

  // Prepare the group details message
  let message = `Kelompok ${group.courseName}\n\n`;
  message += `➸ Id Kelompok: ${group.groupId}\n`;
  message += `➸ Total Kelompok: ${group.totalGroups}\n`;
  message += `➸ Jumlah Orang: ${group.studentsPerGroup}\n`;
  message += `➸ Tanggal Dibentuk: ${group.creationDate}\n\n`;

  group.groups.forEach((g, i) => {
      message += `Kelompok ${i + 1}:\n`;
      g.students.forEach((s, j) => {
          message += `${j + 1}. ${s.name}\n`;
      });
      message += '\n';
  });

  // Send the group details message
  conn.sendMessage(m.chat, {
    text: message,
    contextInfo: {
        "externalAdReply": {
            showAdAttribution: true,
            renderLargerThumbnail: true,
            title: `Kelompok ${group.courseName}`,
            body: `Detail kelompok lebih lanjut`,
            mediaType: 1,
            thumbnailUrl: 'https://pomf2.lain.la/f/oaxo9x92.jpg', // You can change this URL to a valid image
            sourceUrl: sgc // You can replace this with a custom URL
        }
    }
}, { quoted: m });
}
break;

// Menghapus kelompok
case 'rmgroup': {
  const path = './database/groups.json';

  // Check if the group ID is provided
  if (args.length < 1) return setReply('Harap berikan ID kelompok yang ingin dihapus, contoh: rmgroup g0331');

  const groupId = args[0];

  // Check if the groups database exists
  if (!fs.existsSync(path)) return setReply('Belum ada kelompok yang terbentuk.');

  // Load the groups from the database
  let groups = JSON.parse(fs.readFileSync(path, 'utf8'));

  // Find the index of the group with the provided groupId
  const groupIndex = groups.findIndex(g => g.groupId === groupId);
  if (groupIndex === -1) return setReply(`Kelompok dengan ID ${groupId} tidak ditemukan.`);

  // Remove the group from the array
  groups.splice(groupIndex, 1);

  // Save the updated groups list to the database
  fs.writeFileSync(path, JSON.stringify(groups, null, 2));

  // Send confirmation message
  setReply(`Kelompok dengan ID ${groupId} telah berhasil dihapus.`);
}
break;

// Remmatkul switch
case 'remmatkul': {
  if (!m.isGroup) return sendStickGroup();
  if (!isGroupAdmins) return sendStickAdmin();

  let chats = global.db.data.chats[from];
  if (typeof chats !== 'object') global.db.data.chats[from] = {};
  
  if (args.length < 1) return setReply('\`remmatkul\` adalah fitur pengingat otomatis, untuk membuat pengumuman bahwa kelas yang sedang berjalan akan segera berakhir dan berganti ke mata kuliah berikutnya.\n\nUntuk penggunaan, silakan tentukan apakah fitur ini akan dihidupkan atau dimatikan dengan \`on/off\`');
  
  if (args[0] === 'on') {
      chats.remmatkul = true; // Enable reminder for this group
      setReply('✅ Pengingat otomatis untuk pergantian mata kuliah berhasil *diaktifkan.*');
      setupCourseReminders(from); // Set up the reminders for the group
  } else if (args[0] === 'off') {
      chats.remmatkul = false; // Disable reminder for this group
      clearCronJobs(from); // Stop any active cron jobs for this group
      setReply('🔴 Pengingat otomatis untuk pergantian mata kuliah berhasil *dinonaktifkan.*');
  }
  break;
}

// rempresensi
case 'rempresensi': {
  if (!m.isGroup) return sendStickGroup();
  if (!isGroupAdmins) return sendStickAdmin();

  let chats = global.db.data.chats[from];
  if (typeof chats !== 'object') global.db.data.chats[from] = {};
  
  if (args.length < 1) return setReply('\`rempresensi\` adalah fitur pengingat otomatis, untuk seluruh mahasiswa KPI 2 agar segera melakukan presensi, fitur ini akan dikirimkan -10 menit sebelum pelajaran berakhir.\n\nUntuk penggunaan, silakan tentukan apakah fitur ini akan dihidupkan atau dimatikan dengan \`on/off\`');
  
  if (args[0] === 'on') {
      chats.remmatkul = true; // Enable attendance reminder for this group
      setReply('✅ Pengingat presensi otomatis berhasil *diaktifkan.*');
      setupAttendanceReminders(from); // Set up the attendance reminders for the group
  } else if (args[0] === 'off') {
      chats.remmatkul = false; // Disable attendance reminder for this group
      clearAttendanceCronJobs(from); // Stop any active cron jobs for attendance reminders
      setReply('🔴 Pengingat presensi otomatis berhasil *dinonaktifkan*');
  }
  break;
}

// Fitur reminder untuk sekolah, istirahat dan pulang

case 'remserang': {
  if (!m.isGroup) return sendStickGroup(); // Ensure command is only for groups
  if (!isGroupAdmins) return sendStickAdmin(); // Ensure only group admins can control the reminders

  // Ensure the chat data is properly initialized in the global database
  let chats = global.db.data.chats[from];
  if (typeof chats !== 'object') global.db.data.chats[from] = {};

  // Initialize the reminder state if not already set
  if (typeof chats.reminderEnabled === 'Fitur ini belum diaktifkan!') {
      chats.reminderEnabled = false; // Default to off
  }

  // Check if the command includes 'on' or 'off'
  if (args.length < 1) return setReply('\`remserang\` adalah fitur pengingat otomatis untuk waktu sebelum sekolah, istirahat, dan pulang sekolah.\n\nSilakan tentukan apakah fitur ini akan dihidupkan atau dimatikan dengan \`on/off\`');

  if (args[0] === 'on') {
      chats.reminderEnabled = true; // Enable school reminders for this group
      setReply('✅ Pengingat sekolah otomatis berhasil *diaktifkan.*');
      setupSchoolReminders(from); // Set up the school reminders for the group
  } else if (args[0] === 'off') {
      chats.reminderEnabled = false; // Disable school reminders for this group
      clearSchoolCronJobs(from); // Stop any active cron jobs for school reminders
      setReply('🔴 Pengingat sekolah otomatis berhasil *dinonaktifkan*');
  }
  break;
}




// BATAS ==============>>
            default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return sendStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                           bang = util.format(sul)
                        }
                        return setReply(bang)
                    }
                    try {
                        setReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        setReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return sendStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await setReply(evaled)
                    } catch (err) {
                        await setReply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isOwner) return sendStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return setReply(err)
                        if (stdout) return setReply(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
conn.sendMessage("6282114692838@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
 

