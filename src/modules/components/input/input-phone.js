import 'react-phone-input-2/lib/style.css';

import React, { useCallback } from 'react';

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
    <div>
      <InputPhone
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        country={'us'}
        onChange={onValueChange}
      />
      {hasError && <Error>{errors[`${name}`]}</Error>}
    </div>
  );
};

export default InputPhoneComponent;
