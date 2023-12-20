import React from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { useState, useContext } from 'react';
import {Link} from "react-router-dom"
import axios, {AxiosError} from 'axios';
import PhoneInput, { CountryData } from 'react-phone-input-2'
import logo from '../Logo.svg'
import { AuthContext } from '../../Context/Auth';
import { axiosInstance } from '../../config';



function Login() {
    
    const [mobile_number, setMobileNumber] = useState("");
    const [isd_code, setIsd_code] = useState("");
    const [password, setPassword] = useState("");
    // const [isSubmitDisabled, setSubmitDisabled] = useState(false);
    // const [errorMessage, setErrorMessage] = useState('');
    const [userExists, setUserExists] = useState(null);

    const [step, setStep] = 
    useState<{value: number}>({
        value: 0
  });


  const context = useContext(AuthContext);
    console.log(context?.currentUser);
//   const currentUser:any = context

    console.log({mobile_number, isd_code, password});

    const checkUser = async()=>{
        try{
            const response = await axiosInstance.post(`users/auth/login/check-user?isd_code=${isd_code}&phone=${mobile_number}`,{
                isd_code,
                mobile_number
            })
            console.log(response);
            console.log(userExists);
            if(!response.data.true){
            setUserExists(response.data);
            setTimeout(() => {
                setUserExists(null);
                window.location.replace('/')
              }, 3000);
            }
            else{
                setStep({value: step.value+1}); 
            }
    
            
        }
        catch(err){
            console.log(err);
        }
      }

  const handleSubmit = async()=>{
    // setSubmitDisabled(true);
    // setTimeout(() => {
    //     setSubmitDisabled(false);
    //   }, 30000);
    // setTimeout(() => {
    //     setErrorMessage('');
    //   }, 30000);
    // try{
    //     const response = await axios.post(`http://54.160.182.187:8000/users/auth/login/mobile-password?isd_code=${isd_code}&phone=${mobile_number}&password=${password}`
    //        );
    //     console.log(response);
    // }catch(err){
    //     const axiosError = err as AxiosError<any>;
    //     if(axiosError.response) console.log(axiosError.response.data.detail);

    //     console.log(err);
    //     setErrorMessage(axiosError.response?.data.detail || 'Login failed. Please try again.');
    // }
    try{
        await context?.login(isd_code, mobile_number, password)
        // console.log(context?.currentUser?.token);
    }
    catch(err){
        console.log(err);
    }
}

  
  const handleNext = () =>{
    setStep({value: step.value+1});
  }
  const handleBack = () =>{
    setStep({value: step.value-1});
  }

  return (
    <>
    <div className="p-4 bg-base-color w-screen h-screen">
        
        <div className="sm:ml-28 sm:mt-8 mt-2">
            <img src={logo} alt="" width="60" height="60"/>
        </div>
        {/* <div className="sm:w-96 sm:absolute lg:left-1/4 sm:top-1/4 sm:translate-x-1/2 sm:tarnslate-y-1/2"> */}
        <div className="flex flex-col md:justify-center md:items-center">
            <div className="md:w-96 md:mt-10">
        <div className="sm:text-3xl text-primary font-semibold text-black pt-4 pb-2">Login</div>

        {step.value === 0 && (
            <>
                
                <div className="pt-3">
                    {/* <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Phone' /> */}
                    <PhoneInput 
                    country={'in'}
                    inputStyle={{
                        height:"48px",
                        width:"100%",
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
               
                
                <div className="pt-4"> 
                    <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-panels" onClick={checkUser}>
                        Next
                    </button>
                </div>

                {userExists && (
                    <div className="text-red-700 bg-transparent font-medium p-2 mt-4 rounded text-center">
                    <p>User does not exists. Redirecting to signup page.</p>
                  </div>
                )}
                {/* {login.value === 'phone' ?(
                <div className="pt-4"> 
                    <button className="w-full h-12 rounded text-secondary text-panels font-semibold bg-transparent border-2 border-panels"
                    onClick={()=> setLogin({value:'Email'})}
                    >
                        Login with Email                
                    </button>
                </div>
                ):(
                    <div className="pt-4"> 
                    <button className="w-full h-12 rounded text-secondary text-panels font-semibold bg-transparent border-2 border-panels"
                    onClick={()=> setLogin({value:'phone'})}
                    >
                        Login with Phone                
                    </button>
                </div>
                )} */}
            </>
        )}
        {step.value === 1 && (
            <>
                
                    <div className="pt-3">
                    <input className="w-full h-12 px-2 py-2 rounded" type="password" placeholder='Password' 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    />
                </div>
                
                <div className="pt-4"> 
                    <button className="w-full h-12 rounded text-secondary text-white font-semibold bg-panels disabled:opacity-25"
                    onClick={handleSubmit}
                    disabled={context?.isSubmitDisabled}
                    >
                        Submit
                    </button>
                </div>

                <div className="pt-4"> 
                    <button className="w-full h-12 rounded text-secondary text-panels font-semibold bg-transparent border-panels border-2" onClick={handleBack}>
                        Back
                    </button>
                </div>

                {context?.errorMessage && (
                    <div className="text-red-700 bg-transparent font-medium p-2 mt-4 rounded text-center">
                    {context.errorMessage}
                  </div>
                )}
                
            </>
        )}

            
        
        <Link to="/">
        <div className="text-center inset-x-0 bottom-0 sm:mt-2">
            <p className="font-medium absolute inset-x-0 bottom-0 mb-4">Don't have an account?<span className="font-semibold text-secondary text-panels"> Sign Up.</span></p>
        </div>
        </Link>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login