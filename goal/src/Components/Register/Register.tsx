import React, { useState } from 'react'
import Register1 from './Register1';

import {Link} from "react-router-dom"

function Register() {
    const [step, setStep] = 
    useState<{value: number}>({
        value: 0
  });

  const handleNext = () =>{
    setStep({value: step.value+1});
  }

  return (
    <>
    {step.value===0 && (
        <>
        <div className="p-4 bg-background w-screen h-screen">
        
        <div className="sm:text-5xl sm:ml-28 sm:mt-8 text-xxl font-bold text-main">Logo</div>
        {/* <div className="sm:w-96 sm:absolute lg:left-1/4 sm:top-1/4 sm:translate-x-1/2 sm:tarnslate-y-1/2"> */}
        <div className="flex flex-col md:justify-center md:items-center">
        <div className="md:w-96 md:mt-10">
        <div className="sm:text-3xl text-primary font-semibold text-black pt-4 pb-2">Sign Up</div>
        <div className="pt-3">
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Phone' />
        </div>
        <div className="pt-3 ">
                <select className="w-full h-12 px-2 py-2 rounded text-sub" name="genders" id="gender">
                    <option value="gender"> Gender</option>
                    <option value="Male"> Male</option>
                    <option value="Female"> Female</option>
                    <option value="Others"> Others</option>
                </select>
        </div>
        <div className="pt-3 ">
            <input className="w-full h-12 px-2 py-2 rounded" type="number" placeholder='Age' />
        </div>
        
        <div className="pt-4"> 
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-main" onClick={handleNext}>
                Next
            </button>
        </div>
        <Link to="login">
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-4">Already have an account?<span className="font-semibold text-secondary text-main"> Login.</span></p>
        </div>
        </Link>
        </div>
        </div>
    </div>
    
    </>
    )}
    {step.value === 1 && (
        <>
        <div className="p-4 bg-background w-screen h-screen">
        
        <div className="sm:text-5xl sm:ml-28 sm:mt-8 text-xxl font-bold text-main">Logo</div>
        {/* <div className="sm:w-96 sm:absolute lg:left-1/4 sm:top-1/4 sm:translate-x-1/2 sm:tarnslate-y-1/2"> */}
        <div className="flex flex-col md:justify-center md:items-center">
        <div className="md:w-96 md:mt-10">
        <div className="sm:text-3xl text-primary font-semibold text-black pt-4 pb-2">Sign Up</div>
        <div className="pt-3">
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Phone' />
        </div>
        <div className="pt-3 ">
            <div className="flex flex-row">
            <input className="w-full h-12 px-2 py-2 rounded-l-lg" type="number" placeholder='OTP' />
            <button className="bg-white rounded-r-lg px-2 text-main ">Send</button>
            </div>
        </div>
        <div className="pt-3 ">
            <input className="w-full h-12 px-2 py-2 rounded" type="number" placeholder='Email ID' />
        </div>
        <div className="pt-3 ">
            <input className="w-full h-12 px-2 py-2 rounded" type="number" placeholder='Invite Code' />
        </div>
        <div className="relative mb-8">
        <a className="mailtoui" href="mailto:utkarshmauryacs@gmail.com?body=Hope%20you're%20doing%20well.">
        <p className="absolute inset-y-0 right-0 text-sm font-medium pt-2">Didn't get the invite link?</p>
        </a>
        </div>
        
        <div className="pt-4"> 
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-main" onClick={handleNext}>
                Next
            </button>
        </div>
        <Link to="login">
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-4">Already have an account?<span className="font-semibold text-secondary text-main"> Login.</span></p>
        </div>
        </Link>
        </div>
        </div>
    </div>
        </>
    )}

    {step.value === 2 && (
        <>
        <div className="p-4 bg-background w-screen h-screen">
        
        <div className="sm:text-5xl sm:ml-28 sm:mt-8 text-xxl font-bold text-main">Logo</div>
        {/* <div className="sm:w-96 sm:absolute lg:left-1/4 sm:top-1/4 sm:translate-x-1/2 sm:tarnslate-y-1/2"> */}
        <div className="flex flex-col md:justify-center md:items-center">
        <div className="md:w-96 md:mt-10">
        <div className="sm:text-3xl text-primary font-semibold text-black pt-4 pb-2">Sign Up</div>
        <div className="pt-3">
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Aadhar' />
        </div>
        <div className="pt-3">
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='PAN' />
        </div>
        
        <div className="pt-4"> 
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-main">
                Sign Up
            </button>
        </div>
        <div className="flex justify-center items-center">
            <button className="w-full h-12 rounded text-secondary text-main font-semibold bg-transparent border-2 border-main mt-2"
            onClick={()=>setStep({value : 0})}>
                Skip
            </button>
        </div>
        <Link to="login">
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-4">Already have an account?<span className="font-semibold text-secondary text-main"> Login.</span></p>
        </div>
        </Link>
        </div>
        </div>
    </div>
        </>
    )}
    </>
  )
}

export default Register