var A=5;
var B=2;
var C=10;
if(A>B && A>C){
    console.log("A");
} 
else if(B>A && B>C){
console.log("B");
}
else if(C>A && C>B){
    console.log("C");
}
else if(A==B||B==C||C==A){
    console.log("A=B=C");
}