import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const {loading, login}=useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(email, password)
  }

  return (
    <div className='flex flex-col items-centre justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-[#2d6a4f]'>Login ChatApp
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
          </label>

          <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10'
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
          
        </div>
        <div>
          <label className='label'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input 
          type="password"
          placeholder="Enter Password"
          className='w-full input input-bordered h-10'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <Link to='/signup' className='text-sm hover:underline hover:text-red-600 mt-2 inline-block'>
          {"Don't"} have an account?
        </Link>
        <div>
        <button className='btn btn-block btn-sm mt-2 bg-gray-200' disabled={loading}>
          {loading?<span className='loading loading-spinner'></span>:"Login"}
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}
// const  = () => {
//   return (
//     <div className='flex flex-col items-centre justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-[#2d6a4f]'>Login ChatApp
//       </h1>
//       <form>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//         </div>
//         <div>
//           <label className='label'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input 
//           type="password"
//           placeholder="Enter Password"
//           className='w-full input input-bordered h-10'/>
//         </div>
//         <a href="#" className='text-sm hover:underline hover:text-red-600 mt-2 inline-block'>
//           {"Don't"} have an account?
//         </a>
//         <div>
//           <button className='btn btn-block btn-sm mt-2 bg-gray-200'>Login</button>
//         </div>
//       </form>
//       </div>
//     </div>
//   )
// }

export default Login;