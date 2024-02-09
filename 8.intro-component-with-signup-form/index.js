const form = document.getElementById('form');
const firstName= document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    validateInputs();
});
// error messages related to the each type of input
const setError = (element,message) =>{
    const inputControl = element.parentElement;
    const errormsg = inputControl.querySelector('.error');
    errormsg.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
} 

// when the input is validated
const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// function to validate all types of inputs
const validateInputs = () =>{
    const fnameValue = firstName.value.trim();
    const lnameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    //check for valid first name
    if(fnameValue === ''){
        setError(firstName,'First Name cannot be empty');        
    }
    else{
        setSuccess(firstName);
    }

    //check for valid last name
    if(lnameValue === ''){
        setError(lastName,'Last Name cannot be empty');
    }
    else{
        setSuccess(lastName);
    }
    
    //validate email id
    if(emailValue === '' ){
        setError(email,'Email cannot be empty');
    }
    else if(!isValidEmail(emailValue)){
        setError(email,'Looks like this is not an email');
    }
    else{
        setSuccess(email);
    }

    //validate password
    if(passwordValue === ''){
        setError(password,'Password cannot be empty');
    }
    else if(passwordValue.length < 8){
        setError(password,'Password must be of at least 8 characters');
    }
    else{
        setSuccess(password);
    }
}