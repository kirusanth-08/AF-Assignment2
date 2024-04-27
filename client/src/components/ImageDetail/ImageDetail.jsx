import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageDetail = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.nasa.gov/planetary/apod?api_key=rXQUrs3QIGnJgbZxTAJy0P48RGpR8F7f3mqwLJWJ',
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className='imagedetail w-full bg-white-400 h-screen flex justify-center items-center'>
      {data && (
        <div className='flex w-4/5 h-3/4 rounded-md overflow-hidden border-2 border-opacity-20'>
          <div className='w-1/4 h-3-4 bg-white text-white font-extralight text-sm p-3 overflow-auto bg-opacity-60 backdrop-blur-md'>
            <div className='font-semibold text-base'>Title: </div> {data.title} <br />
            <div className='font-semibold'>Date: </div> {data.date} <br />
            <div className='font-semibold'>Author: </div> {data.copyright} <br />
            <div className='font-semibold'>Discription: </div> {data.explanation}
          </div>
          <img src={data.url}
            alt='astronomy'
            className='w-3/4 h-full object-cover' />
        </div>
      )}
    </div>
  );
};

export default ImageDetail;