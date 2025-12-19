function multiplyby5 (num){
    return num*5
}

// console.log(multiplyby5(10))
multiplyby5.power = 2
console.log(multiplyby5.power)  //2
console.log(multiplyby5.prototype);  //{}

function createUser(username, score){
    this.username= username
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++
    console.log(`Score is ${this.score}`)
    
}
createUser.prototype.printme= function(){
    console.log(`Score is ${this.score}`);
    
}

const chai = new createUser("Chai", 25)
const tea = new createUser("Tea", 250)

chai.printme()
chai.increment()




