import {PHONE_REGEX} from '../constants/varifiers';

const isValidPhone = phoneValue => {
    return Boolean(!PHONE_REGEX.test(phoneValue));
};

const validatePhone = value => {
    let error;

    if (!value) {
        error = 'Required';
    } else if (isValidPhone(value)) {
        error = 'Invalid phone';
    }

    return error;
};

export default validatePhone;
