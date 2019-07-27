import * as pegjs from 'pegjs'
import * as fs from "fs"
import * as path from 'path'

const grammar = fs.readFileSync(path.resolve(__dirname, "./expression.pegjs"), "utf8")

const parser = pegjs.generate(grammar)

console.log(parser.parse("10 + 10"))



export default parser