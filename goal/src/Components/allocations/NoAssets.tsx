import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {PiPencilSimpleLight} from 'react-icons/pi'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'
import { IoSearchSharp } from "react-icons/io5";
import CheckFunds from '../goals/CheckFunds';
import { FaPlus } from "react-icons/fa6";


function noAssets() {
  return (
    <>
    <div className="h-screen w-screen bg-background relative">


        <div className="sticky top-0">
            <div className="flex flex-row h-14 bg-white items-center">
                <div className="basis-1/3">
                    <p className="text-xl pl-1 md:pl-4">
                    <MdOutlineKeyboardArrowLeft size={28}/>
                    </p>
                </div>
                <div className="basis-1/3">
                    <p className="text-center text-secondary font-semibold md:text-xl">Goal Allocation</p>
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
                <div className="bg-main h-5 rounded" style={{width:"0%"}}></div>
                <p className="flex text-xs font-bold"> <span className="text-main flex"><BsCurrencyRupee className="mt-1" /> 40,235 </span> / <BsCurrencyRupee className="mt-1"/> 54,390</p>

            </div>
            <div className="basis-1/4 mt-4">
                <p className="text-xs font-bold text-right">40 days to go</p>
                <p className="text-xs font-bold text-right">Nov 1, 2023</p>
            </div>
            </div>

            <hr className="h-px my-4 bg-gray-300 border-1 dark:bg-gray-300"></hr>

            <p className="mt-2 text-sm font-medium">Allocated Funds</p>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Funds for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Funds for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Funds for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Funds for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Assets for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Assets for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Assets for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Assets for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Assets for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Assets for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main ">Click Here</span> to start adding</p>
                <p>Assets for Allocation</p>
            </div>
            <div className="flex flex-col items-center mt-6 text-secondary font-medium">
                <p> <span className="text-main">Click Here</span> to start adding</p>
                <p>Assets for Allocation</p>
            </div>
           
        </div>
     

        {/* <div className="flex flex-row justify-center items-center pt-3 absolute inset-x-0 bottom-0 p-4 bg-white w-screen"> */}
        <div className="flex flex-row justify-center items-center pt-3 fixed bottom-0 left-0 p-4 bg-white w-screen">
            <div className="absolute bottom-0 right-0 mb-24 mr-8 rounded-full w-12 h-12 bg-main flex justify-center items-center shadow-2xl">
                <button className="text-white shadow-4xl">
                <FaPlus />
                </button>
            </div>
                <div className="bg-transparent px-2 py-2 border-2 border-main w-40 h-11 text-center rounded-lg text-main font-medium mr-1 text-secondary">
                    <button>
                    Discard
                    </button>
                </div>
                <div className="bg-main px-2 py-2 border-2 border-main w-40 h-11 text-center rounded-lg text-main font-medium text-white ml-1 text-secondary">
                    <button>
                    Save
                    </button>
                </div>
        </div>
    </div>

    </>
  )
}

export default noAssets