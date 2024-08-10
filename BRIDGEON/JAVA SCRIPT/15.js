//Array
var Gun=["M416","AKM","M16A4","SCARAL"];
document.write(Gun+"<br>");
document.write(Gun[1]);

document.write("<br>");
// we can replace the value
Gun[0]="QBZ";
document.write(Gun+"<br>");

// used to find the length of an element
var x=Gun.length;
document.write(x+"<br>");

// using for loop print array 
for(var i=0;i<x;i++){
    document.write(
        Gun[i]+"<br>"
    );
}

// used to add new value to array 1: by accesseing index number 2:BY USING PUSH
Gun[5]="DP";
document.write(Gun+"<br>");
Gun.push("AWM");
document.write(Gun+"<br>");

// HOW TO DELETE first ELEMENT 
Gun.shift();
document.write(Gun+"<br>");

// HOW TO DELETE last ELEMENT 
Gun.pop();
document.write(Gun+"<br>");

// HOW TO DELETE any ELEMENT 
Gun.splice(1,3);
document.write(Gun+"<br>");

// used to sort elements
Gun.sort();
document.write(Gun+"<br>");

var num=[9,8,7,6,5,4,3,2,1];
num.sort();
document.write(num);

// used to add to element 
document.write("<br>")
document.write(num[0]+num[3]);