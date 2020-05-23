const fetch = require("node-fetch");

   class Client {

     constructor(key, profile, productID) {
        this.key = key;
        this.profile = profile;
        this.productID = productID;
                      }

      
   async getPlayerStatistics (message, player = '') {
       
      /*
       * Get a player's Minecraft name - for use in later functions.
       * @param {string} player - identifier for the target, an IGN or UUID.
       */
      
       const getPlayerNameData = await fetch(`https://api.mojang.com/users/profiles/minecraft/${player}`);
       const getPlayerNameResponse = JSON.parse( await getPlayerNameData.text() );
       const getPlayerNameDefinition = getPlayerNameResponse.name;
      
      /*
       * Get a player's Hypixel gamemode statistics.
       * @param {string} player - identifier for the target, an IGN.
       */
     
       const getPlayerStatisticsData = await fetch(`https://api.hypixel.net/player?key=${this.key}&name=${getPlayerNameDefinition}`);
       const getPlayerStatisticsResponse = JSON.parse( await getPlayerStatisticsData.text() );
       
         if (getPlayerStatisticsResponse.success) {
            return getPlayerStatisticsResponse
           }
         else console.log(getPlayerStatisticsResponse.cause || response)
         }

   async getPlayerSession (message, player = '') {
      
      /*
       * Get a player's Minecraft name - for use in later functions.
       * @param {string} player - identifier for the target, an IGN or UUID.
       */
      
       const getPlayerNameData = await fetch(`https://api.mojang.com/users/profiles/minecraft/${player}`);
       const getPlayerNameResponse = JSON.parse( await getPlayerNameData.text() );
       const getPlayerNameDefinition = getPlayerNameResponse.name;
      
      /*
       * Get a player's current or last session on Hypixel.
       * @param {string} player - identifier for the target, an IGN.
       */
   
       const getPlayerSessionData = await fetch(`https://api.hypixel.net/session?key=${this.key}&name=${getPlayerNameDefinition}`);
       const getPlayerSessionResponse = JSON.parse( await getPlayerSessionData.text() );
       
         if (getPlayerSessionResponse.success) {
            return getPlayerSessionResponse
           }
         else console.log(getPlayerSessionResponse.cause || response)
         }
            
   async getPlayerFriends (message, player = '') {
      
      /*
       * Get a player's Minecraft name - for use in later functions.
       * @param {string} player - identifier for the target, an IGN or UUID.
       */
      
       const getPlayerNameData = await fetch(`https://api.mojang.com/users/profiles/minecraft/${player}`);
       const getPlayerNameResponse = JSON.parse( await getPlayerNameData.text() );
       const getPlayerNameDefinition = getPlayerNameResponse.name;
      
      /*
       * Get a player's friend list statistics on Hypixel.
       * @param {string} player - identifier for the target, an IGN.
       */
   
       const getPlayerFriendsData = await fetch(`https://api.hypixel.net/friends?key=${this.key}&name=${getPlayerNameDefinition}`);
       const getPlayerFriendsResponse = JSON.parse( await getPlayerFriendsResponse.text() );
       
         if (getPlayerFriendsResponse.success) {
            return getPlayerFriendsResponse
           }
         else console.log(getPlayerFriendsResponse.cause || response)
         }
      
   async getPlayerGuild (message, player = '') {
      
      /*
       * Get a player's Minecraft name - for use in later functions.
       * @param {string} player - identifier for the target, an IGN or UUID.
       */
      
       const getPlayerNameData = await fetch(`https://api.mojang.com/users/profiles/minecraft/${player}`);
       const getPlayerNameResponse = JSON.parse( await getPlayerNameData.text() );
       const getPlayerNameDefinition = getPlayerNameResponse.name;
      
      /*
       * Get a player's guild statistics on Hypixel.
       * @param {string} player - identifier for the target, an IGN.
       */
   
       const getPlayerGuildData = await fetch(`https://api.hypixel.net/guild?key=${this.key}&name=${getPlayerNameDefinition}`);
       const getPlayerGuildResponse = JSON.parse( await getPlayerGuildData.text() );
       
         if (getPlayerGuildResponse.success) {
            return getPlayerGuildResponse
           }
         else console.log(getPlayerGuildResponse.cause || response)
         }

   async getPlayerSkyblockProfile (message, player = '') {
      
      /*
       * Get a player's SkyBlock statistics on Hypixel.
       * @param {string} player - identifier for the target, an IGN.
       * @param {string} profile - [player.stats.SkyBlock.profile], you must get this yourself.
       */
   
       const getPlayerSkyblockProfileData = await fetch(`https://api.hypixel.net/skyblock/profile?key=${this.key}&profile=${this.profile}`);
       const getPlayerSkyblockProfileResponse = JSON.parse( await getPlayerSkyblockProfileData.text() );
       
         if (getPlayerSkyblockProfileResponse.success) {
            return getPlayerSkyblockProfileResponse
           }
         else console.log(getPlayerSkyblockProfileResponse.cause || response)
         }

    }
      


module.exports = Client
