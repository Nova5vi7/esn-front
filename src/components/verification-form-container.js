import React, {useCallback, useState} from 'react';

import updateUser from '../services/verification';
import VerificationForm from "./verification-form";

const verificationFormContainer = () => {
    const [filePath, setFilePath] = useState(null);
    const [file, setFile] = useState(null);
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels);
    }, []);

    const inputRef = React.useRef();

    const handleChange = event => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image);
        setFile(formData);
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('load', () => {
            reader.result && setFilePath(reader.result)
        })
    };

    const handleInputClick = () => {
        inputRef.current.click();
    };

    const handleSubmit = async data => {
        await updateUser(data);
    };

    console.log(filePath)
    return (
        <VerificationForm
            handleSubmit={handleSubmit}
            filePath={filePath}
            handleChange={handleChange}
            inputRef={inputRef}
            handleInputClick={handleInputClick}
            crop={crop}
            setCrop={setCrop}
            zoom={zoom}
            setZoom={setZoom}
            onCropComplete={onCropComplete}
        />
    );
};

export default verificationFormContainer;
