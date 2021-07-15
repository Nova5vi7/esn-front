import { Field, Formik } from 'formik';
import React from 'react';

import {
  VerificationWrap,
  FormComponent,
  FormWrap
} from '@/components/form/verification-form-style';

import Button from '../components/button/button';
import { ButtonWrap } from '../components/button/button-style';
import CropperContainer from '@/components/image-cropper/cropper-container';
import Input from '../components/input/input';
import { InputWrap, InputsWrap } from '../components/input/input-style';
import InputPhone from '../components/input/input-phone';
import isValidName from './verifiers/is-valid-name';
import isValidPhone from './verifiers/is-valid-phone';

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
  croppedImagePath,
  initialValues,
  captions
}) => {
  return (
    <VerificationWrap>
      <FormWrap>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isValid, handleSubmit, dirty }) => (
            <FormComponent>
              <CropperContainer
                filePath={filePath}
                stateCropp={stateCropp}
                handleChange={handleChange}
                inputRef={inputRef}
                handleInputClick={handleInputClick}
                cancelCropper={cancelCropper}
                crop={crop}
                setCrop={setCrop}
                zoom={zoom}
                setZoom={setZoom}
                onCropComplete={onCropComplete}
                showCroppedImage={showCroppedImage}
                croppedImagePath={croppedImagePath}
                captions={captions}
              />

              <InputsWrap>
                <InputWrap>
                  <Field
                    type="text"
                    placeholder={captions.placeholder.firstName}
                    name="firstName"
                    validate={isValidName}
                    component={Input}
                  />
                </InputWrap>

                <InputWrap>
                  <Field
                    type="text"
                    placeholder={captions.placeholder.lastName}
                    name="lastName"
                    validate={isValidName}
                    component={Input}
                  />
                </InputWrap>

                <InputWrap>
                  <Field
                    type="tel"
                    placeholder={captions.placeholder.phone}
                    component={InputPhone}
                    name="phone"
                    validate={isValidPhone}
                  />
                </InputWrap>
              </InputsWrap>

              <ButtonWrap>
                <Button onClick={handleSubmit} valid={isValid} dirty={dirty}>
                  {captions.button.default}
                </Button>
              </ButtonWrap>
            </FormComponent>
          )}
        </Formik>
      </FormWrap>
    </VerificationWrap>
  );
};

export default verificationForm;
