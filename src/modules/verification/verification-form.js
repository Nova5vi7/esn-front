import { Field, Form, Formik } from 'formik';
import React from 'react';
import Image from 'next/image';

import style from '../../styles/modules/verification.module.scss';
import isValidName from '../../verifiers/is-valid-name';
import isValidPhone from '../../verifiers/is-valid-phone';
import Button from '../components/button/button';
import CircleButton from '../components/button/circle-button';
import Input from '../components/input/input';
import InputFile from '../components/input/input-file';
import InputPhone from '../components/input/input-phone';
import CropperImage from '../components/image-cropper/cropper-image';

const verificationForm = ({
  handleSubmit,
  filePath,
  stateCropp,
  handleChange,
  inputRef,
  handleInputClick,
  cancelCropper,
  crop,
  setCrop,
  zoom,
  setZoom,
  onCropComplete,
  showCroppedImage,
  croppedImage,
  croppedImagePath,
  initialValues,
  captions
}) => {
  return (
    <div className={style.verificationForm}>
      <div className={style.verificationForm__formWrap}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isValid, handleSubmit, dirty }) => (
            <Form className={style.verificationForm__form}>
              <div className={style.verificationForm__userImageWrap}>
                <Field
                  type="file"
                  placeholder={captions.placeholder.image}
                  name="image"
                  id="photo"
                  component={InputFile}
                  onChange={handleChange}
                  accept="image/*"
                  inputRef={inputRef}
                />
                <div className={style.verificationForm__image}>
                  {stateCropp ? (
                    <CropperImage
                      image={filePath}
                      crop={crop}
                      setCrop={setCrop}
                      zoom={zoom}
                      setZoom={setZoom}
                      onCropComplete={onCropComplete}
                      aspect={1}
                    />
                  ) : (
                    <Image
                      src={
                        croppedImagePath
                          ? croppedImagePath
                          : '/images/user-plug.png'
                      }
                      width={233}
                      height={233}
                    />
                  )}
                </div>
                <div className={`${style.btn_label_wrap} ${style.btn_right}`}>
                  {stateCropp ? (
                    <CircleButton onClick={showCroppedImage}>
                      <i className="icon-checkmark" />
                    </CircleButton>
                  ) : (
                    <CircleButton onClick={handleInputClick}>
                      <i className="icon-pencil" />
                    </CircleButton>
                  )}
                </div>

                <div className={`${style.btn_label_wrap} ${style.btn_left}`}>
                  {stateCropp && (
                    <CircleButton onClick={cancelCropper}>
                      <i className="icon-cross" />
                    </CircleButton>
                  )}
                </div>
              </div>

              <div className={style.verificationForm__inputsWrap}>
                <div className={style.verificationForm__inputWrap}>
                  <Field
                    type="text"
                    placeholder={captions.placeholder.firstName}
                    name="firstName"
                    validate={isValidName}
                    component={Input}
                  />
                </div>

                <div className={style.verificationForm__inputWrap}>
                  <Field
                    type="text"
                    placeholder={captions.placeholder.lastName}
                    name="lastName"
                    validate={isValidName}
                    component={Input}
                  />
                </div>

                <div className={style.verificationForm__inputWrap}>
                  <Field
                    type="tel"
                    placeholder={captions.placeholder.phone}
                    component={InputPhone}
                    name="phone"
                    validate={isValidPhone}
                  />
                </div>
              </div>

              <div className={style.buttonWrap}>
                <Button onClick={handleSubmit} valid={isValid} dirty={dirty}>
                  {captions.button.default}
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
