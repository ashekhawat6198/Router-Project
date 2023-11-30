import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function LoginForm({setIsLoggedIn}) {
    const [FormData,setFormData]=useState({email:"",password:""})
    const [showPass,setShowPass]=useState(false);
    const navigate=useNavigate();
    function changeHandeler(event){
         setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
         })
    }

    function submitHandeler(event){
       event.preventDefault();
       setIsLoggedIn(true);
       toast.success("Logged In");
        navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandeler} 
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full '> 
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input type='text' required value={FormData.email} onChange={changeHandeler} placeholder='Enter email address' name='email'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password<sup className='text-pink-200'>*</sup>
            </p>
            <input type={showPass ? ("text"):("password")} required value={FormData.password } onChange={changeHandeler} placeholder='Enter password' name='password' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            <span  className='absolute right-3 top-[38px] cursor-pointer '  onClick={()=>{
                setShowPass((prev)=>!prev)
            }}>
                {showPass ? (<IoEyeOffOutline  fontSize={24} fill='#AFB2BF'/>) : (<MdOutlineRemoveRedEye  fontSize={24} fill='#AFB2BF'/>)}
            </span>
            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>
        </label>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
    </form>
  )
}
