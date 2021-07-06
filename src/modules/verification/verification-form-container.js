import React, { useCallback, useState } from 'react';

import getCroppedImg from '../../helpers/get-cropped-img';
import updateUser from '../../services/update-user';
import VerificationForm from './verification-form';

const captions = {
  placeholder: {
    phone: 'Phone',
    firstName: 'First name',
    lastName: 'Last name',
    image:
      'IFormik called `handleBlur`, but you forgot to pass an `id` or `name` attriage'
  },
  button: {
    default: 'Continue'
  }
};

const verificationFormContainer = () => {
  const [filePath, setFilePath] = useState(null);
  const [cropState, setCropState] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImagePath, setCroppedImagePath] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [blobData, setBlobData] = useState(null);

  const initialValues = {
    firstName: '',
    lastName: '',
    phone: ''
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const inputRef = React.useRef();

  const handleChange = event => {
    const image = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      reader.result && setFilePath(reader.result);
      setCropState(true);
    });
  };

  const handleInputClick = () => {
    inputRef.current.click();
  };

  const cancelCropper = () => {
    setFilePath(null);
    inputRef.current.value = null;
    setCropState(false);
  };

  const handleSubmit = async data => {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    formData.append('image', blobData);

    await updateUser(formData);
  };

  const showCroppedImage = useCallback(async () => {
    try {
      const { img, b64 } = await getCroppedImg(filePath, croppedAreaPixels);
      setBlobData(img);
      setCroppedImagePath(b64);
      setCropState(null);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels]);

  return (
    <VerificationForm
      handleSubmit={handleSubmit}
      filePath={filePath}
      stateCropp={cropState}
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
      initialValues={initialValues}
      captions={captions}
    />
  );
};

export default verificationFormContainer;
