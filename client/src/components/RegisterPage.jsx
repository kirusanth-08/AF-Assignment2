import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/users/register', {
        name,
        email,
        password
      });

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='bg-blurred w-full h-screen flex flex-col justify-center items-center'>
    <div className='bg-white bg-opacity-10 border-2 w-1/3 h-1/2 flex flex-col justify-between items-center rounded-xl p-4 z-50'>
        <h1 className='text-3xl font-semibold'>Register</h1>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleRegister} className='flex flex-col items-center w-full'>
          <input
            type='text'
            placeholder='Name'
            className='w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder='Email'
            className='w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            className='w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Add other input fields (e.g., username) if needed */}
          <input
            type='submit'
            value='Register'
            className='cursor-pointer w-1/2 p-2 my-2 rounded-xl border-2 border-opacity-50 border-yellow-50 hover:bg-white hover:text-black transition-all'
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
