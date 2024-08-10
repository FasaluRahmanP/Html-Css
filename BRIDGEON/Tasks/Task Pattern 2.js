var i,j,k;
for(i=1;i<=5;i++){
    for(k=1;k<=5-i;k++){
        document.write("&nbsp;&nbsp;")
    }
    for(j=1;j<=((i*2)-1);j++){
        document.write("*");
    }
    document.write("<br>");
}