let str="madam";
let rev="";
let len=str.length;
for(let i=len-1;i>=0;i--)
    {
        rev+=str[i];
    }
    if(rev==str){
        document.write("it is a palindrome");
    }
    else
    document.write("it is not palindrome");