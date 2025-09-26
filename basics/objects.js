// Object.create  --> makes singleton method through constructor
 // using symbol a primitive datatye

 const mysym = Symbol("key1")


// object literals, have key : value

const jsuser =  {
    name : "Khushboo",
    "Full name": "khushboo Tiwari",   //--> cannot access with . use square notation for this
    age : 19,
    [mysym]: "mykey1",
    location :"Mumbai",
    email: "beingkt.23@gmail.com",
    isloggedin : true,
    lastloggedin : ["Monday", "Saturday"]
}

// to acces user 
// 1st way
// console.log (jsuser.name);
// // 2nd way 
// console.log(jsuser["age"])
// console.log(jsuser[mysym])

// to change the value of object
jsuser.email= "1032240821@tcetmumbai.in"
// console.log (jsuser["email"])

// if dont want to change the value then freeze it
// Object.freeze(jsuser)
jsuser.email= "Khushboo@tcetmumbai.in"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("Good morning"); 
}

jsuser.greeting1= function(){
    console.log(`Good morning,${this.name} `);   // referring the name from the object
}
// console.log(jsuser.greeting());
// console.log(jsuser.greeting1());



// const jsuser1 = {}  --> a non singleton objects
// now objects with singleton that is with constructor
  //--> this is a singleton objects
const jsuser1 ={}

jsuser1.id = "123abd"
jsuser1.name ="Vivek"
jsuser1.isloggedin= false

// console.log(jsuser1);

const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Khushboo",
            lastname: "Tiwari"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);
// to merge objects
const obj1 = { 1: "a", 2:"b", 3:"c"}
const obj2 = { 4: "a", 5:"b", 6:"c"}

// const obj3 = Object.assign({}, obj1, obj2)  1st way
const obj3 = {...obj1, ...obj2}  // 2nd way
// console.log(obj3);

// values from the db 

const users= [
    {
        id: 1,
        email: "kt@gmail.com"
    },
     {
        id: 1,
        email: "kt@gmail.com"
    },
     {
        id: 1,
        email: "kt@gmail.com"
    },
     {
        id: 1,
        email: "kt@gmail.com"
    }

]

users[1].email
console.log(jsuser1);

console.log(Object.keys(jsuser1));
console.log(Object.values(jsuser1));
console.log(Object.entries(jsuser1));

console.log(jsuser1.hasOwnProperty(`isloggedout`));








