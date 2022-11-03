let dummy=[1,2,3,4,"Satyam",false,undefined];
let b=dummy.toString()
console.log(b);
let c=dummy.join("-");
console.log(c);
console.log(typeof(b),typeof(c));
dummy.push(90);
console.log(dummy);
dummy.shift() // removes the first element
console.log(dummy);
let r=dummy.unshift(78); // Add new value to the beginning of the array
console.log(dummy);
console.log(dummy.pop());






// let dummy=[1,2,3,4,"Satyam",false,undefined];
// let temp=[1,2,3,4,5];
// delete dummy[0]; // Length is same as intial
// console.log(dummy);

// // let newArray=dummy.concat(dummy,temp);
// // console.log(newArray);

// console.log(dummy.sort());
// console.log(dummy.reverse());