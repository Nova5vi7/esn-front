import React, {useCallback, useState} from 'react';

import updateUser from '../services/verification';
import VerificationForm from "./verification-form";
import getCroppedImg from '../helpers/get-cropped-img';

const verificationFormContainer = () => {
    const [filePath, setFilePath] = useState(null);
    const [stateCropp, setStateCropp] = useState(false);
    const [file, setFile] = useState(null);
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [croppedImagePath, setCroppedImagePath] = useState(null)
    const [croppedArea, setCroppedArea] = useState(null)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [blobData, setBlobData] = useState(null)

    const initialValues = {
        firstName: '',
        lastName: '',
        phone: ''
    }

    const captions = {
        placeholderImage: "IFormik called `handleBlur`, but you forgot to pass an `id` or `name` attriage",
        nameImage: "image",
        typeName: "name",
        typeTel: "tel",
        typeFile: "file",
        placeholderPhone: "Phone",
        placeholdeFirstName: "First name",
        placeholdeLastName: "Last name",
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, []);

    const inputRef = React.useRef();

    const handleChange = event => {
        const image = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', () => {
            reader.result && setFilePath(reader.result)
            setStateCropp(true)
        })
    };

    const handleInputClick = () => {
        inputRef.current.click();
    };

    const cancelCropper = () => {
        setFilePath(null)
        inputRef.current.value = null
        setStateCropp(false)
    }

    const handleSubmit = async data => {
        const formData = new FormData();

        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        })
        formData.append('image', blobData);

        await updateUser(formData);
    };

    const showCroppedImage = useCallback(async () => {
        try {
            const {img, b64} = await getCroppedImg(
                filePath,
                croppedAreaPixels,
            )
            const urlImage = URL.createObjectURL(img);
            setBlobData(img)
            setCroppedImagePath(b64)
            setStateCropp(null)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    return (
        <VerificationForm
            handleSubmit={handleSubmit}
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
            initialValues={initialValues}
            captions={captions}
        />
    );
};

export default verificationFormContainer;
