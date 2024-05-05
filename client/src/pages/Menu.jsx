import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='bg-blurred w-full h-screen' name='menu'>
      <div className='w-full flex flex-col sm:flex-row items-center justify-around h-full p-10'>
        <Link to="/apod" className='relative sm:mx-10 w-9/10 sm:w-1/3 sm:h-2/3 rounded-xl overflow-hidden bg-black border-2 border-opacity-50 border-yellow-50 transition-all duration-500'>
            <img src='https://st2.depositphotos.com/1011081/9511/i/450/depositphotos_95116980-stock-photo-infinite-space-background-with-silhouette.jpg' 
                alt='APOD' 
                className='w-full h-full object-cover hover:opacity-50 transform transition-all duration-500 hover:scale-110 cursor-pointer' />
                <div className='absolute bottom-0 right-0 text-white text-3xl font-bold p-4 text-right cursor-pointer'>Astronomy Picture of the Day</div>
        </Link>
        <Link to="/marsrover" className='relative sm:mx-10 w-9/10 sm:w-1/3 sm:h-2/3 rounded-xl overflow-hidden bg-black border-2 border-opacity-50 border-yellow-50  transition-all duration-400'>
            <img src='https://media.npr.org/assets/img/2022/11/04/good-night-oppy-563d16751105d6ca147bbcdfd72d47a704494ae8-s1100-c50.jpg' 
                alt='mars-rover' 
                className='w-full h-full object-cover hover:opacity-50 transform transition-all duration-500 hover:scale-110 cursor-pointer' />
                <div className='absolute bottom-0 right-0 text-white text-3xl font-bold p-4  text-right cursor-pointer'>Mars Rover</div>
        </Link>
      </div>
    </div>
  )
}

export default Menu;