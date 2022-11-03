//Script Code Run Only in browser console or with html file

let a=prompt("Enter Your Age: ");
a=Number.parseInt(a);
if(a<0){
    alert("Invalid age");
}
else if(a<9){
    alert("You are a Kid");
}
else if(a>9 &&a<=18){
    alert("You can think of driving");
}
else{
    alert("You can Drive");
}