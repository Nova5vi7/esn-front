import React from 'react';

import styleInput from '../styles/modules/input.module.scss';

const InputFile = ({ field, type, placeholder, id, onChange }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={styleInput.input}
        id={id}
        {...field}
        onChange={onChange}
      />
    </>
  );
};

export default InputFile;
