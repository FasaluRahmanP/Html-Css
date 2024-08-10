document.write("<br>")
let str="Hello";
var x=str.length;
let rev=" ";
for(i=x-1;i>=0;i--){
    rev+=str[i];
}
document.write("Reverse: "+rev);