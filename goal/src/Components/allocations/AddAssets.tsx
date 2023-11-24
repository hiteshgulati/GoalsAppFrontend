import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {PiPencilSimpleLight} from 'react-icons/pi'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'
import { IoSearchSharp } from "react-icons/io5";
import CheckFunds from '../goals/CheckFunds';

function AddAssets() {
  return (
    <>
    <div className="h-screen w-screen bg-background relative">
        <div>
            <div className="flex flex-row h-14 bg-white items-center">
                <div className="basis-1/3">
                    <p className="text-xl pl-2 md:pl-4">
                    <MdOutlineKeyboardArrowLeft size={28}/>
                    </p>
                </div>
                <div className="basis-1/3">
                    <p className="text-center text-secondary font-semibold md:text-xl">Profile</p>
                </div>
            </div>
        </div>

        <div className="bg-background md:flex md:flex-col md:justify-center md:items-center p-2 md:mt-12">
            <div className="md:flex md:flex-row md:w-800">
            <div className="md:basis-1/4">
                <div className="flex flex-row justify-between">
                    <p className="text-xl font-bold">Play Station 5</p>
                    <PiPencilSimpleLight />
                </div>
                <p className="text-xm font-medium">Gadgets</p>
            </div>
            </div>
            <div className="flex flex-row justify-between">
            <div className="w-full rounded h-5 dark:bg-gray-300 mt-4 md:basis-3/4 basis-3/5">
                <div className="bg-main h-5 rounded" style={{width:"45%"}}></div>
                <p className="flex text-xs font-bold"> <span className="text-main flex"><BsCurrencyRupee className="mt-1" /> 40,235 </span> / <BsCurrencyRupee className="mt-1"/> 54,390</p>

            </div>
            <div className="basis-1/4 mt-4">
                <p className="text-xs font-bold text-right">40 days to go</p>
                <p className="text-xs font-bold text-right">Nov 1, 2023</p>
            </div>
            </div>

            <hr className="h-px my-4 bg-gray-300 border-1 dark:bg-gray-300"></hr>

            <div className="dark:bg-gray-300 flex flex-col items-center px-2 py-4 mt-4">
                <p className="mt-2 text-sm font-medium">Select Assets for Allocation</p>
                <div className="pt-3 ">
                    <div className="flex flex-row w-72">
                        <div className="bg-white rounded-l-lg px-2 text-main "><IoSearchSharp className="mt-3" size={18}/></div>
                        <input className="w-full h-10 px-2 py-2 rounded-r-lg" type="search" placeholder='Search Assets' />
                    </div>
                <CheckFunds />
                <CheckFunds />
                <CheckFunds />
                </div>
            </div>
            <div className="flex flex-row justify-center items-center pt-3 absolute inset-x-0 bottom-0 mb-2 p-2">
                <div className="bg-transparent px-2 py-2 border-2 border-main w-40 h-11 text-center rounded-lg text-main font-medium mr-1 text-secondary">
                    <button>
                    Discard
                    </button>
                </div>
                <div className="bg-main px-2 py-2 border-2 border-main w-40 h-11 text-center rounded-lg text-main font-medium text-white ml-1 text-secondary">
                    <button>
                    Add Assets
                    </button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default AddAssets