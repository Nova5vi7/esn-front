import React from 'react';
import { Field } from 'formik';
import Image from 'next/image';

import CircleButton from '@/components/circle-button/circle-button';
import InputFile from '@/components/input/input-file';
import CropperImage from './cropper-image';
import {
  CropperWrap,
  CropperContainerStyle,
  ButtonGroup
} from './cropper-style';

const CropperContainer = ({
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
  captions
}) => {
  return (
    <CropperContainerStyle>
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

      <CropperWrap>
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
            src={croppedImagePath ? croppedImagePath : '/images/user-plug.png'}
            width={233}
            height={233}
          />
        )}
      </CropperWrap>

      <ButtonGroup left={'auto'} right={'15px'}>
        {stateCropp ? (
          <CircleButton onClick={showCroppedImage}>
            <i className="icon-checkmark" />
          </CircleButton>
        ) : (
          <CircleButton onClick={handleInputClick}>
            <i className="icon-pencil" />
          </CircleButton>
        )}
      </ButtonGroup>

      <ButtonGroup left={'15px'} right={'auto'}>
        {stateCropp && (
          <CircleButton onClick={cancelCropper}>
            <i className="icon-cross" />
          </CircleButton>
        )}
      </ButtonGroup>
    </CropperContainerStyle>
  );
};

export default CropperContainer;
