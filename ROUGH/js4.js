let tag=document.getElementsByTagName("h1");
console.log(tag);
let button=document.getElementById("btn");
console.log(button);
let pg=document.getElementsByClassName("para");
console.log(pg);

let head=document.querySelector("h1");
console.log(head);

let sub=document.querySelector("#btn");
console.log(sub);

let call=document.querySelectorAll(".para");
console.log(call);

head.style.color="red";
head.style.fontSize="150px";

call[0].innerHTML="MMMMMM";