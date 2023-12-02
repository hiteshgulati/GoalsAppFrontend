import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'
import { FaPlus } from "react-icons/fa6";
import MutualFunds from '../Widgets/MutualFunds';
import { FaCheck } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Navbar from '../Navbar/Navbar';


function GoalHome() {
  return (
    <>
    <div className="h-screen w-screen bg-background relative">


        <div className="sticky top-0">
            <div className="flex flex-row h-14 bg-white items-center">
                <div className="basis-1/5">
                    <p className="text-xl pl-2 md:pl-4">
                    <MdOutlineKeyboardArrowLeft size={28}/>
                    </p>
                </div>
                <div className="basis-2/3">
                    <p className="text-center text-secondary font-semibold md:text-xl">Assets</p>
                </div>
            </div>
        </div>



        <div className="bg-background md:flex md:flex-col md:justify-center md:items-center p-2 md:mt-12">
            
            <div className="pt-3 ">
            <div className="flex flex-row">
              <button className="bg-white rounded-l-lg px-2 text-sub "><IoSearch /></button>
              <input className="w-full h-12 px-2 py-2 rounded-r-lg" type="search" placeholder='Search Assets' />
            </div>
            </div>

            <div className="flex flex-row justify-center items-center mt-8">
            <p className="basis-1/2 text-sm font-medium"> Mutual Funds</p>
            <p className="basis-1/4 text-sm font-medium"> 80%</p>
            <p className="basis-1/4 text-sm font-medium flex"><BsCurrencyRupee className="mt-1"/> 32,280</p>
            </div>
            <hr className="h-px my-2 bg-gray-300 border-1 dark:bg-gray-300"></hr>

            <MutualFunds />
            <MutualFunds />
            <MutualFunds />
            <div className="flex flex-row justify-center items-center mt-8">
            <p className="basis-1/2 text-sm font-medium"> Stock</p>
            <p className="basis-1/4 text-sm font-medium"> 80%</p>
            <p className="basis-1/4 text-sm font-medium flex"><BsCurrencyRupee className="mt-1"/> 32,280</p>
            </div>
            <hr className="h-px my-2 bg-gray-300 border-1 dark:bg-gray-300"></hr>

            <MutualFunds />
            <MutualFunds />
            <MutualFunds />
            
        </div>
    
        {/* <div className="flex flex-row justify-center items-center pt-3 absolute inset-x-0 bottom-0 p-4 bg-white w-screen"> */}
        <div className="flex flex-row justify-center items-center pt-3 fixed bottom-0 left-0 p-4 bg-white w-screen">
            <div className="absolute bottom-0 right-0 mb-24 mr-8 rounded-full w-12 h-12 bg-main flex justify-center items-center shadow-2xl">
                <button className="text-white shadow-4xl">
                <FaPlus />
                </button>
            </div>
        </div>
        <Navbar />

    </div>

    </>
  )
}

export default GoalHome