import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const MarsRover = () => {
  const [selectedRover, setSelectedRover] = useState("curiosity");
  const [selectedCamera, setSelectedCamera] = useState("rhaz");
  const [selectedSol, setSelectedSol] = useState(1);
  const [selectedEarthDate, setSelectedEarthDate] = useState("2013-04-25");
  const [images, setImages] = useState([]);

  const handleRoverChange = (event) => {
    setSelectedRover(event.target.value);
  };

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  const handleSolChange = (event) => {
    setSelectedSol(event.target.value);
  };

  const handleEarthDateChange = (event) => {
    setSelectedEarthDate(event.target.value);
  };


useEffect(() => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=${selectedSol}&api_key=rXQUrs3QIGnJgbZxTAJy0P48RGpR8F7f3mqwLJWJ&camera=${selectedCamera}&earth_date=${selectedEarthDate}`)
    .then(response => {
      setImages(response.data.photos);
    })
    .catch(error => console.error(error));
}, [selectedRover, selectedCamera, selectedSol, selectedEarthDate]);
  return (
    <div className="bg-blurred w-full h-screen flex justify-center items-center">
      <div className=" rounded-lg p-5 bg-opacity-20 bg-white border-2 border-white">
        <div className="flex flex-col items-start justify-center">
          <label className="text-2xl font-bold">Mars Rover Photos</label><br />
          <div>
            <label>Earth Date:</label>
            <input
              type="date"
              className="p-2"
              value={selectedEarthDate}
              onChange={handleEarthDateChange}
            />
          </div>
          <div className="w-full">
            <label>Sol:</label>
            <input
              type="number"
              className="p-2 text-right"
              value={selectedSol}
              onChange={handleSolChange}
            />
          </div>
          <div>
            <label>Select Camera:</label>
            <select
              className="w-1/2 p-2 m-2 bg-black bg-opacity-25 rounded-lg"
              value={selectedCamera}
              onChange={handleCameraChange}
            >
              <option value="fhaz">Front Hazard Avoidance Camera</option>
              <option value="rhaz">Rear Hazard Avoidance Camera</option>
              <option value="mast">Mast Camera</option>
              <option value="chemcam">Chemistry and Camera Complex</option>
              <option value="mahli">Mars Hand Lens Imager</option>
              <option value="mardi">Mars Descent Imager</option>
            </select>
          </div>
          <div>
            <label>Select Rover:</label>
            <select
              className="w-1/2 p-2 m-2 bg-black bg-opacity-25 rounded-lg"
              value={selectedRover}
              onChange={handleRoverChange}
            >
              <option value="curiosity">Curiosity</option>
              <option value="opportunity">Opportunity</option>
              <option value="spirit">Spirit</option>
            </select>
          </div>
          <Link to={{
            pathname: '/photos',
            state: { images }
          }} className='w-full p-2 m-2 bg-black text-white hover:bg-opacity-50 text-center rounded-lg'
          >Get photos ({ images.length })</Link>
        </div>
      </div>
    </div>
  );
};

export default MarsRover;
