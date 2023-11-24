import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'
import { RiDeleteBin6Line } from "react-icons/ri";



function EditGoal() {
  return (
    <>
    <div className="bg-background w-screen h-screen relative">
    <div>
            <div className="flex flex-row h-14 bg-white items-center">
                <div className="basis-1/3">
                    <p className="text-xl pl-2 md:pl-4">
                    <MdOutlineKeyboardArrowLeft size={28}/>
                    </p>
                </div>
                <div className="basis-1/3">
                    <p className="text-center text-secondary font-semibold md:text-xl">Edit</p>
                </div>
                <div className="basis-1/3">
                    <p className="text-xl pr-4 md:pr-4 flex grid justify-items-end	">
                    <RiDeleteBin6Line size={20}/>
                    </p>
                </div>
            </div>
        </div>
        {/* <div className="sm:w-96 sm:absolute lg:left-1/4 sm:top-1/4 sm:translate-x-1/2 sm:tarnslate-y-1/2"> */}
        <div className="flex flex-col md:justify-center md:items-center px-4">
        <div className="md:w-96 md:mt-10">
        <div className="pt-3">
            <input className="w-full h-12 px-2 py-2 rounded" type="text" placeholder='PlayStation 5' />
        </div>
        <div className="pt-3 ">
                <select className="w-full h-12 px-2 py-2 rounded text-sub" name="genders" id="gender">
                    <option value="gender"> Gadgets</option>
                    <option value="Male"> Male</option>
                    <option value="Female"> Female</option>
                    <option value="Others"> Others</option>
                </select>
        </div>
        <div className="pt-3 ">
            <div className="flex flex-row">
            <div className="bg-white rounded-l-lg px-2 text-main "><BsCurrencyRupee className="mt-3" size={18}/></div>
            <input className="w-full h-12 px-2 py-2 rounded-r-lg" type="number" placeholder='54,000' />
            </div>
        </div>
        
        <div className="pt-3 ">
            <input className="w-full h-12 px-2 py-2 rounded" type="date" />
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
    </div>
    </>
  )
}

export default EditGoal