import React from 'react'
import { Link } from 'react-router-dom'
// import './Menu.css'

const Menu = () => {
  return (
    <div className='w-full flex items-center justify-evenly h-screen'>
        <Link to="/apod" className='w-1/4 h-3/6 rounded-xl overflow-hidden bg-white'>
            <img src='https://bsmedia.business-standard.com/_media/bs/img/article/2020-10/07/full/1602035787-2512.jpg?im=FeatureCrop,size=(826,465)' 
                alt='blackhole' 
                className='w-full h-full object-cover opacity-70 transform transition-all duration-500 hover:scale-110 cursor-pointer'></img>
        </Link>
        <Link to="/mars" className='w-1/4 h-3/6 rounded-xl overflow-hidden bg-white'>
            <img src='https://bsmedia.business-standard.com/_media/bs/img/article/2020-10/07/full/1602035787-2512.jpg?im=FeatureCrop,size=(826,465)' 
                alt='blackhole' 
                className='w-full h-full object-cover opacity-70 transform transition-all duration-500 hover:scale-110 cursor-pointer'></img>
        </Link>
    </div>
  )
}

export default Menu