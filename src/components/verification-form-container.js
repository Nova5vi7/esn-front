import React, {useCallback, useState} from 'react';

import updateUser from '../services/verification';
import VerificationForm from "./verification-form";

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
        // setCroppedImagePath(null)
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

    const createImage = url =>
        new Promise((resolve, reject) => {
            const image = new Image()
            image.addEventListener('load', () => resolve(image))
            image.addEventListener('error', error => reject(error))
            image.setAttribute('crossOrigin', 'anonymous')
            image.src = url
        })
    let b64 = null
    const getCroppedImg = async (imageSrc, pixelCrop) => {
        const image = await createImage(imageSrc)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        const maxSize = Math.max(image.width, image.height)
        const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

        canvas.width = safeArea
        canvas.height = safeArea

        ctx.translate(safeArea / 2, safeArea / 2)
        ctx.translate(-safeArea / 2, -safeArea / 2)

        ctx.drawImage(
            image,
            safeArea / 2 - image.width * 0.5,
            safeArea / 2 - image.height * 0.5
        )
        const data = ctx.getImageData(0, 0, safeArea, safeArea)

        canvas.width = pixelCrop.width
        canvas.height = pixelCrop.height

        ctx.putImageData(
            data,
            Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
            Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
        )

        b64 = canvas.toDataURL('image/jpeg');

        const res = await fetch(b64)
        return res.blob()
    }

    const showCroppedImage = useCallback(async () => {
        try {
            const img = await getCroppedImg(
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
        />
    );
};

export default verificationFormContainer;
