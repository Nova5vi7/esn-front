import {PASSWORD_REGEX} from '../constants/varifiers';

const isValidPassword = passwordValue => {
    return Boolean(!PASSWORD_REGEX.test(passwordValue));
};

const validatePassword = value => {
    let error;

    if (!value) {
        error = 'Required';
    } else if (isValidPassword(value)) {
        error = 'Invalid password';
    }

    return error;
};

export default validatePassword;
