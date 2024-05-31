const prompt=require("prompt-sync")();

let a= Number(prompt("enter the number"))
count=0
for(i=1; i<=a; i++){
    if(a%i===0){
        count=count+1
    }
}
if(count==2){
    console.log("yes");
}
else{
    console.log("no");
}