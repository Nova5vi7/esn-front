import React from 'react';

import ForgotPass from './forgot-password-form';

const LogInFormContainer = () => {
  const initialValues = {
    email: ''
  };

  const handleSubmit = async data => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <ForgotPass handleSubmit={handleSubmit} initialValues={initialValues} />
  );
};

export default LogInFormContainer;
