import React from 'react';
import Cropper from 'react-easy-crop';

const CropperImage = ({
  image,
  crop,
  setCrop,
  zoom,
  setZoom,
  onCropComplete,
  aspect
}) => (
  <Cropper
    image={image}
    crop={crop}
    zoom={zoom}
    aspect={aspect}
    onCropChange={setCrop}
    onCropComplete={onCropComplete}
    onZoomChange={setZoom}
  />
);

export default CropperImage;
