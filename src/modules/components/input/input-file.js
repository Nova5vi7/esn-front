import React from 'react';

import styleInput from '../../../styles/modules/input.module.scss';

const InputFile = ({ field, type, placeholder, id, onChange, inputRef }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={styleInput.input}
    id={id}
    {...field}
    onChange={onChange}
    ref={inputRef}
  />
);

export default InputFile;
