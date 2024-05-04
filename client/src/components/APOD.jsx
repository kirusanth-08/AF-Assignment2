import React, { useEffect, useState } from "react";
import axios from "axios";

const APOD = () => {
  const [data, setData] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  
  const [selectedDate, setSelectedDate] = useState(formattedDate);

  const showDetailHandler = () => {
    setShowDetail(!showDetail);
  }

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=rXQUrs3QIGnJgbZxTAJy0P48RGpR8F7f3mqwLJWJ`
      );
      setData(result.data);
    };
  
    fetchData();
  }, [selectedDate]);

  return (
    <div className="bg-blurred w-full bg-white-400 h-screen flex justify-center items-center">
      {data ? (
        
        <div className="relative flex max-w-6xl h-3/4 rounded-md overflow-hidden border-2 border-opacity-20">
          <img src={data.url} alt="APOD" className="w-full h-full object-cover" />
          
          <div className="p-1 m-2 absolute right-2 cursor-pointer bg-white bg-opacity-0 hover:bg-opacity-5 text-xs border-2 opacity-40 hover:opacity-70 rounded-lg transition-all z-50" onClick={ showDetailHandler }>
            { showDetail ? 'Close Details' : 'Open Details' }
          </div>

          { showDetail && (
            <div className='w-2/4 h-3-4 bg-white text-white font-extralight text-sm p-3 overflow-auto bg-opacity-20 backdrop-blur-md'>
              <div className='font-semibold text-base'>Title: </div> {data.title} <br />
              <div className='font-semibold'>Date: </div> {data.date} <br />
              <div className='font-semibold'>Author: </div> {data.copyright} <br />
              <div className='font-semibold'>Description: </div> {data.explanation}
            </div>)
          }
       
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default APOD;
