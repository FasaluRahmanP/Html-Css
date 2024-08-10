// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()

// See Also:
// Search Methods
// Sort Methods
// Iteration Methods	Array shift()



game=["PUBG","FREE FIRE","CLASH OF CLAN","CALL OF DUTY","PESS"];
document.write(" Array Length : ",game.length+"<BR>");

car=["BMW","BENZ","AUDI","CITY","FERRARI"];
document.write(car.toString()+"<br>");
let at=car.at;
document.write("AT : ",car.at(2)+"<br>");


a=["1","2","3"];
x=a.join(" ");
document.write("join : ",x+"<br>");

b=["1","2","3","4","5","6"];
b.pop();
document.write("pop : ",b+"<br>");
b.push("10");
document.write("push : ",b+"<br>");
b.shift();
document.write("shift : ",b+"<br>");

c=["1","2","3","4","5","6","7"];
c.unshift("0");
document.write("unshift : ",c+"<br>");
delete c[0];
document.write("delete : ",c+"<br>");

boys=["amal","adnana"];
girls=["no","girl"];
result=boys.concat(girls);
document.write("concat : ",result+"<br>");

phone=["9","1","4","8"];
phone.copyWithin(2,0);
document.write("copyWithin : ",phone+"<br>");

MyArray=[[1,2],[3,4],[5,6]];
MyArray.flat;
document.write("flat : ",MyArray+"<br>");

fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
document.write("splice : ",fruits+"<br>");

months = ["Jan", "Feb", "Mar", "Apr"];
spliced = months.toSpliced(0, 1);
document.write("tosplice : ",spliced+"<br>");
document.write("no change for array : ",months+"<br>");
