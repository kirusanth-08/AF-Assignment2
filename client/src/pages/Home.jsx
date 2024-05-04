import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-blurred w-full h-screen flex justify-center items-center'>
        <div className=' flex flex-col font-extrabold text-7xl w-1/4 h-2/4 mr-8 rounded-2xl p-12'>
            Lets Dive into the Space.
            <Link to="/menu">
                <button className=' mt-4 border-2 font-extralight border-white text-4xl rounded-md py-1 px-10 hover:text-blue-900 hover:bg-white hover:border-white transition-all'>DIVE IN!</button>
            </Link>
        </div>
        <div className='text-4xl w-2/4 h-3/4 ml-8 bg-black rounded-2xl overflow-hidden shadow-inner'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg" className=' object-cover w-full opacity-80 ' />
        </div>
    </div>
  )
}

export default Home