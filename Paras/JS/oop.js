// class Animal{
//     // constructor(){
//     //     console.log("Object is created.....")
//     // }
//     constructor(name){
//         console.log(name)
//     }
//     eats(){
//         console.log("Kha rha hoon")
//     }
//     jumps(){
//         console.log("Kood rha hoon")
//     }
// }

// class Lion extends Animal{
//     constructor(){
//         super('Lion')
//         console.log("Object is creater")
//     }
// }

// // let a =new Animal('Lion')
// // a.eats();
// // a.jumps();

// let b=new Lion()
// b.eats();


const user = {
  firstName: "John",
  lastName: "Doe",

  // Getter
  get fullName() {
    
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

// Accessing the getter (Notice: NO parentheses like a normal function call)
console.log(user.fullName); // Output: John Doe

// Accessing the setter (Notice: Uses assignment operator)
user.fullName = "Jane Smith"; 

console.log(user.firstName); // Output: Jane
console.log(user.lastName);  // Output: Smith
