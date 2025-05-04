// // for loop
// // for(initialisation; condition; updation) {
// //do something 
// // }
// for(let i =1; i<=5; i++) {
//     console.log(i);
// }

// for(let m =10; m>=1;m = m-3) {
//     console.log(m);
// }
// for(let n=1; n<=15; n=n+2 ) {
//     console.log(n);
// }

// for(let p=2; p<=10; p=p+2 ) {
//     console.log(p);
// }

// for(let q=5; q<=50; q=q+5 ) {
//     console.log(q);
// }

// let n = prompt("write your number");
// n = parseInt(n);
// for(r=n; r<=n*10;r=r+n ){
//     console.log(r);
// }


// // Nested for loops
// for(let i=1; i<=3; i++) {
//     console.log('outer loop ${i}');
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// // while loop
// let i = 1;
// while(i<=5) {
//     console.log(i);
//     i++;
// }

// let i=5;
// while(i>=1){
//     console.log(i);
//     i--;

// }

// let i = 0;
// while(i<=20) {
//     console.log(i);
//     i=i+2;
// }

// // Favourite Movie
// const favMovie = "avatar";
// let guess = prompt("Guess my favourite movie");
// while( (guess != favMovie)&&(guess != "quit")) {
//     console.log("wrong guess");
//     guess =  prompt("Wrong guess.Please try again!");
// }

// if(guess==favMovie){
//    console.log("congrats!!"); 
// }
// else{
//     console.log("You Quit");
// }

// // break keyword
// let i = 1;
// while(i<=5) {
//     if(i==3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we used break at 3");


// // Loops with Arrays
// let fruits =["mongo","apple","banana","litchi","orange"];
// fruits.push("pineapple")
// for(let i=0;i<fruits.length;i++) {
//     console.log(i,fruits[i]);
// }


// // nested loops with nested arrays
// let heroes = [
//     ["ironman","spiderman","thor"],
//     ["superman","wonder woman","flash"]
// ]
// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i],heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++) {
//         console.log(`j=${j},${heroes[i][j]}`);

//     }
// }

// let student = [ ["aman", 95],["shradha",94.4], ["karan",100]];

// for(let i=0;i<student.length; i++) {
//     console.log(`info of student #${i+1}`);
//     for(let j=0; j<student[i].length; j++) {
//         console.log(student[i][j]);
//     }
// }

// // for of loop
// let fruits = ["mango", "apple", "banana","orange","litchi"];
// for(fruit of fruits) {
//     console.log(fruit);
// } 

// for(char of "apnacollege") {
//     console.log(char);
// }

// // Nested for of loops 
// let heroes = [
//        ["ironman","spiderman","thor"],
//          ["superman","wonder woman","flash"]
// ]
// for(list of heroes) {
//     for (name of list) {
//         console.log(name);
//     }
   
// }

// Todo App
let todo = [];
let req = prompt("please enter your request");
while(true) {
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list") {
        console.log("---------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);

        }
        console.log("---------");
    }else if(req =="add"){
        let task = prompt("please enter task you want to add");
        todo.push(task);
        console.log("task added");

    } else if(req == "delete") {
        let idx = prompt("please enter the task index ")
        todo.splice(idx,1);
        console.log("task deleted"); 
    }
    else {
        console.log("wrong request");
    }
    req = prompt("please enter your request");
}