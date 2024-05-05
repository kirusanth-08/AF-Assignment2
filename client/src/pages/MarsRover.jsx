import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MarsRover = () => {
  const [selectedRover, setSelectedRover] = useState("curiosity");
  const [selectedCamera, setSelectedCamera] = useState("rhaz");
  const [selectedSol, setSelectedSol] = useState(1);
  const [selectedEarthDate, setSelectedEarthDate] = useState("2013-04-25");
  const [images, setImages] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [showDetail, setShowDetail] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  const handleBack = (event) => {
    setShowForm(true);
  }

  const viewDetail = (event) => {
    setShowDetail(true);
  }

  const hideDetail = (event) => {
    setShowDetail(false);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=${selectedSol}&api_key=rXQUrs3QIGnJgbZxTAJy0P48RGpR8F7f3mqwLJWJ&camera=${selectedCamera}&earth_date=${selectedEarthDate}`
      )
      .then((response) => {
        setImages(response.data.photos);
      })
      .catch((error) => console.error(error));
  }, [selectedRover, selectedCamera, selectedSol, selectedEarthDate]);
  return (
    <div className="bg-blurred w-full h-screen flex justify-center sm:items-center">
      {showForm ? (
        <div className="flex justify-center items-center w-full p-20">
          <div className=" rounded-lg p-5 bg-opacity-20 bg-white border-2 border-white">
            <div className="flex flex-col items-start justify-center">
              <label className="text-2xl font-bold">Mars Rover Photos</label>
              <br />
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

              <button
                onClick={handleSubmit}
                className="w-full p-2 m-2 bg-white text-black hover:bg-transparent border-2 transition-all hover:text-white hover:border-white text-center rounded-lg">
                Get photos ({(images.length)})
              </button>
            </div>
          </div>
        </div>
      ) : (

        <div className="w-full h-full flex justify-center items-center ">  
        <div className="relative w-2/3 h-2/3 bg-white bg-opacity-10 overflow-scroll grid grid-cols-3 gap-2 rounded-2xl p-10 border-2">
          <div className="absolute top-1 left-1 px-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30" onClick={ handleBack } >Back</div>
            {images.map((image, index) => (
              <>
                <img
                  key={index}
                  src={image.img_src}
                  alt={image.rover.name}
                  className="m-auto rounded-lg object-cover w-60" onClick={ viewDetail }
                />
                { showDetail && (
                  <>
                    <div className=" sm:w-1/5 fixed h-2/3 bg-black bg-opacity-30 right-0 p-5 rounded-l-2xl">
                      <button className="absolute top-0 right-0 text-sm underline" onClick={ hideDetail }>close</button>
                      <h1 className=" text-3xl">PhotoDetails</h1>
                      <p>Sol: {image.sol}</p>
                      <p>Camera: {image.camera.full_name}</p>
                      <p>Earth Date: {image.earth_date}</p>
                      <p>Rover: {image.rover.name}</p>
                      <p>Landing Date: {image.rover.landing_date}</p>
                      <p>Launch Date: {image.rover.launch_date}</p>
                      <p>Status: {image.rover.status}</p>
                      <p>Max Sol: {image.rover.max_sol}</p>
                      <p>Max Date: {image.rover.max_date}</p>
                      <p>Total Photos: {image.rover.total_photos}</p>
                      <a href={image.img_src} className=" text-blue-600 underline">View photo</a>
                      
                    </div>
                    {/* <div className="w-1/5 fixed h-2/3 bg-white bg-opacity-10 left-0"></div>             */}
                  </>
                ) }
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MarsRover;
