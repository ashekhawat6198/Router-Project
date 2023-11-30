import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar"; 
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { Route,Routes } from "react-router";


function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
      <div className="flex w-screen h-screen bg-richblack-900 flex-col overflow-y-hidden">
         <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
         <Routes>
          
          <Route path="/" element={<Home />}/> 
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/dashboard" element={
            
               <Dashboard/>           }/>

          
         </Routes>

      </div>


  );
}

export default App;
