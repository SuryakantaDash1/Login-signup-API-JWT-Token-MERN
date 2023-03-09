import toast from 'react-hot-toast';

// Validate login page username 


// Validate Username 

function usernameVerify(error ={}, values) {
    if(!values.username) {
        error.username = toast.error('Username Required...!');
    } else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!');
    }

    return error;
}