import { MessageHandler } from './handlers'
import { DiscordAPIError, Client,  } from 'discord.js';

class Dbot {
 // Handlers
 messageHandler: MessageHandler = new MessageHandler()



 // -----
 dbot!: Client
 
 // 

 constructor(client: Client) {
  this.dbot = client

 }

}

export default Dbot