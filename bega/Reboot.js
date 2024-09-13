const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"🚨"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝙱𝙰𝚁𝙰𝙺𝙰-𝙼𝙳-𝙱𝙾𝚃 𝚁𝙴𝚂𝚃𝙰𝚁𝚃𝙸𝙽𝙶🚨");

  exec("pm2 restart all");
  

  



})
