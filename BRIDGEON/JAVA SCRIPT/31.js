
// application programming inteface(API) for HTML & XML document 
// html DOM is the object oriented representation of the web page . 
// when a web page is loded,browser create thee html dom of the page 
// reprsent al  HTML elements as object 
                  // javascript uses DOM to access the HTML elements
                 // USING dom:
                  // CHANGE/REMOVE/create html elements & attributes
                 // change the css properties
                 // react/create html events 
var a= document.getElementById("head1")             
console.log(a);       
a.innerHTML="TEXT IS CHANGED";
a.style.color="blue";


// var b= document.getElementsByClassName("heading2")
// console.log(b);
// b.style.color="red";

var c=document.getElementsByTagName("h3").style.color="red";
console.log(c);

