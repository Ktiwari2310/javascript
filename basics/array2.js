const marvel =["thor", "ironman","spiderman"];
const dc =["superman", "flash", "batman"];

// marvel.push(dc);
// console.log(marvel); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel[3][1]);  // flash

// console.log (marvel.concat(dc));  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//console.log([...dc, ...marvel]);  //[ 'superman', 'flash', 'batman', 'thor', 'ironman', 'spiderman' ]   can have more than one array

const a=[1,2,3,[4,5,6],7,[8,[9,10]]];
// console.log(a.flat(Infinity));  // [1,2,3,4,5,6,7,8,9,10]


// .from() used to convert the given value into array as looping can be done only on array

// console.log(Array.from("Khushboo"))  
// [
//   'K', 'h', 'u',
//   's', 'h', 'b',
//   'o', 'o'
// ]

//for objects *interview , specify to make array of key or value , if not specified then gives null
let score1= 100;
let score2= 200;
let score3= 300;
console.log(Array.of(score1,score2,score3))  // gives array with all three scores




