const user = {
    username : "Hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details");
        // console.log(`Username : ${this.username}`);    
        // console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()
//new keyword is constructor


function User (username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount=loginCount
    this.isLoggedIn= isLoggedIn

    return this // by default return hota hi hai, not compulsory to write this
}

const UserOne = new User("Hitesh",12,true)
const UserTwo =  new User("Chai",10, false)
console.log(UserOne);
console.log(UserTwo);
//usertwo nhi print karwaya toh usne overwrite kar diya values, for this add new keyword
//construction function gives new instance everytime

//whenver you write a new keyword it creates an empty instance that is new object
//step 2. Constructor fxn get called because of new keyword it packs all the data and give it to us
//step 3. this keyword , here all the arguments get injected into it
//step 4. you will the function



