import { VARIFIERS_NAME } from '../constant/varifiers';

const isValidName = nameValue => {
  return Boolean(!VARIFIERS_NAME.test(nameValue));
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
