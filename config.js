const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="demirthdigitals@gmail.com"
global.location="Osun, Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/github.com/Demirthdigitals";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channe/";
global.website=process.env.GURL || "https://whatsapp.com/channel" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ by demirth digitals" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349159868548";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_00_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICA5LFxuICAgICAgICA1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDk0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmQWp5S1dKWTBNdGJTTlIvQ1RHa3FKMVV6czJaS1djWGxTaEhLV0R5RGdZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTk4Njg1NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVEOTQ4OUQ5QkFFQjg1REM0MUVDMzg5MTAxODQ1RDY4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODM3MDAyOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwTGluWmxsclJ0TzIzLVpMc3Y5VHhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ5M2MxNDcyLTIwYjktNDg4Ni04ODVmLTQxN2UwOWQ5MDg1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxOTksXG4gICAgICAyMDgsXG4gICAgICAxNzIsXG4gICAgICAyMTEsXG4gICAgICAyMTIsXG4gICAgICA4OCxcbiAgICAgIDE0MCxcbiAgICAgIDEwMyxcbiAgICAgIDI4LFxuICAgICAgODMsXG4gICAgICAxMDMsXG4gICAgICAxLFxuICAgICAgMjIyLFxuICAgICAgMjIxLFxuICAgICAgMzgsXG4gICAgICAyMDgsXG4gICAgICA3OCxcbiAgICAgIDE1NyxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICAxODAsXG4gICAgICAxNzgsXG4gICAgICA0OSxcbiAgICAgIDIzMixcbiAgICAgIDY3LFxuICAgICAgMjQyLFxuICAgICAgMjEwLFxuICAgICAgMTkzLFxuICAgICAgMTAwLFxuICAgICAgMTQyLFxuICAgICAgMjEzLFxuICAgICAgMTIyLFxuICAgICAgNTQsXG4gICAgICAyNDAsXG4gICAgICAyMDcsXG4gICAgICAyMDMsXG4gICAgICAyOSxcbiAgICAgIDQ4LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkhFL0lrQ0VPVDlzTE1HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJidDVrQk9YNHdKanRBdnNIUW9IeWF3NkpWL3RCNkNFWEhxUnNlNmRuN1NnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRjSmI1cmRrVGphZkF2QjJiMmsvdm1oNzNzZXMwMGNaOVdlWmp6a0NDeFBEcy9OUzJhWlR2Yko1OFFRb1RrUHptQ0ZEZUUwZTFROVFxUlF2c1VjVERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxSbGpkaXpka0xDL2FKblpKc2FFTk5CRGVldFA5Z3lLamxDSExVcExDQ0dhcFljT0kySWhEQkFSMjZ2Skh5TTVDcEEyNWFNanR2T2Q4VUNGLy84L2dRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1OTg2ODU0ODo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODIyMzYwNDA4MTg3OTA6NzVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRGVtaXJ0aFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1OTg2ODU0ODo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzNzAwMjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKemtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp6aS5qc29uIjogIntcImtleURhdGFcIjpcIkRHRHJKbmpRbkpVdjBENmtScVRpSmFYSFBPWW5Ca0ZFUEQvb3gvalpUY0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTU3Nzg1NjE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzNjM0NTY2NThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKemouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzNCszaTE3L2I3MEF2bzZUd3AxSGtjeWh0cEdVSUx0QjM5SUxnUVVtVjN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1Nzc4NTYxNyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MzY3NzMyOTU0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnprLmpzb24iOiAie1wia2V5RGF0YVwiOlwiU1N4MGZUSWtxWW1jRDVycTdqWDVCcFp2cWt4aVJZam0wU2xZMXduMi9Sdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTc3ODU2MTcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNF19LFwidGltZXN0YW1wXCI6XCIxNzE4MzY3ODgyOTI5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnpsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHlsOHVJYnJzNXBobS9ZWTIzeldFWWoyN0Q3VXh0V09mY0NJYmdheFpxWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NTc3ODU2MTcsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgzNzAwMDc3NTNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKem0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJldWxQSWZ3VTVsaFltM0MzM29lS09pWGUwSWZESEM4OE9seFNwTVBRZ0NRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1Nzc4NTYxNyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKem4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJQ1d0VG9xS3ZSMXlPUkk0OERRZ09FVlh5ZHE5WjFCRHlCaS9hMG56TUVzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU1Nzc4NTYxNyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MzcwMDE0MzYwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "mighty tech",
  ownername:process.env.OWNER_NAME|| "Demirth",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
