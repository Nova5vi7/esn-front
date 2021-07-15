import 'react-phone-input-2/lib/style.css';

import React, { useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';


import { InputPhone, Error } from './input-style';

const InputPhoneComponent = ({
  field: { name, value },
  type,
  placeholder,
  id,
  form: { touched, errors, setFieldValue }
}) => {
  const onValueChange = useCallback(
    phoneNumber => {
      setFieldValue(name, phoneNumber);
    },
    [name, setFieldValue]
  );

  const hasError = errors[`${name}`] && touched[`${name}`];

  return (
    <InputPhone>
      <PhoneInput
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        country={'us'}
        onChange={onValueChange}
      />
      {hasError && <Error>{errors[`${name}`]}</Error>}
    </InputPhone>
  );
};

export default InputPhoneComponent;
