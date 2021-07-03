import {Formik} from 'formik';
import React from 'react';

import ForgotPass from "./forgot-password-form"

const initialValues = {
    email: '',
}

const handleSubmit = async data => {
    console.log(data)
};

const LogInFormContainer = () => {
    return (
        <ForgotPass handleSubmit={handleSubmit} initialValues={initialValues}/>
    )
}

export default LogInFormContainer;