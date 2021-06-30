import {Field, Form, Formik} from 'formik';
import React from 'react';
import Image from "next/image";

import style from '../styles/modules/verification.module.scss';
import isValidName from '../verifiers/is-valid-name';
import isValidPhone from '../verifiers/is-valid-phone';
import Button from './button';
import CircleButton from './circle-button';
import Input from './input';
import InputFile from './input-file';
import InputPhone from './input-phone';
import CropperImage from "./cropper-image";

const verificationForm = ({
                              handleSubmit,
                              filePath,
                              handleChange,
                              inputRef,
                              handleInputClick,
                              crop,
                              setCrop,
                              zoom,
                              setZoom,
                              onCropComplete,
                              showCroppedImage,
                              croppedImage

                          }) => (
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
                                {filePath ?
                                    (<CropperImage
                                        image={filePath}
                                        crop={crop}
                                        setCrop={setCrop}
                                        zoom={zoom}
                                        setZoom={setZoom}
                                        onCropComplete={onCropComplete}
                                        aspect={1}
                                    />) : (<Image src={'/images/user-plug.png'} width={233} height={233}/>)}

                            </div>

                            <div className={`${style.btn_label_wrap} ${style.btn_right}`}>
                                <CircleButton handleClick={handleInputClick}>
                                    <i className="icon-pencil"></i>
                                </CircleButton>
                            </div>

                            <div className={`${style.btn_label_wrap} ${style.btn_left}`}>
                                <CircleButton handleClick={showCroppedImage}>
                                    <i className="icon-checkmark"></i>
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
