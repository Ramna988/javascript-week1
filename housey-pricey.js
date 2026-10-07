//peter
const width =8;
const depth =10;
const height =10;
const gardenSize =100;
const price =2500000;

const volume =width*depth*height;

const housePrice =volume * 2.5 * 1000 + gardenSize * 300;
 
console.log("As per our formula peter house price is " + housePrice);
 if(price>housePrice){
    console.log("peter is paying more");
 } else {
    console.log("peter is paying less");
 }

 //julia
const width2 =5;
const depth2 =11;
const height2 =8;
const gardenSize2 =70;
const price2 =1000000;

const volume2 =width2*depth2*height2;

const housePrice2  = volume * 2.5 * 1000 + gardenSize * 300;

console.log("As per our formula julie house price is " + housePrice2);
if(price2>housePrice2)
    {
    console.log ("julie is paying more");
}
 else 
    { console.log("julie is paying less");

}