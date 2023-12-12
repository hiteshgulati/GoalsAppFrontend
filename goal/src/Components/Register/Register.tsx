import React, {useState , ChangeEvent, FormEvent} from 'react'
import Register1 from './Register1';
import PhoneInput, { CountryData } from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';

import {Link} from "react-router-dom"

function Register() {

    const [step, setStep] = 
    useState<{value: number}>({
        value: 0
  });

  const [mobile_number, setMobileNumber] = useState("");
  const [isd_code, setIsd_code] = useState("");
    
  console.log(isd_code);

  const [auth, setAuth] = useState({
        name:"",
        gender:"",
        age:"",
        isd_code: "",
        phone:"",
        email:"",
        pan:"",
        aadhaar:"",
        phone_otp:"",
        password:"",
        invite_code:""
  })
  
    auth.phone = mobile_number;
    auth.isd_code = isd_code


  const handleNext = () =>{
    setStep({value: step.value+1});
  }
  const handleBack = () =>{
    setStep({value: step.value-1});
  }


  console.log(mobile_number);

  const sendOtp = async()=>{
    // e.preventDefault();
    try{
        const response = await axios.post(`https://amb-api-dev.embetter.in/users/register/mobile-otp?isd_code=${isd_code}&mobile_number=${mobile_number}`,{
            isd_code,
            mobile_number
        })
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
  }

    const handleSubmit = async()=>{
        console.log("The payload is", auth);
        try{
            const response = await axios.post("https://amb-api-dev.embetter.in/users/register/new-user", auth,{
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);
        }catch(err){
            console.log(err);
        }
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
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Name' onChange={(e) =>
                        setAuth({ ...auth, name: e.target.value })
                      }/>
        </div>
        <div className="pt-3 ">
                <select className="w-full h-12 px-2 py-2 rounded text-sub" name="genders" id="gender" onChange={(e)=>{
                    setAuth({...auth, gender: e.target.value})
                }}>
                    <option value="gender"> Gender</option>
                    <option value="male"> Male</option>
                    <option value="female"> Female</option>
                    <option value="other"> Others</option>
                </select>
        </div>
        <div className="pt-3 ">
            <input className="w-full h-12 px-2 py-2 rounded" type="number" placeholder='Age' onChange={(e)=>{
                setAuth({...auth, age:e.target.value})
            }}
            />
        </div>
        <div className="pt-3 ">
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Invite Code' 
            onChange={(e)=>{
                setAuth({...auth, invite_code: e.target?.value})
            }}
            />
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
    {step.value === 1 && (
        <>
        <div className="p-4 bg-background w-screen h-screen">
        
        <div className="sm:text-5xl sm:ml-28 sm:mt-8 text-xxl font-bold text-main">Logo</div>
        {/* <div className="sm:w-96 sm:absolute lg:left-1/4 sm:top-1/4 sm:translate-x-1/2 sm:tarnslate-y-1/2"> */}
        <div className="flex flex-col md:justify-center md:items-center">
        <div className="md:w-96 md:mt-10">
        <div className="sm:text-3xl text-primary font-semibold text-black pt-4 pb-2">Sign Up</div>
        <div className="pt-3">
            {/* <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Phone' /> */}
            <PhoneInput 
            country={'in'}
            inputStyle={{
                height:"48px",
                width:"320px",
                border:"none",
              }}
            //   disableCountryCode={true}
            // value={phoneNumber}
            onChange={(value, country : CountryData, e, formattedValue)=> {setMobileNumber(value.slice(country.dialCode.length))
                // ({ rawPhone: value.slice(data.dialCode.length) })
                    setIsd_code(country.dialCode);
                }}
            />
        </div>
        <div className="pt-3 ">
            <div className="flex flex-row">
            <input className="w-full h-12 px-2 py-2 rounded-l-lg" type="tel" inputMode='numeric' placeholder='OTP' maxLength={10} onChange={(e)=>{
                setAuth({...auth, phone_otp:e.target.value})
            }}
            
            />
            
            <button className="bg-white rounded-r-lg px-2 text-main" onClick={sendOtp}>Send</button>
            </div>
        </div>
        <div className="pt-3 ">
            <input className="w-full h-12 px-2 py-2 rounded" type="email" placeholder='Email ID' 
            onChange={(e)=>{
                setAuth({...auth, email:e.target.value})
            }}
            />
        </div>
        <div className="pt-3 ">
            <input className="w-full h-12 px-2 py-2 rounded" type="password" placeholder='Password' 
            onChange={(e)=>{
                setAuth({...auth, password:e.target.value})
            }}
            />
        </div>
        
        
        <div className="pt-4"> 
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-main" onClick={handleNext}>
                Next
            </button>
        </div>
        <div className="flex justify-center items-center">
            <button className="w-full h-12 rounded text-secondary text-main font-semibold bg-transparent border-2 border-main mt-2"
            onClick={handleBack}>
                Back
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
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Aadhar' 
            onChange={(e)=>{
                setAuth({...auth, aadhaar:e.target?.value})
            }}
            />
        </div>
        <div className="pt-3">
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='PAN' 
            onChange={(e)=>{
                setAuth({...auth, pan:e.target?.value})
            }}/>
        </div>
        
        <div className="pt-4"> 
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-main" onClick={handleSubmit}>
                Sign Up
            </button>
        </div>
        <div className="flex justify-center items-center">
            <button className="w-full h-12 rounded text-secondary text-main font-semibold bg-transparent border-2 border-main mt-2"
            onClick={handleBack}>
                Back
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