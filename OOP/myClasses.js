// class User {
//     constructor(username, email, password){
//         this.username= username
//         this.email = email
//         this.password= password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeuserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai", "chai@fb.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeuserName());

// bts

function UserOne(username, email, password){
    this.username= username
    this.email = email
    this.password= password  
}

UserOne.prototype.encryptPassword= function(){
    return `${this.password}abc`
}


UserOne.prototype.changeuserName= function(){
    return `${this.username.toUpperCase()}`
}

const tea = new UserOne("tea", "tea@fb.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeuserName());






