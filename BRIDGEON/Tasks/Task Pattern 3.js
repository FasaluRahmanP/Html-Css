var a;
var b;
var c;
for(a=1;a<=5;a++){
    for(c=1;c<=5-a;c++){
        document.write("&nbsp");
    }
    for(b=1;b<=((a*2)-1);b++){
        document.write(b);
    }
    document.write("<br>")
}
