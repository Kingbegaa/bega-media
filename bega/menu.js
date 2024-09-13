const {
  zokou
} = require(__dirname + "/../framework/zokou");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
zokou({
  'nomCom': "menu",
  'categorie': "General"
}, async (_0x242c41, _0x7e045, _0x2548fa) => {
  let {
    ms: _0x3136fb,
    repondre: _0x247b6d,
    prefixe: _0x3ede80,
    nomAuteurMessage: _0x38a131,
    mybotpic: _0x5164fc
  } = _0x2548fa;
  let {
    cm: _0x1eb586
  } = require(__dirname + "/../framework//zokou");
  var _0x443d1b = {};
  var _0x3d00f2 = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x3d00f2 = "private";
  }
  _0x1eb586.map(async (_0x359147, _0x283436) => {
    if (!_0x443d1b[_0x359147.categorie]) {
      _0x443d1b[_0x359147.categorie] = [];
    }
    _0x443d1b[_0x359147.categorie].push(_0x359147.nomCom);
  });
  moment.tz.setDefault("EAT");
  const _0x496af2 = moment().format("HH:mm:ss");
  let _0x10a699 = "\n╭──────𝙱𝙰𝚁𝙰𝙺𝙰--𝚇𝙼𝙳──────❂\n┊❂╭─────────────────❂\n┊✺┊ *User* : " + s.OWNER_NAME + "\n┊✺┊ *Mode* : " + _0x3d00f2 + "\n┊✺┊ *Commands* : 240\n┊✺┊ *Time* : " + _0x496af2 + " \n┊✺┊ *Ram* : " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + "\n┊❂╰─────────────────❂\n╰───────────────────❂ \n\n";
  let _0x2a221b = " \n*╭════════════════════════❂*\n";
  for (const _0x553f3d in _0x443d1b) {
    _0x2a221b += "*╭────❂* *" + _0x553f3d + "* *❂*";
    for (const _0x3ac13d of _0x443d1b[_0x553f3d]) {
      _0x2a221b += " \n*┊* " + _0x3ac13d;
    }
    _0x2a221b += "\n*╰═════════════❂* \n";
  }
  _0x2a221b += "\n \n *𝙼𝙰𝙳𝙴 𝙱𝚈 𝙱𝙰𝚁𝙰𝙺𝙰 𝙲𝙷𝙰𝙲𝙷𝙰 𝙱𝙴𝙶𝙰*\n*╰═════════════════════════❂*\n";
  var _0x2d51c8 = _0x5164fc();
  if (_0x2d51c8.match(/\.(mp4|gif)$/i)) {
    try {
      _0x7e045.sendMessage(_0x242c41, {
        'video': {
          'url': _0x2d51c8
        },
        'caption': _0x10a699 + _0x2a221b,
        'footer': "Je suis *Baraka-MD*, développé par Djalega++",
        'gifPlayback': true
      }, {
        'quoted': _0x3136fb
      });
    } catch (_0x57059d) {
      console.log("🥵🥵 Menu erreur " + _0x57059d);
      _0x247b6d("🥵🥵 Menu erreur " + _0x57059d);
    }
  } else {
    if (_0x2d51c8.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x7e045.sendMessage(_0x242c41, {
          'image': {
            'url': _0x2d51c8
          },
          'caption': _0x10a699 + _0x2a221b,
          'footer': "*Baraka-Tech*"
        }, {
          'quoted': _0x3136fb
        });
      } catch (_0x2a786d) {
        console.log("🥵🥵 Menu erreur " + _0x2a786d);
        _0x247b6d("🥵🥵 Menu erreur " + _0x2a786d);
      }
    } else {
      _0x247b6d(_0x10a699 + _0x2a221b);
    }
  }
});
