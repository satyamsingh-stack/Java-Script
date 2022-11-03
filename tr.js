let dummy=[1,2,3,4,5];
let a=dummy.map((value)=>{
    console.log(value);
})

let b=dummy.filter((value)=>{
    return value<3;
})
console.log(b);

let c=dummy.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(c);