import React from 'react'
import frameImage from '../assets/frame.png';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {FcGoogle} from "react-icons/fc";
export default function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
    <div className='w-11/12 max-w-[1160px] mx-auto gap-x-20 gap-y-0 flex justify-between '>

         <div className=' w-11/12 max-w-[450px] py-2'>
         <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}  </h1>
          <p className='text-[1.125rem] leading-[1.625rem] mt-3 '>
            <span className='text-richblack-100'>{desc1}</span><br/>
            <span className='text-blue-100 italic'>{desc2}</span>
          </p>

          {formtype==="signup" ?
          (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) :
          (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

          <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='h-[1px] bg-richblack-700 w-full'></div>
            <p className='text-richblack-700 font-medium leading-[1.375rem]'> OR</p>
            <div className='h-[1px] bg-richblack-700 w-full'></div>
          </div>

           <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-4'>
           <FcGoogle/>
            <p>Sign Up With Google</p>
           </button>
           </div>

           <div className='relative w-11/12 max-w-[450px] mt-5 '>
            <img src={frameImage} alt='Pattern' width={558} height={504} loading='lazy' />
            <img src={image} alt='Students' width={558} height={490} loading='lazy' className='absolute -top-4 right-4'/>
           </div>
           

         
    </div>
  )
}
