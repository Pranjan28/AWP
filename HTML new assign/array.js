var a =[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
for(var i in a)
{
    console.log("row" +i);
    for(var j in a[i])
    {
        console.log(""+a[i][j]);
    }
}