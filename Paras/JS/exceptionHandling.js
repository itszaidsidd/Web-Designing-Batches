let a=prompt("Enter first number")
let b=prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

// console.log("The sum is ",sum)
function main(){

    try{
        console.log("The sum is ",sum*x)
        return true
    } catch(error){
        console.log("Error agya bhai")
        // console.log(error.name)
        // console.log(error.message)
        // console.log(error.stack)
        return false
    } finally{
        console.log("files are being closed and connection is being closed")
    }
}

let c = main()
