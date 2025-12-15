//Promise is an object representing the eventual completion or failure of an async operation

const promiseOne = new Promise(function(resolve, reject){
    //Do an async tasks
    //DB calls, cryptography,network calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})

//.then() is directly connected to resolve
promiseOne.then(function(){
    console.log("Promise consumed");    
})




//one alternate method without creating a variable
new Promise(function(resolve,reject){
    setTimeout(function(){
            console.log("Async task 2");
            resolve()
            
    },1000)
}).then(function(){
    console.log("Promise 2 is consumed");
    
})




const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email : "chai@chai.com"})
    },1000)
})




promiseThree.then(function(user){
    console.log(user); //it gives all the data passed above
    
})





const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Chai", password : "123"})
        }
        else{
            reject(`ERROR: Something went wrong`)
        }
    },1000)
    
})

 promiseFour
  .then((user) => {
    console.log(user);
    return user.username
}).then ((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either resolved or rejected")
)





const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Khushboo", password : "123"})
        }
        else{
            reject(`ERROR: JS went wrong`)
        }
    },1000)

})

async function consumePromiseFive(){
   try {
     const response = await promiseFive
    console.log(response);
   } catch (error){
    console.log(error);
    
   }
    
}

consumePromiseFive()



// async function getAllUsers(){
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
    
//    const data = await response.json()
//    console.log(data);
    
//    } catch (error) {
//     console.log("Error",error); 
//    }
   
// }



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response);
    
})
.catch((error)=>{
    console.log(error);
    
})








