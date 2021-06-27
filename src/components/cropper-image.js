import React, {useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';

const CropperImage = ({image}) => {
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);

    // const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    //     console.log(croppedArea, croppedAreaPixels);
    // }, []);
    const onCropComplete = () => {
    };

    console.log(image)

    return (

        <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
        />

    );
};

export default CropperImage;
