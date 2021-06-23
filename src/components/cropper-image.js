import React, { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';

const CropperImage = ({ myImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);

  //TODO ПОКА НЕ РАБОТАЕТ

  return (
    <Cropper
      image={myImage}
      crop={crop}
      zoom={zoom}
      aspect={4 / 3}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    />
  );
};

export default CropperImage();
