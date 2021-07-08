import React from 'react';

import styleInput from '../../../styles/modules/input.module.scss';

const Input = ({ field, type, placeholder, id, form: { touched, errors } }) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      className={styleInput.input}
      id={id}
      {...field}
    />
    {errors[field.name] && touched[field.name] && (
      <div className={styleInput.error}>{errors[field.name]}</div>
    )}
  </>
);

export default Input;
