import React, { useEffect, useState } from 'react';
import ReactCrop from 'react-image-crop';
import './app.css';
import 'react-image-crop/dist/ReactCrop.css';

export default () => {
  useEffect(() => {
    console.log('Effect');
  }, []);

  const [crop, setCrop] = useState({ aspect: 2 / 1 });

  const src = 'http://127.0.0.1:8080/uploads/images/2020-02-20/image-1582203849916.png';

  return (
    <div>
      <ReactCrop
        src={src}
        crop={crop}
        onImageLoaded={ (image) => {
          setCrop({
            width: image.width,
            height: image.height,
            aspect: 2 / 1,
          });
          return false; // Return false when setting crop state in here.
        }}
        onChange={(newCrop) => {
          console.log(newCrop);
          return setCrop(newCrop);
        }}
      />
    </div>
  );
};
