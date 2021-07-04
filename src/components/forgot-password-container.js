import {Formik} from 'formik';
import React from 'react';

import ForgotPass from "./forgot-password-form"

const LogInFormContainer = () => {
    const initialValues = {
        email: '',
    }

    const handleSubmit = async data => {
        console.log(data)
    };

    return (
        <ForgotPass handleSubmit={handleSubmit} initialValues={initialValues}/>
    )
}

export default LogInFormContainer;