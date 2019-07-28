import { MessageHandler } from './handlers'
import { DiscordAPIError, Client,  } from 'discord.js';

class BotHandler {
 // Handlers
 messageHandler: MessageHandler = new MessageHandler()



 // -----
 dbot!: Client

 // 

 constructor(client: Client) {
  this.dbot = client
 }

}

export default BotHandler