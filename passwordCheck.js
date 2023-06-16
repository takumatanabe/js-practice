function checkPassword(inputtxt)
{
var paswd= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,50}$/;
if(inputtxt.value.match(paswd))
{
alert('Correct')
return true;
}
else 
{
alert('Wrong')
return false;
}
}