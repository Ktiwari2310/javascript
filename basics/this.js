const user = {
    username: "Khushboo",
    email: "beingkt.23@gmail.com",
    price: 399,
    welcomemsg : function(){
        console.log(`${this.username}, Welcome to website`);   // this means current content that means only this scope  
        // console.log(this);   // prints both the objects chnage in only name
          
    }


}
// user.welcomemsg();
// user.username= "Sam"
// user.welcomemsg();
// console.log(this);           //{} empty object   if this is run in browser it shows window not empty that is global object = window




// function one (){
//     let username = "Khushboo"
    // console.log(this);
    
//     console.log(this.username);   // undefined , it only works in object not in function
    
// }
// one()

//arrow function()

// const chai = function (){
//      let username = "Khushboo"
//     console.log(this.username);  // undefined

// }
// chai()

const chai =  () =>{                  //this is arrow function
     let username = "Khushboo"
     console.log(this);               //{}
     
    // console.log(this.username);  // undefined

}
// chai()

// const addTWo = (num1,num2) => {
//     return num1 + num2
// }            basic arrow function

//now implicit return has only one line of statement   no need to write return keyword whereas in explicit return we use the keyword return
// const addTWo = (num1,num2) =>  num1 + num2
// const addTWo = (num1,num2) =>  (num1 + num2)
// const addTWo = (num1,num2) => { username : "Hitesh"}  // undefined
const addTWo = (num1,num2) => ({ username : "Hitesh"})


console.log(addTWo(3,5));



