const fetch = require("node-fetch");

class Client {

   constructor(key) {
   
    this.key = key
    }
     async getPlayer (message, player = '') {
       const dataName = await nodef(`https://api.mojang.com/users/profiles/minecraft/${player}`);
       const respName = JSON.parse( await dataName.text() );
       const playerName = respName.name
     
       const hypixelPlayerData = await nodef(`https://api.hypixel.net/player?key=${this.key}?name=${playerName}`);
       const hypixelPDResp = JSON.parse( await hypixelPlayerData.text() );
       
       if ( hypixelPDResp.success ) {
          return hypixelPDResp
        }
        else console.log(hypixelPDResp.cause || response)
          }
         
      }

   }

module.sxports = Client