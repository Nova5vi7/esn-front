import React, { useCallback, useState } from 'react';

import getCroppedImg from './helpers/get-cropped-img';
import updateUser from 'services/user/update-user';
import VerificationForm from './verification-form';

const initialValues = {
  firstName: '',
  lastName: '',
  phone: ''
};

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

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const inputReference = React.useRef();

  const handleChange = ({ target }) => {
    const image = target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', () => {
      reader.result && setFilePath(reader.result);
      setCropState(true);
    });
  };

  const handleInputClick = () => {
    inputReference.current.click();
  };

  const cancelCropper = () => {
    setFilePath(null);
    inputReference.current.value = null;
    setCropState(false);
  };

  const handleSubmit = async data => {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      // eslint-disable-next-line security/detect-object-injection
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
      inputRef={inputReference}
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
