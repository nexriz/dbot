import { Message, User } from "discord.js";

interface IMessageHandler {
    settings: IMessageHandlerSettings;
}

interface IMessageHandlerSettings {
    x?: number, 
}

function command() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Stuff from decorator', target, propertyKey, descriptor);
    }
}

/**
 * TODO:
 * Listen for commands and run actions according to command
 * Läsa från "settings", Kommando <-> Funktion (Kanal restriktion te)
 */


/*function MessageHandler(msg: Message) {
    const { author, channel } = msg;
    if(author.bot) return null;
    return channel.send(`Stfu ${tagUser(author)}`);
}*/

class MessageHandler implements IMessageHandler {
    settings: IMessageHandlerSettings;

    constructor(settings = {}) {
        this.settings = settings;
    }

    onMessage(msg: Message) {
        const { author, channel } = msg;
        if(author.bot) return null;
        return channel.send(`Stfu ${this.tagUser(author)}`); 
    }

    tagUser(user: User) {
        return `<@${user.id}>`;
    }

    @command()
    sayHi() {
        console.log('I ran')
    }
}

export default MessageHandler;
