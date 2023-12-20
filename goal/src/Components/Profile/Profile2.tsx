import React, { useEffect, ChangeEvent } from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {FaRegEdit} from 'react-icons/fa'
import { FaCamera } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi2";
import { useState, useContext } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import { AuthContext } from '../../Context/Auth';
import { axiosInstance } from '../../config';
import user from '../../Assests/user.png'


function Profile2() {
    const context = useContext(AuthContext)

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>('');  
    const [imageType, setImageType] = useState<string>('');  
    const [user, setUser] = useState<any>(null);
    const [update, setUpdate] = useState({
        name:"",
        gender:"",
        dob:"",
        pan:"",
        aadhaar:""
    })

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          setSelectedFile(file);
        //   console.log(file);
        }
      };


      useEffect(()=>{
        const handleUpload = async () => {
            try {
              if (!selectedFile) {
                console.error('No file selected');
                return;
              }
        
              const formData = new FormData();
              formData.append('pic', selectedFile);
            //   console.log(formData.get('pic'));
              const response = await axiosInstance.put("users/me/pic", formData,{
                headers:{
                    'Authorization':`Bearer ${context?.currentUser?.token}`,
                    'Content-Type': 'multipart/form-data'
                }
              })
              console.log(response);
            } catch (error) {
              console.error('Error uploading image:', error);
            }
          };
          

        const getImage = async()=>{
            try{
                const response = await axiosInstance.get("users/me/pic",{
                    headers:{
                        'Authorization' : `Bearer ${context?.currentUser?.token}`,
                        'Content-Type' : 'application/json'
                    }
                })
                console.log(response);
                setImageUrl(response.data.data)
                setImageType(response.data.media_type)
            }
            catch(err){
                console.log(err);
            }
        }

          if(selectedFile){
            handleUpload();
          }
          getImage();
      })
      console.log(imageUrl);
      console.log(imageType);
      
      

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await axiosInstance.get("users/me",{
                    headers:{
                        'Authorization':`Bearer ${context?.currentUser?.token}`,
                        'Content-Type':'application/json'
                    }
                })
                setUser(response.data)
                setUpdate({
                    name: response.data?.name,
                    gender: response.data?.gender,
                    dob: response.data?.dob,
                    pan: response.data?.pan,
                    aadhaar: response.data?.aadhaar
                });
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [context?.currentUser])

    // update.name = user?.name;
    // update.gender = user?.gender;
    // update.pan = user?.pan;
    // update.aadhaar = user?.aadhaar;
    
    // console.log(update);

    const updateData = async()=>{
        try{
            const response = await axiosInstance.patch("users/me", update,{
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
                <Link to="/profile">
                <MdOutlineKeyboardArrowLeft size={28}/>
                </Link>
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
            <div className="md:w-600 mt-6">
            <div className="flex justify-center items-center mt-3">
                <div className="h-24 w-24 relative">
                {imageType && imageUrl ?(
                <img className="rounded-full h-24 w-24 md:h-20 md:w-20" src={`data:${imageType};base64,${imageUrl}`} alt="" />):
                <img className="rounded-full h-24 w-24 md:h-20 md:w-20" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />  
            }
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer">
                    <label htmlFor="myfile" className=''>
                    <input type="file" id="myfile" name="myfile" className="hidden" onChange={handleFileChange}/>
                    <FaCamera >
                    </FaCamera>
                    </label>
                </div>
                {/* <button onClick={handleUpload}>edit</button> */}
                </div>
            </div>
            <div className="mt-2">
            <div className="pt-3">
                <label htmlFor="" className="text-sm font-medium text-gray-600">Name</label>
                <input className="w-full h-12 px-2 py-2 rounded bg-gray-100" type="text" placeholder={user?.name}  onChange={(e)=>{
                    setUpdate({...update, name:e.target.value})
                }}/>
            </div>
            <div className="pt-3">
                 <label htmlFor="" className="text-sm font-medium text-gray-600">Email Id</label>
                <input className="w-full h-12 px-2 py-2 rounded bg-gray-100" type="text" placeholder={user?.email} disabled/>
            </div>
            <div className="pt-3">
                 <label htmlFor="" className="text-sm font-medium text-gray-600">Mobile Number</label>
                <input className="w-full h-12 px-2 py-2 rounded bg-gray-100" type="text" placeholder={user?.phone} disabled/>
            </div>
            <div className="pt-3">
                <label htmlFor="" className="text-sm font-medium text-gray-600">Aadhaar Number</label>
                <input className="w-full h-12 px-2 py-2 rounded bg-gray-100" type="text" placeholder={user?.aadhaar}  onChange={(e)=>{
                    setUpdate({...update, aadhaar:e.target.value})
                }}/>
            </div>
            <div className="pt-3">
                <label htmlFor="" className="text-sm font-medium text-gray-600">PAN Number</label>
                <input className="w-full h-12 px-2 py-2 rounded bg-gray-100" type="text" placeholder={user?.pan}  onChange={(e)=>{
                    setUpdate({...update, pan:e.target.value})
                }}/>
            </div>
            
            <div className="pt-3 ">
                <label htmlFor="" className="text-sm font-medium text-gray-600">Gender</label>
                <select className="w-full h-12 px-2 py-2 rounded text-sub bg-gray-100" name="genders" id="gender"  onChange={(e)=>{
                    setUpdate({...update, gender:e.target.value})
                }}>
                    <option value="gender" disabled> Gender </option>
                    <option value="male"> Male</option>
                    <option value="female"> Female</option>
                    <option value="other"> Others</option>
                </select>
            </div>
            <div className="pt-3 mb-24">
            <label htmlFor="" className="text-sm font-medium text-gray-600">Date of Birth</label>
            <div className="flex flex-row">
            <input className="w-full h-12 px-2 py-2 rounded-l-lg bg-gray-100" type="date" placeholder="hi"  onChange={(e)=>{
                setUpdate({...update, dob: new Date(e.target.value).toISOString()})
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