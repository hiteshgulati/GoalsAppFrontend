import React, { useEffect } from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {FaRegEdit} from 'react-icons/fa'
import { FaCamera } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi2";
import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Context/Auth';


function Profile2() {

    const [user, setUser] = useState<any>(null);
    const [update, setUpdate] = useState({
        name:"",
        gender:"",
        dob:"",
        pan:"",
        aadhar:""

    })
    console.log(update);
    const context = useContext(AuthContext)

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await axios.get("http://54.160.182.187:8000/users/me",{
                    headers:{
                        'Authorization':`Bearer ${context?.currentUser?.token}`,
                        'Content-Type':'application/json'
                    }
                })
                setUser(response.data)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [context?.currentUser])

    const updateData = async()=>{
        try{
            const response = await axios.patch("http://54.160.182.187:8000/users/me", update,{
                headers:{
                    'Authorization':`Bearer ${context?.currentUser?.token}`,
                    'Content-Type':'application/json'
                }
            })
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <>
    <div className="h-screen w-screen bg-base-colorround relative">
        <div className="flex flex-row h-14 bg-white items-center sticky top-0 z-40">
            <div className="basis-1/3">
                <p className="text-xl pl-2 md:pl-4">
                <MdOutlineKeyboardArrowLeft size={28}/>
                </p>
            </div>
            <div className="basis-1/3">
                <p className="text-center text-secondary font-semibold md:text-xl">Edit Profile</p>
            </div>
            <div className="basis-1/3 flex justify-end pr-4">
                <p className=" text-secondary font-semibold md:text-xl text-panels md:pr-4">
                    <FaRegEdit size={20} />
                    </p>
            </div>
        </div>
        <div className="p-4 flex flex-col md:justify-center md:items-center">
            <div className="md:w-600 mt-10">
            <div className="flex justify-center items-center mt-3">
                <div className="h-24 w-24 relative">
                <img className="h-24 w-24 rounded-lg" src="https://cdn.pixabay.com/photo/2017/06/18/18/26/holi-2416686_640.jpg" alt="" />
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer">
                    <label htmlFor="myfile" className=''>
                    <input type="file" id="myfile" name="myfile" className="hidden" />
                    <FaCamera >
                    </FaCamera>
                    </label>
                </div>
                </div>
            </div>
            <div className="mt-2">
            <div className="pt-3">
                <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder={user?.name} onChange={(e)=>{
                    setUpdate({...update, name:e.target.value})
                }}/>
            </div>
            <div className="pt-3">
                <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder={user?.email} disabled/>
            </div>
            <div className="pt-3">
                <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder={user?.phone} disabled/>
            </div>
            <div className="pt-3">
                <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder={user?.aadhaar} onChange={(e)=>{
                    setUpdate({...update, aadhar:e.target.value})
                }}/>
            </div>
            <div className="pt-3">
                <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder={user?.pan} onChange={(e)=>{
                    setUpdate({...update, pan:e.target.value})
                }}/>
            </div>
            
            <div className="pt-3 ">
                <select className="w-full h-12 px-2 py-2 rounded text-sub" name="genders" id="gender" onChange={(e)=>{
                    setUpdate({...update, gender:e.target.value})
                }}>
                    <option value="gender" disabled> {user?.gender}</option>
                    <option value="male"> Male</option>
                    <option value="female"> Female</option>
                    <option value="other"> Others</option>
                </select>
            </div>
            <div className="pt-3 mb-24">
            <div className="flex flex-row">
            <input className="w-full h-12 px-2 py-2 rounded-l-lg" type="text" placeholder='Date of Birth' onChange={(e)=>{
                setUpdate({...update, dob:e.target.value})
            }}/>
            
            <button className="bg-white rounded-r-lg px-2 text-sub "><HiOutlineCake size={24} /></button>
            </div>
        </div>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center pt-3 fixed bottom-0 left-0 p-4 bg-white w-screen">
            <div className="bg-transparent px-2 py-2 border-2 border-panels w-40 h-11 text-center rounded-lg text-panels font-medium mr-1 text-secondary">
                <button>
                Discard Changes
                </button>
                </div>
            <div className="bg-panels px-2 py-2 border-2 border-panels w-40 h-11 text-center rounded-lg font-medium text-white ml-1 text-secondary" onClick={updateData}>
                <button>
                Save Changes
                </button>
                </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Profile2