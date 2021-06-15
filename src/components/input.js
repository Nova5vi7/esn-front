import React from 'react';

import styleInput from '../styles/modules/input.module.scss';

const Input = ({ field, type, placeholder, form: { touched, errors } }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={styleInput.input}
        {...field}
      />
      {errors[field.name] && touched[field.name] && (
        <div className={styleInput.error}>{errors[field.name]}</div>
      )}
    </>
  );
};

export default Input;
