const arr=[1,8,4,3,5];
var x=arr.length;
var r=" ";
arr.sort();
for(i=x-1;i>=0;i--){
    r+=arr[i]+",";
}
document.write("Descending Order: "+r);
document.write("<br>")