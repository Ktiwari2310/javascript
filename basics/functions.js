// function saymyname() {
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");   
// }

const { useContext } = require("react");

// saymyname();
// saymyname();
// saymyname();

// function to add to numbers

function add(num1,num2) {
    // console.log(num1+num2);
}

add(5,6); 

function subtract(num1,num2) {
    return num1-num2
}

const res = subtract(11,9)
// console.log(res);
// console.log("Result : ", res);

function loggedin(username = "Guest"){
    return `${username} just logged in`
}

// console.log(loggedin());   // no argument the takes default "Guest"

// for eg you have a cart, you have no idea how many items customer will be adding and you need to add it

function calculatecartprice(...num1){  //... is rest
    return num1;
    
}
//  console.log(calculatecartprice(200, 500, 7000));   //[ 200, 500, 7000 ]  return as array



//  function calculatecartprice(val1, val2, ...num1){  //... is rest
//     return num1;
    
// }
//  console.log(calculatecartprice(200, 500, 7000)); // only [7000]


const user = {
    username : "Khushboo",
    price : 500

}

function handleobject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleobject(user)
handleobject({
    username: "KhushbooTiwari",
    price : 499
})
// we have passed object now lets pass array

const myarray =[200,400, 600]
let sum =0
function handlearray(getarray){
   for (let i=0;i< getarray.length;i++) {

    sum = sum + getarray[i]
   }
   return sum;
    
    
}

// console.log(handlearray(myarray));
// console.log(handlearray([200,1000,5000]));


// console.log(handlearray(calculatecartprice(200, 500, 7000,5000,8000)));  // passing function in function

// three data types--> var, const, let 
// const and let only limited to the scope but var is not limited

//chhote bado se ice-cream le sakte hai but bade chhoto se nhi

function one(){
    const username = "Khushboo"

    function two(){
        const website = "Youtube"
        console.log(username);   // prints Khushboo
        
    }
    // console.log(website);   --> cant acces as it is local 
    
    // two();
}

one();

if(true){
    const username = "Kt"
        if(username==="Kt"){
            const website=" Youtube"
            // console.log(username+website);
            
        }
        // console.log(website);  --> cannot access this
        
}
// console.log(username);  //--> cannot access this
/*
javascipt execution useContext
browser --> global ec "this"
js is single threaded

1.global ec
2.functional ec
3.eval ec

how js execute--> 2 phase, 1. memory creation phase  2. execution phase
1.--> memory is located nd execution in phase 2

sabse pehle this me locate hota hai code with global execution
memory phase me variables rakha jata hai with undefined, function me jaati hai defintion fxn ki
1st cycle

now cycle 2 execution pahse
variables ke andar actual values jaati hai, function call--> again an execution context -- new variable environment + execution thraed that means ab function ke liye memory pahse and execution pahse dono hota hai wapas jab bhi fxn call hota hai
"return value" global execution context me ho jaati hai  
ek baar kaam hone ke baad woh delete ho jata hai


call stack--> global enecution context/ environment
jab fxn execute karna hota hai toh satck me le jaate hai , jab execute ho jata hai toh hata dete hai
ek fxn me fxn me kya hota hai--> kon bahar pehle niklega? LIFO chlta hai that means sabse last me jane wala pehle execute hota hai


*/


 