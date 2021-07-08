import { EMAIL_REGEX } from '../constants/varifiers';

const isValidEmail = emailValue => {
  return Boolean(!EMAIL_REGEX.test(emailValue));
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
