import React from 'react';

import { InputFile } from './input-style';

const InputFileComponent = ({
  field,
  type,
  placeholder,
  id,
  onChange,
  inputRef
}) => (
  <InputFile
    type={type}
    placeholder={placeholder}
    id={id}
    {...field}
    onChange={onChange}
    ref={inputRef}
  />
);

export default InputFileComponent;
