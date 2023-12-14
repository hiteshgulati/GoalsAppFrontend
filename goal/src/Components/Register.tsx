import React, {useState , ChangeEvent, FormEvent} from 'react'
import Register1 from './Register/Register1';
import PhoneInput, { CountryData } from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios, {AxiosError} from 'axios';
import getVersion from "../Version"
import mailgo from "mailgo";




import {Link} from "react-router-dom"

function Register() {

    const [step, setStep] = 
    useState<{value: number}>({
        value: 0
  });

  const [mobile_number, setMobileNumber] = useState("");
  const [isd_code, setIsd_code] = useState("");
  const [version, setVersion] = useState(getVersion)
    
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
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const [isOTPDisabled, setOTPDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  
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
    setOTPDisabled(true);
    setTimeout(() => {
        setOTPDisabled(false);
      }, 30000);
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
        setSubmitDisabled(true);
        setTimeout(() => {
        setSubmitDisabled(false);
      }, 30000);

      setTimeout(() => {
        setErrorMessage('');
      }, 30000);

        console.log("The payload is", auth);
        try{
            const response = await axios.post("https://amb-api-dev.embetter.in/users/register/new-user", auth,{
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            console.log(response);
            response.data && window.location.replace('/login')
         
        }catch(err){
            const axiosError = err as AxiosError<any>;
            if(axiosError.response) console.log(axiosError.response.data.detail);

            console.log(err);
            setErrorMessage(axiosError.response?.data.detail || 'SignUp failed. Please try again.');
        }
    }



  return (
    <>
    {step.value===0 && (
        <>
        <div className="p-4 bg-base-color w-screen h-screen">
        
        <div className="sm:text-5xl sm:ml-28 sm:mt-8 text-xxl font-bold text-panels">Logo</div>
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
        {/* <a className="mailtoui" href="mailto:utkarshmauryacs@gmail.com?body=Hope%20you're%20doing%20well.">
        <p className="absolute inset-y-0 right-0 text-sm font-medium pt-2">Didn't get the invite link?</p>
        </a> */}
        <p className="absolute inset-y-0 right-0 text-sm font-medium pt-2">Didn't get the invite link? Get it by  
        <a href="mailto:utkarshmauryacs@gmail.com"
        data-subject="A strange email"
        data-body="This email is for me with me also in cc and in bcc"
        className="underline"
        > mail</a> or <a href="tel:9319223096" className="underline">call</a>.</p>
        </div>
        
        <div className="pt-4"> 
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-panels" onClick={handleNext}>
                Next
            </button>
        </div>
        <Link to="login">
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-6">Already have an account?<span className="font-semibold text-secondary text-panels"> Login.</span></p>
            <p className="mb-1 text-xs text-gray-500 font-medium absolute inset-x-0 bottom-0">{version}</p>
            
        </div>
        </Link>
        </div>
        </div>
        
    </div>
    
    </>
    )}
    {step.value === 1 && (
        <>
        <div className="p-4 bg-base-color w-screen h-screen">
        
        <div className="sm:text-5xl sm:ml-28 sm:mt-8 text-xxl font-bold text-panels">Logo</div>
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
                width:"100%",
                border:"none",
              }}
            inputClass='phone'
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
            
            <button className="bg-white rounded-r-lg px-2 text-panels disabled:opacity-25" onClick={sendOtp} disabled={isOTPDisabled}>Send</button>
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
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-panels" onClick={handleNext}>
                Next
            </button>
        </div>
        <div className="flex justify-center items-center">
            <button className="w-full h-12 rounded text-secondary text-panels font-semibold bg-transparent border-2 border-panels mt-2"
            onClick={handleBack}>
                Back
            </button>
        </div>
        <Link to="login">
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-4">Already have an account?<span className="font-semibold text-secondary text-panels"> Login.</span></p>
        </div>
        </Link>
        </div>
        </div>
    </div>
        </>
    )}

    {step.value === 2 && (
        <>
        <div className="p-4 bg-base-color w-screen h-screen">
        
        <div className="sm:text-5xl sm:ml-28 sm:mt-8 text-xxl font-bold text-panels">Logo</div>
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
            <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-panels disabled:opacity-25" disabled={isSubmitDisabled} onClick={handleSubmit}>
                Sign Up
            </button>
        </div>
        <div className="flex justify-center items-center">
            <button className="w-full h-12 rounded text-secondary text-panels font-semibold bg-transparent border-2 border-panels mt-2"
            onClick={handleBack}>
                Back
            </button>
        </div>

        {errorMessage && (
                    <div className="text-red-500 bg-transparent font-medium text-white p-2 mt-4 rounded text-center">
                    {errorMessage}
                  </div>
                )}
        <Link to="login">
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-4">Already have an account?<span className="font-semibold text-secondary text-panels"> Login.</span></p>

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