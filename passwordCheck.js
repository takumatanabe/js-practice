var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var number = document.getElementById("number");
var special = document.getElementById("special");

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {

  var letters = /[a-z]/g;
  if(myInput.value.match(letters)) {  
  letter.classList.remove("invalid");
  letter.classList.add("valid");
  } else {
  letter.classList.remove("valid");
  letter.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  var specials = /[!@#$%^&*]/g;
  if(myInput.value.match(specials)) {  
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }
}
