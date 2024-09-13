'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "test",
  'reaction': "🙂‍↔️",
  'nomFichier': __filename
}, async (_0x1e76fa, _0x562277, _0x45a4e6) => {
  console.log("Commande saisie !!!s");
  await _0x562277.sendMessage(_0x1e76fa, {
    'video': {
      'url': "https://files.catbox.moe/qq0lcf.mp4"
    },
    'caption': "*𝙱𝙾𝚃 𝙸𝚂 𝙾𝙽𝙻𝙸𝙽𝙴 🫠* \n\n 𝙱𝙰𝚁𝙰𝙺𝙰-𝙼𝙳 𝙸𝚂 𝙲𝚄𝚁𝚁𝙴𝙽𝚃𝙻𝚈 𝚆𝙾𝚁𝙺𝙸𝙽𝙽𝙶 𝙾𝙽 𝙰 𝙶𝙾𝙾𝙳 𝚂𝙿𝙴𝙴𝙳.🫠"
  });
});
console.log("mon test");
