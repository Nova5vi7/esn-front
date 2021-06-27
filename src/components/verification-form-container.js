import React, {useState} from 'react';

import updateUser from '../services/verification';
import VerificationForm from "./verification-form";

const verificationFormContainer = () => {
    const [filePath, setFilePath] = useState(null);
    const [file, setFile] = useState(null);

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
        console.log((data.file = file));
        await console.log(data);
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
        />
    );
};

export default verificationFormContainer;
