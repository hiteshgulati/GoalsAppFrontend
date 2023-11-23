import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {FaRegEdit} from 'react-icons/fa'
import { FaCamera } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi2";


function Profile2() {
  return (
    <>
    <div className="h-screen w-screen bg-background relative">
        <div className="flex flex-row h-14 bg-white items-center">
            <div className="basis-1/3">
                <p className="text-xl pl-2 md:pl-4">
                <MdOutlineKeyboardArrowLeft size={28}/>
                </p>
            </div>
            <div className="basis-1/3">
                <p className="text-center text-secondary font-semibold md:text-xl">Edit Profile</p>
            </div>
            <div className="basis-1/3 flex justify-end pr-4">
                <p className=" text-secondary font-semibold md:text-xl text-main md:pr-4">
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
                <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='Jane Doe' />
            </div>
            <div className="pt-3">
                <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='JaneDoe@gmail.com' />
            </div>
            <div className="pt-3">
                <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='9319223096' />
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
            <div className="flex flex-row">
            <input className="w-full h-12 px-2 py-2 rounded-l-lg" type="password" placeholder='Date of Birth' />
            <button className="bg-white rounded-r-lg px-2 text-sub "><HiOutlineCake size={24} /></button>
            </div>
        </div>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center pt-3 absolute inset-x-0 bottom-0 mb-2 p-2">
            <div className="bg-transparent px-2 py-2 border-2 border-main w-40 h-11 text-center rounded-lg text-main font-medium mr-1 text-secondary">
                <button>
                Discard Changes
                </button>
                </div>
            <div className="bg-main px-2 py-2 border-2 border-main w-40 h-11 text-center rounded-lg text-main font-medium text-white ml-1 text-secondary">
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