class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class teacher extends User{
    constructor(username, email,password){
        super(username)  //yaha pe call nhi use karna hoga bcoz we are using classes toh check karega konse class se inherited and woh function call kar dega, this apne aap elekar jaayega
        this.email = email
        this.password= password
    }


    addCourses(){
        console.log(`New course has been added by ${this.username}`);
        
    }
}


const chai = new teacher("Chai", "chai@fb.com", "123")

chai.addCourses()

const tea = new User("Masala Chai")
// tea.addCourses() // it has no acces to it 
tea.logMe()

console.log(chai === tea); //false that means ek nhi hai
console.log(chai === teacher); //false
//to check whether it is instance of it or not

console.log(chai instanceof teacher); //true
console.log(chai instanceof User); //true
console.log(tea instanceof teacher); //false
  

