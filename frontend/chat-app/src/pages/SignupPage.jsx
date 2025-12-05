import React from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  return (
    <div className='flex w-screen min-h-screen justify-center items-center bg-gray-50'>
      <form className='flex flex-col gap-4 bg-white p-8 rounded shadow-lg w-96'>
        <h2 className='text-2xl font-bold text-center mb-4'>Sign up</h2>
        
        <div className='flex flex-col gap-2'>
          <label className='font-medium'>Enter your Name</label>
          <input 
            className='border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500'
            type="text" 
            placeholder='John Doe'
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <label className='font-medium'>Email</label>
          <input 
            className='border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500'
            type="email" 
            placeholder='name@email.com'
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <label className='font-medium'>Password</label>
          <input 
            className='border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500'
            type="password" 
            placeholder='******'
          />
        </div>
        
        <button 
          className='bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition mt-2'
          type="submit"
        >
          Sign up
        </button>
        
        <Link 
          to='/login' 
          className='text-blue-500 text-center hover:underline'
        >
          Already Registered?
        </Link>
      </form>
    </div>
  )
}

export default SignupPage