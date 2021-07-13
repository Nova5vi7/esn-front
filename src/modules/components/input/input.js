import React from 'react';

import { Input } from './input-styles';
import { Error } from '../error/error-styles';

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
