let password = document.querySelector('#password');
let confirmation = document.querySelector('#password-confirmation')


function validatePassword(){
    if(password.value != confirmation.value){
   
       confirmation.setCustomValidity('password dont match')
    } else {
      
       confirmation.setCustomValidity("")
    }
}
password.onchange = validatePassword;
confirmation.onkeyup = validatePassword;