


String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
}
let anothername = "Hitesh"
let myName = "Khushboo     "
console.log(myName.trueLength());
console.log(anothername.trueLength());

"Santosh".trueLength();



const heroes= ["Hulk", "Spiderman"]

let heroPower = {
    hulk: "hammer",
    spiderman : "Sling",

    spidyPower : function (){
        // console.log(`Spidy has power ${this.spiderman}`);
        
    }
}


//object me hi iss prototype daal diya 
Object.prototype.khushboo= function (){
    // console.log(`Hitesh is present in all the objects`);
    
}

// heroPower.khushboo()





// ab array me inject kar dete hai
Array.prototype.heychai = function(){
    // console.log("Khushboo says hello");
    
}

heroes.khushboo()
heroes.heychai()


//kya mere object ke paas heychai ka access hai? Answer is no
// heroPower.heychai()



//Inheritance

const User = {
    username : "Chai",
    email : "chai@gmail.com"
}

const Teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : teachingSupport
}

Teacher.__proto__ = User
//this is out dated

//modern syntax

Object.setPrototypeOf(teachingSupport, Teacher)