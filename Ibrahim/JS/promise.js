let getData=()=>{
    return new Promise((resolve,reject)=>{
        let n=Math.random()
        if(n<0.5){
            reject('Chali ni bhai')
        }
        else{
            setTimeout(()=>{
                resolve('ACE')
            },2000)
        }
    })
}

console.log('abc')
console.log('xyz')
// console.warn(Math.random())

let data=getData()
data.then((v)=>{
    console.log(v)
}).catch((err)=>{
    console.log(err)
})
// console.log(data)

console.log("pqr")

