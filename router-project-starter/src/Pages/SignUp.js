import React from 'react'
import signupImg from '../assets/signup.png';
import Template from '../Components/Template';
export default function SignUp({setIsLoggedIn}) {
  return (
    <Template

    title="Join the millions learning to code with studynotion for free"
    desc1="Build skills for today, tomorrow and beyond"
     desc2="Education to future-proof your carrer."
     image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}
