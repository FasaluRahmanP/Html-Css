fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
document.write("sort : ",fruits+"<br>");

b = ["Banana", "Orange", "Apple", "Mango"];
b.reverse();
document.write("reverse : ",b+"<br>");

months = ["Jan", "Feb", "Mar", "Apr"];
sorted = months.toSorted();
document.write("tosorted : ",sorted+"<br>");
// The difference between toSorted() and sort() is that the first method creates a new array, 
// keeping the original array unchanged, while the last method alters the original array.

points = [40, 100, 1, 5, 25, 10];
points.sort(function (a,b){ return a-b});
document.write("numeric sort : ",points+"<br>");

