import {VARIFIERS_PHONE} from '../constant/varifiers';

const isValidPhone = phoneValue => {
    return Boolean(!VARIFIERS_PHONE.test(phoneValue));
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
