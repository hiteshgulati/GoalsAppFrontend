import React from 'react'

function Register3() {
  return (
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
            <button className="w-full h-12 rounded text-secondary text-main font-semibold bg-transparent border-2 border-main mt-2">
                Skip
            </button>
        </div>
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-4">Already have an account?<span className="font-semibold text-secondary text-main"> Login.</span></p>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Register3