//for of loop


const arr= [1,2,3,4,5]

for (const val of arr) {
    // console.log(val);   
}

const greeting = "Good morning"

for (const val of greeting) {
    if(val==" "){
        continue   //removes the space detected
    }
    // console.log(val);
    
}

//maps --> unique

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('UK',"United Kingdom")

// console.log(map);


// for (const [key,value] of map) {
// //    console.log(key);
//    // op
// //    [ 'IN', 'India' ]
// // [ 'USA', 'United States of America' ]
// // [ 'UK', 'United Kingdom' ]
//     // console.log(key, '->',value);

// }



const myobj= {
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key,value] of myobj) {
//     console.log(key, '->',value);
// }
//this is not iterable , for objects we have other method


// for (const key in myobj) {
// //    console.log(`${key} is ${myobj[key]}`);
   
// }


// const programming =[ "js","cpp","java"]

// for (const key in programming) {
   
//     console.log(programming[key]);
    
    
// }

// for (const [key,value] in map) {
//   console.log(key,value);
   
// }
//no output since it is not iterable



//for each loop

const coding = ["java","cpp","js","ruby"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

// coding.forEach( (val) => {
//     console.log(val);
    
// })

// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)

// // coding.forEach((item,index,arr)=>{
//     // console.log(item,index,arr);
    
// })
// o/p
// java 0 [ 'java', 'cpp', 'js', 'ruby' ]
// cpp 1 [ 'java', 'cpp', 'js', 'ruby' ]
// js 2 [ 'java', 'cpp', 'js', 'ruby' ]
// ruby 3 [ 'java', 'cpp', 'js', 'ruby' ]


const mycoding = [
    {
        lang_name : "js",
        lang_file:"js1"
    },
     {
        lang_name : "cpp",
        lang_file:"cpp1"
    },
     {
        lang_name : "java",
        lang_file:"java1"
    }
]

// mycoding.forEach((item)=>{

//     console.log(item.lang_file);
    
// })



//  const values = coding.forEach((item)=>{
//     console.log(item);
    
// })

// console.log(values);  //returns undefined

//filter()

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter((num)=>num>5)
// console.log(newnums); // [ 5, 6, 7, 8, 9, 10 ]



// const newnums = mynums.filter((num)=>{
//      num>4
// })
// console.log(newnums);  //[]

// const newnums = mynums.filter((num)=>{
//     return  num>4
// })
// console.log(newnums); //[ 5, 6, 7, 8, 9, 10 ]


// const newnums=[]

// mynums.forEach((item)=>{
//     if (item>4) {
//         newnums.push(item)
//     }
// })
// console.log(newnums);  //[ 5, 6, 7, 8, 9, 10 ]

//one eg
// created an array consisting of various objects each having book title, genre and publish, now i want all the books with genre history
// const user = books.filte((bk)=>{
//     return bk.genre==='History'
// })
// console.log(user);
// this will return all the books having genre history but it will return the object whole all the details 


//map()
const mynumbers = [1,2,3,4,5,6,7,8,9,10]
//  const mynums1= mynumbers.map((num)=>{ return num+10})
//  console.log(mynums1);

//chaining

const mynums2=mynumbers
                        .map((num)=> num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>40)    //[
                                                    //   41, 51,  61, 71,
                                                    //   81, 91, 101
                                                    // ]

// console.log(mynums2);


//reduce()
//useful for cart

const myarr=[1,2,3]

// const mytotal = myarr.reduce(function (acc,curr) {
//     console.log(`acc :${acc}, curr:${curr}`);
    
//     return acc+ curr

// },3)


// const mytotal = myarr.reduce((acc,curr)=>{return acc+curr},0)


// console.log(mytotal);
// acc :3, curr:1
// acc :4, curr:2
// acc :6, curr:3
// 9



const shoppingcart = [
    {
        itemname: "js course",
        price : 2999
    },
     {
        itemname: "cpp course",
        price : 3999
    },
     {
        itemname: "java course",
        price : 2000
    },
     {
        itemname: "ruby course",
        price : 1999
    },
]

const total = shoppingcart.reduce((acc,item)=>{return acc+ item.price},0)
console.log(total);

 
