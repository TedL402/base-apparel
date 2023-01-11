const form = document.getElementById("form");
const email = document.getElementById("email");
form.addEventListener("submit", e=>{
    e.preventDefault();
    const emailVal = email.value;
    console.log(emailVal)
    if(ValidateEmail(emailVal) == false){
        form.classList.add("error-message");
        console.log(1)
    }else{
        form.classList.remove("error-message");
        console.log(2)
    }
})


function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
      return true;
  
    } else {
  
      return false;
  
    }
  
  }