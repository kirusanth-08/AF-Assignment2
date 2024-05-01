import React from 'react'
import { Link } from 'react-router-dom'

const MarsRover = () => {
  return (
    <div className='bg-blurred w-full h-screen flex justify-center items-center'>
        <div className=' rounded-lg p-5 bg-opacity-20 bg-white border-2 border-white'>
          <form className='flex flex-col items-start justify-center'>
            <label className='text-2xl font-bold'>Mars Rover Photos</label>
            <div>
              <label>Earth Date:</label>
              <input type='date' className='p-2' />
            </div>
            <div>
              <label>Select Rover:</label>
              <select className='w-1/2 p-2 m-2'>
                <option value='curiosity'>Curiosity</option>
                <option value='opportunity'>Opportunity</option>
                <option value='spirit'>Spirit</option>
              </select>
            </div>
            <Link to='/photos' className='w-1/2 p-2 m-2 bg-black text-white hover:bg-opacity-50'>Search</Link>
          </form>
        </div>
    </div>
  )
}

export default MarsRover