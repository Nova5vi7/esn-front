import React from 'react';

import { Input } from './input-style';
import { Error } from '../error/error-style';

const InputComponent = ({
  field,
  type,
  placeholder,
  id,
  form: { touched, errors }
}) => (
  <>
    <Input type={type} placeholder={placeholder} id={id} {...field} />
    {errors[field.name] && touched[field.name] && (
      <Error>{errors[field.name]}</Error>
    )}
  </>
);

export default InputComponent;
