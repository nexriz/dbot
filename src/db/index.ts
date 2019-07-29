import { Db } from "rethinkdb"




class DB {
  r: any
  conn: any
  constructor(rethinkdb, conn) {
    this.r = rethinkdb
    this.conn = conn

  }

  changes(table: string, callback: () => void) {
    this.r.table(table).changes().run(this.conn, callback)
  }
}




export default Db
