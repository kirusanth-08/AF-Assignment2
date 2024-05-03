import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-blurred w-full h-screen flex flex-col justify-center items-center'>
        {/* <div className=' text-9xl absolute self-center font-extrabold z-0'>SpaceXplore</div>
        <div className=' text-xl absolute self-center font-extrabold z-20 text-transparent shadow-2xl shadow-white'>SpaceXplore</div>
        <img src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_640.jpg" className=' absolute rotate-90 z-10 self-center object-cover' /> */}
        <div className='w-3/5 font-extrabold text-6xl mb-10 z-50'>Wait, You got an account?</div>
        <div className='bg-white bg-opacity-10 border-2 w-1/3 flex flex-col justify-center items-center rounded-xl p-4 z-50'>
            <h1 className='text-3xl'>Login</h1>
            <form className='flex flex-col items-center w-full'>
                {/* <input type='text' placeholder='Username' className='w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50' /> */}
                <input type='email' placeholder='Email' className='w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50' />
                <input type='password' placeholder='password' className='w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50' />
                <input type='submit' value='login' className=' cursor-pointer w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50 hover:bg-white hover:text-black transition-all' />
            </form>
            <p className='w-full'></p>
        </div>        
    </div>
  )
}

export default LoginPage