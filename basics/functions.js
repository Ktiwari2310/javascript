// function saymyname() {
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");   
// }

// saymyname();
// saymyname();
// saymyname();

// function to add to numbers

function add(num1,num2) {
    console.log(num1+num2);
}

add(5,6); 

function subtract(num1,num2) {
    return num1-num2
}

const res = subtract(11,9)
// console.log(res);
console.log("Result : ", res);

function loggedin(username = "Guest"){
    return `${username} just logged in`
}

console.log(loggedin());   // no argument the takes default "Guest"

