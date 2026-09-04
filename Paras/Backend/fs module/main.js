const fs=require("fs")

// console.log(fs)
console.log('starting')
// fs.writeFileSync('abc.txt','Paras is a good boy')
fs.writeFile('abc2.txt','Education is the key of your success', ()=>{
    console.log('done')
    fs.readFile('abc2.txt',(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile('abc2.txt',' abc',(e,d)=>{
    console.log(d)
})  
console.log('ending')
