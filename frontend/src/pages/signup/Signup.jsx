import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
  const [inputs, setInputs]=useState({
    fullName:"",
    email:"",
    contactNumber:"",
    password:"",
    confirmPassword:"",

  })
  const {loading, signup}=useSignup();

//   const handleCheckboxChange=()=>{
// setInputs({...inputs})
//   }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await signup(inputs)
    
  }
  return (
    <div className='flex flex-col items-centre justify-center min-w-96 auto'>
      <div className='w-full p-6 founded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-[#2d6a4f]'>
          Sign Up ChatApp
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder="Enter Full name" className='w-full input input-bordered h-10 bg-[#e8f5f8]'
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}/>
            <label className='label p-2'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input type="email" placeholder="Enter username" className='w-full input input-bordered h-10 bg-[#e8f5f8]'
            value={inputs.email}
            onChange={(e)=>setInputs({...inputs, email:e.target.value})}/>
            <label className='label p-2'>
              <span className='text-base label-text'>Contact No.</span>
            </label>
            <input type="text" placeholder="Enter Full name" className='w-full input input-bordered h-10 bg-[#e8f5f8]'
            value={inputs.contactNumber}
            onChange={(e)=>setInputs({...inputs, contactNumber:e.target.value})}/>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="text" placeholder="Enter Password" className='w-full input input-bordered h-10 bg-[#e8f5f8]'
            value={inputs.password}
            onChange={(e)=>setInputs({...inputs, password:e.target.value})}/>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="text" placeholder="Enter Password" className='w-full input input-bordered h-10 bg-[#e8f5f8]'
            value={inputs.confirmPassword}
            onChange={(e)=>setInputs({...inputs, confirmPassword:e.target.value})}/>
          </div>
          <Link to={'/login'} className='text-sm hover:underline hover:text-red-600 mt-4 inlibe-block' href='#'>
            Already have an account?
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2 border bg-gray-200' disabled={loading}> {loading ? 'Signing Up...' : 'Sign Up'}</button>
          </div>
        </form>

      </div>
      
    </div>
  )
}

export default Signup