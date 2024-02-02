let start=()=>{
document.querySelector("h1").style.backgroundColor="red";
document.querySelector("h1").style.color="white";
document.querySelector("h1").style.textAlign="center";

var a=["#944E63","#40A2E3","#B4B4B8","#12372A","#E8C872","#1F2544","#0C2D57","#F28585"];
var randomColor=a[Math.floor(Math.random()*a.length)];
var b=document.querySelector("body").style.backgroundColor=randomColor;
document.querySelector("h1").innerHTML=`the color is ${randomColor}`;
}
