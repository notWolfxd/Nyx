const fetch = require("node-fetch");

class Client {

   constructor(key) {
   
   const key = process.env.HYPIXEL_TOKEN
    }
     async getPlayer (message, player = '') {
       const dataName = await fetch(`https://api.mojang.com/users/profiles/minecraft/${player}`);
       const respName = JSON.parse( await dataName.text() );
       const playerName = respName.name
     
       const hypixelPlayerData = await fetch(`https://api.hypixel.net/player?key=${key}?name=${playerName}`);
       const hypixelPDResp = JSON.parse( await hypixelPlayerData.text() );
       
       if ( hypixelPDResp.success ) {
          return hypixelPDResp
        }
        else console.log(hypixelPDResp.cause || response)
          }
         
      }

module.exports = Client
