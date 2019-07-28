import { Message, User } from "discord.js";
import parser from './parser'
import Formatter from './formatter'

interface IMessageHandler {
    settings: IMessageHandlerSettings;
}

interface IMessageHandlerSettings {
    x?: number, 
}

// function command() {
//     return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log('Stuff from decorator', target, " | ",propertyKey, " | ", descriptor);
//     }
// }


function binder<T extends Function>(target: object, propertyKey: string, descriptor: TypedPropertyDescriptor<T>): TypedPropertyDescriptor<T> | void {    
    return {
        configurable: true,
        get(this: T): T {
            const bound: T = descriptor.value!.bind(this);
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: true,
                writable: true
            });
            return bound;
        }
    };
}


// interface Obj<T extends Function> {

// }
// const obj: Obj<> = {
//     get(this: T): T {
        
//     }
// }

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



function carveMessage(msg: string, symbol: string): any {
    const carved = msg.split(" ")
    if(carved[0].length !== symbol.length && carved[0] !== symbol) return false
    carved.shift()
    return carved.join("")
}



class MessageHandler implements IMessageHandler {
    settings: IMessageHandlerSettings;

    constructor(settings = {}) {
        this.settings = settings;

        this.onMessage = this.onMessage.bind(this)
    }

    @binder
    onMessage(msg: Message) {
        const { author, channel } = msg;
        if(author.bot) return null;

        const carved = carveMessage(msg.content, "eval")
        if(carved) {
            const formatter = new Formatter()
            channel.send(formatter.tagEveryone.type("hello").inspect())
            return
        }


        return channel.send(`Stfu <@${"everyone"}>`); 
    }
}


export default MessageHandler;
