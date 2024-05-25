
function store(val)
{
    
    document.getElementById("display").innerHTML+=val;
    document.getElementById("display").value +=val;
}
function calculate()
{
    var chandu=document.getElementById("display").value;
    try{
        var e= eval(chandu);
    document.getElementById("display").value=e;
    }
    catch(err)
    {
        document.getElementById("display").value="Error";
    }
    
}
function clear1()
{
    document.getElementById("display").value=''
}
