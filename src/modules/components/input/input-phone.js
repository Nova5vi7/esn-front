import 'react-phone-input-2/lib/style.css';

import React, { useCallback } from 'react';
import PhoneInput from 'react-phone-input-2';

import styleInput from '../../../styles/modules/input-phone.module.scss';

const InputPhone = ({
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
    <div className={styleInput.inputPhone}>
      <PhoneInput
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        country={'us'}
        onChange={onValueChange}
      />
      {hasError && <div className={styleInput.error}>{errors[`${name}`]}</div>}
    </div>
  );
};

export default InputPhone;
