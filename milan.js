let p=100;
console.log("Price= "+p);
let q=6;
console.log("Quantity= "+q);
am=p*q;
console.log("Amount= "+am);
if (am<250){
    dis=0;
    pay=am-dis;
    console.log("Payablen Amount ="+pay);
}
else if (am>=250 && am<=500){
    dis=25;
    pay=am-dis;
    console.log("Payablen Amount ="+pay);
}
else if  (am>500 && am<=1000){
    dis=50;
    pay=am-dis;
    console.log("Payablen Amount ="+pay);
}
else if (am>=1000 && am<=5000){
    dis=100;
    pay=am-dis;
    console.log("Payablen Amount ="+pay);
}
else {
    dis=200;
    pay=am-dis;
    console.log("Payablen Amount ="+pay);
}