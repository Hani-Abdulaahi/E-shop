import React from 'react'

const Login = ({openSingnUp}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input type='email' className='w-full px-3 py-2 border'
                placeholder='Enter Email' />
            </div>

            <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input type='password' className='w-full px-3 py-2 border' />
            </div>
            <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'>
            <input type='checkbox' className='form-checkbox' />
            <span className='ml-2 text-gray-700'>Remember me</span>
            </label>
            <a href='#' className='text-red-800'>For get password</a>
            
            </div>
            <div className='mb-4'>
                <button className='w-full bg-red-600 text-white py-2'>Login</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Don't move an Account</span>
            <button className='text-red-800' onClick={openSingnUp}>Sing Up</button>
        </div>
    </div>
  )
}

export default Login;