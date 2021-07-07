import {VARIFIERS_EMAIL} from '../constant/varifiers';

const isValidEmail = emailValue => {
    return Boolean(!VARIFIERS_EMAIL.test(emailValue));
};

const validateEmail = value => {
    let error;

    if (!value) {
        error = 'Required';
    } else if (isValidEmail(value)) {
        error = 'Invalid email address';
    }

    return error;
};

export default validateEmail;
