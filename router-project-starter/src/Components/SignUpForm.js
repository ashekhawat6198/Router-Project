 import React, { useState } from 'react'
 import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
 export default function SignUpForm({setIsLoggedIn}) {
    const nevigate=useNavigate();
    const [showPass,setShowPass]=useState(false);
    const [showPass1,setShowPass1]=useState(false);
    const [accountType,setAccountType]=useState("Student");
    const [FormData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })


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
    if(FormData.password!=FormData.confirmPassword){
        toast.error("Password do not match");
        return;
    }

    let finalData={

    
        ...FormData,
        accountType
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    console.log(finalData);
    nevigate("/dashboard");
    
   }
   return (
     <div className='-mt-5'>
         {/* student-instructor tab */}
         <div className='flex bg-richblack-800 p-1 gap-x-1 my-7 rounded-full max-w-max'>
            <button className={`${accountType==="student"  ? "bg-richblack-900  text-richblack-5": "bg-transparent text-richblack-200 " } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("student")}>
                Students
            </button>
            <button className={`${accountType==="instructor"  ? "bg-richblack-900 text-richblack-5  ": "bg-transparent text-richblack-200 " } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
         </div>

         <form onSubmit={submitHandeler} className='-mt-3' >
          {/* first and last name */}
         <div className='flex  gap-x-4 w-full '>
         <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                <input  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='text' name='firstName' onChange={changeHandeler} placeholder='Enter first name' value={FormData.firstName}/>
            </label>

            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='text' name='lastName' onChange={changeHandeler} placeholder='Enter last name' value={FormData.lastName }/>
            </label>
         </div>
           
           {/* email address */}
         <label className='w-full '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type='email' name='email' onChange={changeHandeler} placeholder='Enter email Address' value={FormData.email}/>
            </label>

               {/* create and confirm */}

               <div className='flex  gap-x-4 w-full mt-4'> 
               <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPass ? ("text"):("password")} name='password' onChange={changeHandeler} placeholder='Enter Password' value={FormData.password}/>
                <span className='absolute right-3 top-[38px] cursor-pointer ' onClick={()=>{
                setShowPass((prev)=>!prev)
                 }}>
                 {showPass ? (<IoEyeOffOutline fontSize={24} fill='#AFB2BF' />) : (<MdOutlineRemoveRedEye fontSize={24} fill='#AFB2BF' />)}
            </span>
            </label>


            <label  className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Show Password<sup className='text-pink-200'>*</sup></p>
                <input  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' type={showPass1 ? ("text"):("password")} name='confirmPassword' onChange={changeHandeler} placeholder='Confirm Password' value={FormData.confirmPassword}/>
                <span className='absolute right-3 top-[38px] cursor-pointer ' onClick={()=>{
                setShowPass1((prev)=>!prev)
            }}>
                {showPass1 ? (<IoEyeOffOutline fontSize={24} fill='#AFB2BF' />) : (<MdOutlineRemoveRedEye fontSize={24} fill='#AFB2BF' />)}
            </span>
            </label>
         </div>

               <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4 w-full' >Create Account</button>

           
         </form>
     </div>
   )
 }
 