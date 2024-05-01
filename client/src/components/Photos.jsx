import React from 'react';
import { useLocation } from 'react-router-dom';

const Photos = () => {
  const location = useLocation();
  const images = location.state?.images || [];

  console.log(images);

  return (
    <div className="bg-blurred h-screen w-full">
      <div className='grid grid-cols-2 gap-4 center'>
        {images.map((image, index) => (
          <img key={index} src={image.img_src} alt={image.rover.name} className='w-full h-full object-cover' />
        ))}
      </div>
    </div>
  )
}

export default Photos;