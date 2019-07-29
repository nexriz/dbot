function replacer(str: string, ctx: object): string {
 const searchExp = new RegExp(Object.keys(ctx).join("|"), "g")
 return str.replace(searchExp, results => {
  return ctx[results]
 })
}



const commands = {
 /**
  * ```
  *  "Welcome to $guild, $author. Banned people today: $banstoday."
  * ```
  */
 "welcome": (ctx: object) => replacer("Welcome to $guild, $author. Banned people today: $banstoday.", ctx),
//   /**
//   * ```
//   *  "Welcome to $guild, $author. Banned people today: $banstoday."
//   * ```
//   */
//  "welcome": ctx => replacer("Welcome to $guild, $author. Banned people today: $banstoday.", ctx),
//   /**
//   * ```
//   *  "Welcome to $guild, $author. Banned people today: $banstoday."
//   * ```
//   */
//  "welcome": ctx => replacer("Welcome to $guild, $author. Banned people today: $banstoday.", ctx),
//   /**
//   * ```
//   *  "Welcome to $guild, $author. Banned people today: $banstoday."
//   * ```
//   */
//  "welcome": ctx => replacer("Welcome to $guild, $author. Banned people today: $banstoday.", ctx)
//  , /**
//  * ```
//  *  "Welcome to $guild, $author. Banned people today: $banstoday."
//  * ```
//  */
// "welcome": ctx => replacer("Welcome to $guild, $author. Banned people today: $banstoday.", ctx)
}


