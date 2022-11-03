//Script Code Run Only in browser console or with html file

let a=prompt("Enter Your age : ");
a=Number.parseInt(a);
switch(a){
    case 0:
        alert("Invalid Number");
        break;
    case 1:
        alert("1st Rank");
        break;
    case 2:
        alert("2nd Rank");
        break;
    case 3:
        alert("3rd Rank");
        break;
    default:
        alert("Number Greater Then 3");
}