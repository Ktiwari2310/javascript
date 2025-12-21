function setUsername (username){
    //complex DB calls
    this.username = username
}

function createUser (username, email, password){
    // setUsername(username)  wrong
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);  // username nhi diya sirf email and password diya, uske liye call use karo
//see function call ho rha hai but toh usne fxn aur ec dono ko call stack se hata diya toh uske andar jitne bhi variables hai woh sab hata diya , toh uske liye uska reference hold karna hoga for that .call and saath me this do like uska this gayab hua toh hua mai aapka this use karunga

