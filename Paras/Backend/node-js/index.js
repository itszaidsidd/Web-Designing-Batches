var slugify = require('slugify')

let a=slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
let b=slugify('some stri(@#%13ng', '_')  // some_string
console.log(b)


// npm init
// npm init -y