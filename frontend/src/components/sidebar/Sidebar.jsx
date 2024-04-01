import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import { FaBell } from "react-icons/fa";


const Sidebar = () => {
  return (
    <div className='fle flex-col w-full h-full mr-20 '>
      <div className='flex justify-center items-center gap-3'>
      <SearchInput />
      <button>
      <FaBell />
      </button>
     
        
      </div>
        
        <div className='divider'></div>
        <Conversations/>
        <LogoutButton />
    </div>
  )
}

export default Sidebar