const prompt=require("prompt-sync")();

let a=Number(prompt("enter the number"))
let b=Number(prompt("enter the number"))
let c=Number(prompt("enter the number"))
let d=Number(prompt("enter the number"))
let e=Number(prompt("enter the number"))
let f=Number(prompt("enter the number"))

if(a==3 && b==2 && c==5 && d==6 && e==1 && f==1){
    console.log("Alice");
}
else if(a==4 && b==4 && c==5 && d==6 && e==4 && f==1){
    console.log("Bob");
}
else if(a==6 && b==6 && c==6 && d==6 && e==6 && f==1){
console.log("Tie");
}
