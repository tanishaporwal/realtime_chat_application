import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const[search, setSearch]=useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations();
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!search)return;
    if(search.length<3){
      return toast.error('Search term must be atleast 3 characters long')
    }
  

  const conversation= conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
  if(conversation){
    setSelectedConversation(conversation)
    setSearch('');

  }
  else{
    toast.error("No search user found")
  };}
  return (
    <div className="border border-[#0077b6] rounded-[30px] text-[#0077b6]"> 
      <form onSubmit={handleSubmit} className="flex mx-auto pl-3 pr-3">
      
      <input type="search" placeholder='Search...' className=' bg-transparent text-black outline-none border-0 h-[35px] '
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      ></input>
       <button type="submit" className="">
       <IoMdSearch className="center w-[25px] h-[25px]"/>
       </button>
      
      
  </form>
    </div>
  
  )
}

export default SearchInput