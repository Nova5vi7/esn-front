import {Field, Form, Formik} from 'formik';
import React from 'react';

import style from '../styles/modules/verification.module.scss';
import isValidName from '../verifiers/is-valid-name';
import isValidPhone from '../verifiers/is-valid-phone';
import Button from './button';
import CircleButton from './circle-button';
import Input from './input';
import InputFile from './input-file';
import InputPhone from './input-phone';
import CropperImage from "./cropper-image";

const verificationForm = ({handleSubmit, filePath, handleChange, inputRef, handleInputClick}) => (
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

export default verificationForm;
