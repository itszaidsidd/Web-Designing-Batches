// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         },4000);
//     })
// }

// async function getData(){
//     let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     // let data = await x.text()
//     console.log(data)
// }W

async function getData(){
    // A POST method example
    let x=await fetch('https://example.org/post', {
        method: 'POST', // GET, POST, PUT, DELETE
        headers: { 
        'Content-Type': 'application/json' 
        },
        // body: JSON.stringify({ name: 'New Item' })
        body: {
            "id":"123",
            "name":"Paras",
            "course":"mca"
        }
        });
}

async function main() {
    
    
    console.log("Loading modules")
    console.log("Do something");
    console.log("Load data")
    let data= await getData()
    console.log(data)  
    console.log("Process data")
    console.log("Task 2")
}
main()
// data.then((v)=>{

//     console.log(data)
    
//     console.log("Process data")

//     console.log("Task 2")
// })
