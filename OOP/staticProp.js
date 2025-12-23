class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

    //i want jasie hi user bane vaise hi uss user ko unique id mil jaaye, here i can user math. random but im not using 
    // mai id ka access sabko nhi dena chahta isloye use static
    static createID(){
        return `123`
    }
}

const Khushboo = new User ("Khushboo")
// console.log(Khushboo.createID());  //it gives 123 but after using static iske pass ab yeh function nhi access hoga

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email= email
    }
}


const iphone  = new Teacher("Iphone", "apple@apple.com")
iphone.logMe();
console.log(iphone.createID()) // has no access
