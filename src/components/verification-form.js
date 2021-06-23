import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react';

import verification from '../services/verification';
import style from '../styles/modules/verification.module.scss';
import isValidName from '../verifiers/is-valid-name';
import Button from './button';
import CircleButton from './circle-button';
import Input from './input';
import InputFile from './input-file';

const verificationForm = () => {
  const [filePath, setFilePath] = useState('/images/user-plug.png');
  const [file, setFile] = useState(null);

  const handleChange = event => {
    const image = event.target.files[0];

    const formData = new FormData();

    formData.append('image', image);

    setFile(formData);

    const reader = new FileReader();

    reader.onloadend = () => {
      if (!reader.result) {
        return;
      } else {
        setFilePath(reader.result);
      }
    };

    reader.readAsDataURL(image);
  };

  const handleInputClick = () => {
    document.querySelector('#photo').click();
  };

  const handleSubmit = async data => {
    console.log((data.file = file));
    await console.log(data);
    await verification(data);
  };

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
          {({ isValid, handleSubmit, dirty }) => (
            <Form className={style.verificationForm__form}>
              <div className={style.verificationForm__userImageWrap}>
                <Field
                  type="file"
                  placeholder="Image"
                  name="image"
                  id="photo"
                  component={InputFile}
                  onChange={handleChange}
                />
                <div className={style.verificationForm__image}>
                  <Image src={filePath} alt="User" width={223} height={223} />
                </div>

                <CircleButton handleClick={handleInputClick}>
                  <i className="icon-pencil"></i>
                </CircleButton>
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
                    type="phone"
                    placeholder="Phone"
                    name="phone"
                    component={Input}
                  />
                </div>
              </div>

              <Button handleClick={handleSubmit} valid={isValid} dirty={dirty}>
                Continue
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default verificationForm;
