
var a,b,c;
for(a=5; a>=1;a--){
    for(c=5; c>a; c--){
        document.write("&nbsp;&nbsp;");
    }
    for(b=((2*a)-1);b>=1; b--){
        if(a==1||a==5||b==1||b==((2*a)-1))
            {
                document.write("*");
            }
            else
            document.write("&nbsp;&nbsp;");
    }
    document.write("<br>");
}
document.write("<br><br><br>");