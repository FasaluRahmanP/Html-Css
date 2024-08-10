var a="this is var";
console.log(a);
document.write("<br>");
const b="this is const"
console.log(b);

// scope:the acessesing of var ,let
// hoisting means if we declared var: 
//                                 console.log(testvar);
//                                 testvar=12;
//                                 var testvar;
//                                 here the declaration (var testvar) is moved to up

// if we declared let after use,it will show error,because let will not hoist but varhoist
// var:function scope
// let:block scope
