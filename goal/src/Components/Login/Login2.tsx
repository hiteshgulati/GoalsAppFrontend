import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';

function Login2() {
    const [login, setLogin] = 
    useState<{value: string;}>({
        value: 'phone',
  });

  return (
    <>
    <div className="p-4 bg-background w-screen h-screen">
        
        <div className="sm:text-5xl sm:ml-28 sm:mt-8 text-xxl font-bold text-main">Logo</div>
        {/* <div className="sm:w-96 sm:absolute lg:left-1/4 sm:top-1/4 sm:translate-x-1/2 sm:tarnslate-y-1/2"> */}
        <div className="flex flex-col md:justify-center md:items-center">
            <div className="md:w-96 md:mt-10">
        <div className="sm:text-3xl text-primary font-semibold text-black pt-4 pb-2">Login</div>
        
        {login.value === 'phone' ?(
            <div className="pt-3 ">
            <div className="flex flex-row">
            <input className="w-full h-12 px-2 py-2 rounded-l-lg" type="text" placeholder='Enter OTP' />
            {/* <button className="bg-white rounded-r-lg px-2 text-sub "><FaEyeSlash /></button> */}
            </div>
        </div>) :(
            <>
            <div className="pt-3 ">
            <div className="flex flex-row">
            <input className="w-full h-12 px-2 py-2 rounded-l-lg" type="password" placeholder='Password' />
            <button className="bg-white rounded-r-lg px-2 text-sub "><FaEyeSlash /></button>
            </div>
        </div>
        <div className="relative mb-8">
        <p className="absolute inset-y-0 right-0 text-secondary font-semibold pt-2">Forgot Password?</p>
        </div>
        </>
        )}
        
        
        <div className="pt-4"> 
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-main">
                Login
            </button>
        </div>
        <div className="flex justify-center items-center">
            <button className="w-full h-12 rounded text-secondary text-main font-semibold bg-transparent border-2 border-main mt-2">
                Go Back
            </button>
        </div>
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-4">Don't have an account?<span className="font-semibold text-secondary text-main"> Sign Up.</span></p>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login2