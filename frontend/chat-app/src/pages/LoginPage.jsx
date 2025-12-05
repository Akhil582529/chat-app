import React from 'react'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className='flex w-screen h-screen  justify-center items-center align-middle bg-gray-50'>
       <form className='flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg w-100 h-120'>
            <h2 className='text-2xl font-bold text-center mb-4'>Login</h2>
            <div className='flex flex-col gap-2'>
                <h2 className='font-medium'>Email</h2>
                <input className='border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500'
                type="email" placeholder='name@email.com'/>
            </div> 

            <div className='flex flex-col gap-2'>
                <h2 className='font-medium'>Password</h2>
                <input className='border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500'
                type="password" placeholder='******'/>
            </div>

            <button className= 'text-white py-2 px-4 rounded'>
                Login
            </button>

            <Link 
                to='/signup' className='text-blue-500 text-center hover:underline mt-2'>New User? Sign up
                
            </Link>
       </form>
    </div>
  )
}

export default LoginPage
