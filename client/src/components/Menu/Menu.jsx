import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Menu = () => {

  return (
    <div className='bg-blurred w-full flex items-center justify-center h-screen' name='menu'>
        <Link to="/imagedetail" className='relative w-1/4 h-3/6 rounded-xl overflow-hidden bg-black my-6 mr-10 border-2 border-opacity-50 border-yellow-50 hover:w-1/2 transition-all duration-500'>
            <img src='https://st2.depositphotos.com/1011081/9511/i/450/depositphotos_95116980-stock-photo-infinite-space-background-with-silhouette.jpg' 
                alt='astronomy' 
                className='w-full h-full object-cover hover:opacity-50 transform transition-all duration-500 hover:scale-110 cursor-pointer' />
                <div className='absolute bottom-0 right-0 text-white text-3xl font-bold p-4 text-right cursor-pointer'>Astronomy Picture of the Day</div>
        </Link>
        <Link to="/marsrover" className='relative w-1/4 h-3/6 rounded-xl overflow-hidden bg-black my-6 ml-10 border-2 border-opacity-50 border-yellow-50 hover:w-1/2 transition-all duration-400'>
            <img src='https://media.npr.org/assets/img/2022/11/04/good-night-oppy-563d16751105d6ca147bbcdfd72d47a704494ae8-s1100-c50.jpg' 
                alt='mars' 
                className='w-full h-full object-cover hover:opacity-50 transform transition-all duration-500 hover:scale-110 cursor-pointer' />
                <div className='absolute bottom-0 right-0 text-white text-3xl font-bold p-4  text-right cursor-pointer'>Mars Rover</div>
        </Link>
    </div>
  )
}

export default Menu;