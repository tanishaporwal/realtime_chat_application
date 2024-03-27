import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

 const useSignup =  () => {
  const [loading, setLoading]= useState(false);
  const{ setAuthUser}=useAuthContext();

  const signup= async({fullName,email,contactNumber, password, confirmPassword})=>{
    const success=handleInputError({fullName,email,contactNumber, password, confirmPassword })
    if(!success) return;
    setLoading(true);
    try{
        const res= await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName,email,contactNumber, password, confirmPassword })
        });

        const data= await res.json();
        if(data.error){
            throw new Error(data.error)
        }
        console.log(data)
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);

    }
    catch(error){
        toast.error(error.message);
       
    }
    finally{
        setLoading(false);
    }

  }
  return {loading, signup};

};

export default useSignup;
function handleInputError({fullName, email,contactNumber, password, confirmPassword}){
    if(!fullName ||!email|| !contactNumber || !password || !confirmPassword){
        toast.error("Please fill all the fields")
        return false;
    }
    if(password !== confirmPassword){
        toast.error('Passwords do not match')
        return false;
    }
    if(password.length <6){
        toast.error('Password must be atleast 6 characters');
        return false;
    }
    return true
}
