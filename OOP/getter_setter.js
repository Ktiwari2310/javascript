class User {
    constructor(email, password){
        this.email= email;
        this.password= password
    }
    //variables pe getter setter laga sakte hai


    get email (){
        return this._email.toUpperCase()
        // return "Cannot have access"
    }

    set email(value){
        this._email = value
    }


    //get karte time woh upper case me ho rha hai
    get password(){
        return this._password.toUpperCase()
    }

    //set karte time woh upper case me nhi ho rha hai
    set password(value){
        this._password= value
    }
}

const Khushboo = new User("beingkt@gmail.com" , "abc")
console.log(Khushboo.password);
console.log(Khushboo.email);
//props ka access sabko nhi dena chahte


//old method to declare them 

//function based getter setter
// function User(email, password){
//     this._email= email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//     get : function(){
//         return this._email.toUpperCase()
//     },
//     set : function(value){
//         this._email= value
//     }    
//     })
// }

// const chai = new User("chai@chai.com", "abc")
// console.log(chai.email);
//same work


//object based getter setter
// const User = {
//     _email : 'chai@fb.com',
//     _password : "abc",

//     get email (){
//         return this._email.toUpperCase()
//     },

//     set email(value){
//         this._email=  value
//     }
// }

// const tea = Object.create(User)
// console.log(tea.email);








