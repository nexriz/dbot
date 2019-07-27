import { User } from "discord.js";

interface IFormatter {
 inspect: () => void;
 type(txt: string): Formatter;
 tagUser(user: User): Formatter;
 code(extension: string, txt: string): Formatter;
 build(token: string): string

 readonly newline: Formatter
 readonly tagEveryone: Formatter;
 readonly tagHere: Formatter;

}

// Maybe make generic? join number /w string or just use string.
interface Payload {
 type: string,
 text: string
}


class Format {
 public payload!: Payload

 constructor(type: string, text: string) {
  this.payload = {
   type,
   text
  }
 }
 static create(type: string, text: string) {
  return new Format(type, text)
 }
 get text() {
  return this.payload.text
 }
}

class Formatter implements IFormatter{

 inspect!: () => void;

 private state: Array<Format> = []

 constructor(init?: Format) {
  this.state = this.state.concat(init!)
 }



 tagUser(user: User): Formatter {
  this.state.push(Format.create("TAG", `<@${user.id}>`))
  return this
 }

 get tagEveryone(): Formatter {
  this.state.push(Format.create("TAG", "@everyone"))
  return this
 }

 get tagHere(): Formatter {
  this.state.push(Format.create("TAG", "@here"))
  return this
 }

 get newline(): Formatter {
  this.state.push(Format.create("NEWLINE", "\n"))
  return this
 }

 type(txt: string): Formatter {
  this.state.push(Format.create("TEXT", txt))
  return this
 }



 code(extension: string, txt: string): Formatter {
  this.state.push(
Format.create("CODE", 
`${"```" + extension || ""}
${txt}
${"```"}`))
   return this
 }

 build(token: string): string {
  return this.state.map(format => format.text).join(token)
 }

}

// Formatter.prototype.inspect = function() {
//  return this.state.join(" ")
// }



export default Formatter