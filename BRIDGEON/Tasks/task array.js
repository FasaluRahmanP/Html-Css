const a = [1, 4, 7, 3, 6];
var x=a.length;
for(var i=0;i<x;i++)
    {
        for(var j=i+1;j<x;j++){
            if(a[i]>a[j])
                {
                    var t=a[i];
                    a[i]=a[j];
                    a[j]=t;
                }
        }
    }
    console.log("Largest value:"+a[i-1]);