// // fUNCTION
// function hello(){
//     console.log("hello");
// }

// function printName() {
//     console.log("apna college");
//     console.log("Gaurav Tiwari");

// }

// function print1to5(){
//   for(let i=1; i<=5; i++){
//     console.log(i);
//   }  
// }

// function isAdult() {
//     let age =18;
//     if(age>=18){

//         console.log("Adult");
//     }
//     else{
//         console.log("Young");
//     }
// }
// printName
// isAdult();
// print1to5();

// // QUESTION1
// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");

// }

// printPoem();

// // PRACTICE QUESTION 2
// function rollDice() {
// let rand = Math.floor(Math.random() *6)+1;
// console.log(rand);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();

// // Function With Argument
// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("Gaurav", 21);
// printInfo("Sakshi", 20);

// // Practice Question 3
// function calAvg(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);

// }
// calAvg(2,4,6);

// // Practice Question 4
// function printTable(n) {
//     for(let i=n; i<=n*10; i+=n) {
//         console.log(i);
//     }

// }
// printTable(5);

// // Return Keyword
// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(sum(3,4),3));

// // Practice Question 5
// function getSum(n) {
//    let sum = 0;

//    for(let i=1; i<=n; i++){
//     sum += i;
//    } 
//    return sum;
// }

// //Higher order function
// function multipleGreet(func,count) {
//     for (let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet,1000);

// Higher order functions
let odd =  function(n){
    console.log(!(n%2 == 0));
}

let even = function(n) {
    console.log(n%2 == 0);
}
