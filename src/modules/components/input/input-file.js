import React from 'react';

const InputFile = ({ field, type, placeholder, id, onChange, inputRef }) => (
  <input
    type={type}
    placeholder={placeholder}
    id={id}
    {...field}
    onChange={onChange}
    ref={inputRef}
  />
);

export default InputFile;
