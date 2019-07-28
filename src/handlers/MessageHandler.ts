import { Message, User } from "discord.js";
import parser from '../parser'
import Formatter from '../formatter'

interface IMessageHandler {
    settings: IMessageHandlerSettings;
}

interface IMessageHandlerSettings {

    startCommandToken?: string
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



// function carveMessage(msg: string, symbol: string): any {
//     const carved = msg.split(" ")
//     if(carved[0].length !== symbol.length && carved[0] !== symbol) return false
//     carved.shift()
//     return carved.join("")
// }


/*
    Just add ideas here OR make a readme.md, i dunno.

    Discordjs has alot of premade methods that handles 
    formatting, editing, tagging, listening to reactions, and much more.

    Random ideas and thoughts

    So ideas for commands and actions could be
    Meme game.
        - 2 or more players involved
        - chat gets locked.
        - contestants msg their meme to the bot
        - bot post them anonymously to the locked "game" chat
        - players gets to vote with reactions.
        - winner gets cash
        - loser gets perm ban
    
    Ideas for custom functionality
    Soundboard.
        - Join voice room
        - commands for rec pause stop
        - bot records snippets
        - bind snippets to aliases
        - play them at will
    
        




*/

/*
    Command examples
    start token for command: yo
    kick                   : yo kick @user|@role|@everyone|@members in 1h
    ban                    : yo ban @user|@role|@everyone|@members for 10h10m40s
    rename                 : yo rename @user|@role|@everyone|@members to $name for? 10h10m40s?

    Build commands?
     - Format -
    (prefixToken) (predicate) (anchors )* ($|%|#string_interpolation)




    Text triggers? examples
    stop being such a bitch bro  ->  stop being such a bitch, bro
                               \__  .replace(/(?<=bitch) (bro)/, ", \1")
    send nudes                   ->  reply("u gay").ban()






*/

const settings = {
    startCommandToken: "yo",
    ignoreGuilds: false,

}

class MessageHandler implements IMessageHandler {
    settings: IMessageHandlerSettings;

    constructor(settings = { startCommandToken: "yo",  }) {
        this.settings = settings;


    }

    @binder
    onMessage(msg: Message) {
        const { author, channel } = msg;
        if(author.bot) return null;


        // const carved = carveMessage(msg.content, "eval")
        // if(carved) {
        //     const formatter = new Formatter()
        //     channel.send(formatter.tagEveryone.type("hello").inspect())
        //     return
        // }


        return channel.send(`Stfu <@${"everyone"}>`); 
    }

    prefixCmd(msg: Message) {
        if(msg.content.startsWith(this.settings.command_token!)) {
  
        }

    }
    
    mentions(msg: Message) {
        const {
            users,
            channels,
            everyone,
            roles,
            members,
        } = msg.mentions

    }


}


export default MessageHandler;
