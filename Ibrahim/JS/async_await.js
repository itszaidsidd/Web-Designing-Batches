let getData=async()=>{
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            resolve(455)
        },2000)
    })
}

async function main() {
    console.log("Data Loading.....")
    let data=await getData()
    console.log(data)
}

main()

// let data=getData()
// data.then((v)=>{
//     console.log(v)
// }).catch((err)=>{
//     console.log(err)
// })
// console.log(data)


