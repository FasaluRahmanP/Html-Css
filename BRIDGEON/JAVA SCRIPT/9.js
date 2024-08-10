// easy way : window prompt
// professional way:html textbox

// let username;
// username=window.prompt("What's your name?")
// console.log(username);
var username;
document.getElementById("mysubmit").onclick = function(){
username=document.getElementById("mytext").Value;
console.log(username);
}