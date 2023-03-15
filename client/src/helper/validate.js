import toast from 'react-hot-toast';

// Validate login page username 

export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors; 
}

// validate password 

export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

// validate Password 

function passwordVerify(errors = {}, values){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 
    if(!values.password){
        errors.password = toast.error("Password Required");
    } else if(values.password.includes(" ")) {
        errors.password = toast.error(" Wrong password");
    } else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 character");
    } else if(!specialChars.test(values.password)){
        errors.password = toast.error("Passwords must have special character");
    }

    return errors;
}



// Validate Username 

function usernameVerify(error ={}, values) {
    if(!values.username) {
        error.username = toast.error('Username Required!');
    } else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username!');
    }

    return error;
}