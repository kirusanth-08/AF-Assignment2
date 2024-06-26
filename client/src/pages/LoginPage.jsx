import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.serverUrl}/login`, {
        email,
        password,
      });

      const { token, name } = response.data; // Extract name from response data

      // Store token and name in local storage
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);

      // console.log("The login" + token)

      // Redirect to home page or any other page you want
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className='bg-blurred w-full h-screen flex flex-col justify-center items-center p-20'>
      <div className='bg-white bg-opacity-10 border-2 w-full sm:w-1/3 flex flex-col justify-between gap-10 items-center rounded-xl p-4 z-50'>
        <h1 className='text-3xl font-semibold'>Login</h1>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleLogin} className='flex flex-col items-center w-full'>
          <input
            type='email'
            placeholder='Email'
            className='w-3/4 sm:w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='w-3/4 sm:w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type='submit'
            value='Login'
            className='cursor-pointer w-3/4 sm:w-1/2 p-2 my-2 rounded-xl bg-white border-2 border-opacity-50 bg-opacity-80 border-yellow-50 hover:bg-transparent hover:text-white text-black transition-all'
          />
        </form>
        <p className='w-full text-end'>
          New here? <Link to="/register" className='underline'>Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;