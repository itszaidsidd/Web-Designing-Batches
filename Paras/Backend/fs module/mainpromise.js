import fs from "fs/promises"

let a = await fs.readFile('abc2.txt')
// console.log(a.toString())

// let b = await fs.writeFile('abc2.txt','\n\n\n\n\nThis is amazing promise')
let b = await fs.appendFile('abc2.txt','\n\n\n\n\nThis is amazing promise')
console.log(a.toString(),b)

// npm init -y
// npm i fs