const accountId = 144553 // change in value not allowed
let accountEmail = "mayur@google.com" // change in value allowd
var accountPassword = "" // prefer not to use
accountCity = "Surat" // prefer not to use
let accountState; // variable is undefined

// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "mp@mp.com"
accountPassword = "21212121"
accountCity = "benguluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])