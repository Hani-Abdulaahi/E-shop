import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold mb-4'>Sign Up</h1>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input type='text' className='w-full px-3 py-2 border'
                placeholder='Enter Name' />
            </div>

            <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input type='password' className='w-full px-3 py-2 border' />
            </div>
            <div className='mb-4'>
                <button className='w-full bg-red-600 text-white py-2'>Sing Up</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>All ready have an Account</span>
            <button className='text-red-800' onClick={openLogin}>Login</button>
        </div>
    </div>
  )
}

export default Register