const fs = require('fs')

global.fotomenfess = fs.readFileSync("./confess-gospel-pic_orig.jpg")
global.owner = ["6285171226069"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Saya adalah bot WhatsApp confess 👋 ketik .confess untuk memulai chat.
Join grub bot agar tau informasi bot" baru dari owner 🤗.
Grub wa : https://s.id/1GIp8
`
}
}
