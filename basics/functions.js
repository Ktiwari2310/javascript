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
 console.log(calculatecartprice(200, 500, 7000));   //[ 200, 500, 7000 ]  return as array



//  function calculatecartprice(val1, val2, ...num1){  //... is rest
//     return num1;
    
// }
//  console.log(calculatecartprice(200, 500, 7000)); // only [7000]


const user = {
    username : "Khushboo",
    price : 500

}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleobject(user)
handleobject({
    username: "KhushbooTiwari",
    price : 499
})
// we have passed object now lets pass array

const myarray =[200,400, 600]

function handlearray(getarray){
  
    return getarray[1]+ getarray[0]+getarray[2]
    
}

// console.log(handlearray(myarray));
// console.log(handlearray([200,1000,5000]));


console.log(handlearray(calculatecartprice(200, 500, 7000)));  // passing function in function

// three data types--> var, const, let 
// const and let only limited to the scope but var is not limited



 