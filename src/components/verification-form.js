import {Field, Form, Formik} from 'formik';
import Image from 'next/image';
import React, {useState} from 'react';

import updateUser from '../services/verification';
import style from '../styles/modules/verification.module.scss';
import isValidName from '../verifiers/is-valid-name';
import isValidPhone from '../verifiers/is-valid-phone';
import Button from './button';
import CircleButton from './circle-button';
import Input from './input';
import InputFile from './input-file';
import InputPhone from './input-phone';
import CropperImage from "./cropper-image";

const verificationForm = () => {
    const [filePath, setFilePath] = useState(null);
    const [file, setFile] = useState(null);

    const inputRef = React.useRef();

    const handleChange = event => {
        const image = event.target.files[0];

        const formData = new FormData();

        formData.append('image', image);

        setFile(formData);

        const reader = new FileReader();

        reader.readAsDataURL(image);

        reader.addEventListener('load', () => {
            reader.result && setFilePath(reader.result)
        })

    };

    const handleInputClick = () => {
        inputRef.current.click();
    };

    const handleSubmit = async data => {
        console.log((data.file = file));
        await console.log(data);
        await updateUser(data);
    };

    console.log(filePath)
    return (
        <div className={style.verificationForm}>
            <div className={style.verificationForm__formWrap}>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        phone: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    {({isValid, handleSubmit, dirty}) => (
                        <Form className={style.verificationForm__form}>
                            <div className={style.verificationForm__userImageWrap}>
                                <Field
                                    type="file"
                                    placeholder="IFormik called `handleBlur`, but you forgot to pass an `id` or `name` attriage"
                                    name="image"
                                    id="photo"
                                    component={InputFile}
                                    onChange={handleChange}
                                    accept='image/*'
                                    inputRef={inputRef}
                                />
                                <div className={style.verificationForm__image}>
                                    {/*<Image src={filePath} alt="User" width={223} height={223}/>*/}
                                    {filePath && (<CropperImage image={filePath}/>)}
                                </div>

                                <div className={style.btn_label_wrap}>
                                    <CircleButton handleClick={handleInputClick}>
                                        <i className="icon-pencil"></i>
                                    </CircleButton>
                                </div>
                            </div>

                            <div className={style.verificationForm__inputsWrap}>
                                <div className={style.verificationForm__inputWrap}>
                                    <Field
                                        type="name"
                                        placeholder="First name"
                                        name="firstName"
                                        validate={isValidName}
                                        component={Input}
                                    />
                                </div>

                                <div className={style.verificationForm__inputWrap}>
                                    <Field
                                        type="name"
                                        placeholder="Last name"
                                        name="lastName"
                                        validate={isValidName}
                                        component={Input}
                                    />
                                </div>

                                <div className={style.verificationForm__inputWrap}>
                                    <Field
                                        type="tel"
                                        placeholder="Phone"
                                        component={InputPhone}
                                        name="phone"
                                        validate={isValidPhone}
                                    />
                                </div>
                            </div>

                            <div className={style.buttonWrap}>
                                <Button onClick={handleSubmit} valid={isValid} dirty={dirty}>
                                    Continue
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default verificationForm;
