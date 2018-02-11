

const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'your bot token here';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === '!fun') {
    // Send "pong" to the same channel
    message.channel.send("Currently playing with mice. Please stand by. ");
  }
     else if (message.content === "$loop") { 
      var interval = setInterval (function () {
        message.channel.send("Va rog donati-va alocatia si bursa scolara pe PayPal-ul cezargabriel.popescu@yahoo.com pentru a putea intretine serverul modat de minecraft! Va multumesc!")
		message.channel.send("Please donate your allowance and your scholarship on PayPal(cezargabriel.popescu@yahoo.com) to keep the modded minecraft server up! Thanks!")
      }, 6000 * 1000); 
    }
});
// Log our bot in
client.login("NDExODcxNzQ1NTAzMzk1ODQx.DWCGPg.qTEV72ByLLahr-GybfWch3l4NbA");