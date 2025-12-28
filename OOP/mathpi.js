const descriptor= Object.getOwnPropertyDescriptor(Math, "PI")

// Math.PI= 4.00 
// console.log(Math.PI); this cannot be modified because its writable prop is false

// console.log(descriptor);

// hum bhi apne objects ke properties aisa kar sakte hai like koi modify nhi kar paaye

// const mynewObject = Object.create(null)

const chai = {
    name : "Chai",
    isAvailable : true,
    price : 250,

    orderChai : function(){
        console.log("Chai nhi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //at this time all prop are true

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable : false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name")); // at this moment two prop are false

//this can be done only enumeration is true, for eg enum is false for name so loop wont run for name key value
for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
     console.log(`${key} : ${value}`);   
    }
    
    
}




