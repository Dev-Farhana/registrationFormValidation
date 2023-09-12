const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
 e.preventDefault();
    validateInputs();
});

const setError = (element,msg) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = msg;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ""){
        setError(username, "Username is required! 😠");
    } else{
        setSuccess(username);
    }

    if(emailValue === ""){
        setError(email, "Email is required! 😤");
    } else{
        setSuccess(email);
    }

    if(passwordValue === ""){
        setError(password, "password is required! 😡");
    } else if (passwordValue.length < 6 ){
        setError(password, "password must be 6 characters long! 😠");
    }
    else if(passwordValue === "password" ){
        setError("password can not be set as 'password' 👿😠");
    }
    else {
        setSuccess(password);
    }


    if(password2Value === ""){
        setError(password2, "Should Not be blank! 😑")
    }
    else if (password2Value !== passwordValue){
        setError( password2, "Password doesnot Matched! 😠")
    }
    else {
        setSuccess(password2);
    }

};
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
const showPass = () => {
    let x = document.getElementById("password");
    if(x.type === "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}