import React from 'react'

const Photos = () => {
  return (
    <div classname=" bg-blurred h-screen w-full">
        <h1 className='text-2xl font-bold'>Mars Rover Photos</h1>
        <div className='grid grid-cols-2 gap-4 center'>
            <img src='https://spaceplace.nasa.gov/gallery-space/en/NGC2336-galaxy.en.jpg' alt='mars' className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default Photos