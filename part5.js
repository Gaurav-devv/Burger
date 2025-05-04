// // JS Object literals
// let student = {
//     name : "Shradha",
//     age: 23,
//     marks: 94.4
// };
// const item = {
//     price: 100.99,
//     discount: 50,
//     colors:  ["red", "pink"]
// };


// // Creating a post
// const post = {
//     username: "@cs.gauravtiwari",
//     content: "This is my #firstPost",
//     likes: 150,
//     reposts: 5,
//     tags: ["@apnacollege","@delta"]
// };

// // Add/Update  value
// const student = {
//     name: "Gaurav",
//     age: 23,
//     marks: 94.4,
//     city: "Delhi"
//     // go to console of index and change like student.city="mumbai"; then it will get changed.
//     // to add we simply write in console like  student.gender="male"; 
// };

// // Objects of object
// const classInfo = {
//  priyansh: {
//     grade: "A+",
//     city: "Delhi"
//  },   
// gaurav: {
//     grade: "A+",
//     city: "Noida"
//  },   
// shoaib: {
//     grade: "B+"
// }
// };

// // Array of objects
// const classInfo = [
//     {name:"Gaurav",
//         grade: "A+",
//         city:"Noida"
//     },
//     {name:"Priyansh",
//         grade: "A+",
//         city:"Pune"},
//     {name:"Shoaib",
//         grade: "A+",
//         city:"Banglore"}
// ];
 

// Mathematical object


// Guessing Game
const max = prompt("enter the max number");
console.log(max);

const random = Math.floor(Math.random() * max) + 1;

prompt("guess the number");
while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("you are right congrats!!");
        break;
    }
    else {
        guess = prompt("your guess was wrong. please try again");
    }
}