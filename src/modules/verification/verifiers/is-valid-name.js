import { NAME_REGEX } from '../constants/varifiers';

const isValidName = nameValue => {
  return Boolean(!NAME_REGEX.test(nameValue));
};

const validateName = value => {
  let error;

  if (!value) {
    error = 'Required';
  } else if (isValidName(value)) {
    error = 'Invalid name';
  }

  return error;
};

export default validateName;
