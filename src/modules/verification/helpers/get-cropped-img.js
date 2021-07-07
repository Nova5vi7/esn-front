import createImage from './create-image';

const getCroppedImg = async (imageSource, pixelCrop) => {
  const image = await createImage(imageSource);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  context.translate(safeArea / 2, safeArea / 2);
  context.translate(-safeArea / 2, -safeArea / 2);

  context.drawImage(
    image,
    safeArea / 2 - image.width * 0.5,
    safeArea / 2 - image.height * 0.5
  );
  const data = context.getImageData(0, 0, safeArea, safeArea);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  context.putImageData(
    data,
    Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
  );

  const b64 = canvas.toDataURL('image/jpeg');

  const fetchedImage = await fetch(b64);

  const img = await fetchedImage.blob();
  return {
    img,
    b64
  };
};

export default getCroppedImg;
