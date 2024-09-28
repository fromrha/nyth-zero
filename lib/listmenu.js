const chalk = require('chalk')
const fs = require('fs')

const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

global.menumenhara = (prefix) => {
return (`Tekan Menu di bawah ini untuk memulai`)}

global.menugrup = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＧＲＯＵＰ 〉 ⋟ ┈${gris}

• afk
• security
• tagadmin
• reqjoin
• opentime
• closetime
• add
• kick
• kickall
• promote
• demote
• promoteall
• demoteall
• setnamegc
• setdesc
• setppgc
• delppgc
• tagall
• totag
• hidetag
• gc
• del
• intro
• jodohku
• jadian
• getcon
• contag`)}

global.menukelas = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＫＥＬＡＳ 〉 ⋟ ┈${gris}
  
  • presensis
  • presensie
  • presensid
  • listpresensi
  • dbpresensi
  • presensi
  • listdosen
  • profildosen
  • listmhs
  • snpmhs
  • snmhs
  • listjadwal
  • listpj
  • listtugas
  • addtugas
  • rmtugas
  • arctugas
  • restoretg
  • rmarctg
  • mkgroup
  • listkelompok
  • rmgroup
  • remmatkul
  • rempresensi
  • remserang
`)}

global.menugame = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＧＡＭＥ 〉 ⋟ ┈${gris}

• tebakkata
• tebaklirik
• tebakgambar
• tebakkimia
• tekateki
• susunkata
• siapaaku
• mtk
• suit
• limit
`)}

global.menuai = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＡＩ 〉 ⋟ ┈${gris}

• Chatgpt
•
•
•`)}

global.menudownload = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＤＯＷＮＬＯＡＤ 〉 ⋟ ┈${gris}

• play
• ytmp3
• ytmp4
• tiktok
• tiktokaudio
• ig
• `)}

global.menutools = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＴＯＯＬＳ 〉 ⋟ ┈${gris}

• ssweb
• tourl
• translate
• pinterest
• remini
• google `)}

global.menusticker = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＳＴＩＣＫＥＲ 〉 ⋟ ┈${gris}

• sticker
• swm
• emojimix
• gurastick
`)}

global.menuconvert = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＣＯＮＶＥＲＴ 〉 ⋟ ┈${gris}

• kodebahasa
• tts
• toimg
• tomp4
• toaudio
• tomp3
• tovn
• togif
• toonce
• toptv
• bass
• blown
• deep
• earrape
• fast
• fat
• nightcore
• reverse
• robot
• slow
• smooth 
• squirrel
• terbalik
• volvideo
• volaudio
`)}

global.menusettings = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＳＥＴＴＩＮＧＳ 〉 ⋟ ┈${gris}

• setppbot
• setbio
• setnamebot
• addbadword
• delbadword
• resetuser
• resethit
• restart
• delsampah
• getsession
• clearssion
`)}

global.menustorage = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＳＴＯＲＡＧＥ 〉 ⋟ ┈${gris}

• addvn
• delvn
• listvn
• addvideo
• delvideo
• listvideo
• addimage
• delimage
• listimage
• addsticker
• delsticker
• liststicker
• addapk
• delapk
• listapk
• addzip
• delzip
• listzip
• addpdf
• delpdf
• listpdf`)}

global.menuowner = (prefix) => {
return (`${gris}┈ ⋞ 〈 ＯＷＮＥＲ 〉 ⋟ ┈${gris}

• autorecord
• addowner
• delowner
• listowner
• addprem
• delprem
• listprem
• addtugas
• rmtugas
• addlimit
• dellimit
• block
• unblock
• list
• addtitle
• deltitle
• listgc
• join
• left 
• bc
• bcgc
• bcmem`)}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})