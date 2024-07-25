function display(input){

    var inbox = document.getElementById("inbox")
    inbox.value += input;
}
function cleari()
{
    var inbox = document.getElementById("inbox")
    inbox.value=" "
    
}
function calc(){
    var inbox = document.getElementById("inbox")
    if(inbox.value == "")
    {
        alert("enter value")
        return 0;
    }
    inbox.value=eval(inbox.value)
}