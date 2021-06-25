import 'react-phone-input-2/lib/style.css';

import React from 'react';
import PhoneInput from 'react-phone-input-2';

import styleInput from '../styles/modules/input-phone.module.scss';

const InputPhone = ({
        field: {name, value, onChange},
        type,
        placeholder,
        id,
        form: {touched, errors, setFieldValue}
    }) => {
    const onValueChange = phoneNumber => {
        setFieldValue(name, phoneNumber);

        if (onChange !== null) {
            onChange(phoneNumber);
        }
    };

    return (
        <div className={styleInput.inputPhone}>
            <PhoneInput
                type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                value={value}
                country={'us'}
                onChange={onValueChange}
            />
            {errors[`${name}`] && touched[`${name}`] && (
                <div className={styleInput.error}>{errors[`${name}`]}</div>
            )}
        </div>
    );
};

export default InputPhone;
