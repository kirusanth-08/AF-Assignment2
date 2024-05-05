import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.serverUrl}/register`, formData);

      // Check if registration was successful
      if (response && response.data && response.data.token) {
        // Save token to localStorage for future use
        localStorage.setItem('token', response.data.token);

        // Save name to localStorage for future use
        localStorage.setItem('name', formData.name);

        // Proceed to the main page or any other route
        navigate('/');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='bg-blurred w-full h-screen flex flex-col justify-center items-center p-20'>
      <div className='bg-white bg-opacity-10 border-2 w-full sm:w-1/3 flex flex-col justify-between gap-10 items-center rounded-xl p-4 z-50'>
        <h1 className='text-3xl font-semibold'>Register</h1>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleSubmit} className='flex flex-col items-center w-full'>
          <input
            type='text'
            placeholder='Name'
            className='w-3/4 sm:w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            placeholder='Email'
            className='w-3/4 sm:w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='w-3/4 sm:w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type='submit'
            value='Register'
            className='cursor-pointer w-3/4 sm:w-1/2 p-2 my-2 rounded-xl bg-white border-2 border-opacity-50 bg-opacity-80 border-yellow-50 hover:bg-transparent hover:text-white text-black transition-all'
          />
        </form>
        <p className='w-full text-end'>
          Have an account already? <Link to="/login" className='underline'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
