import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'
import { FaPlus } from "react-icons/fa6";
import MutualFunds from '../Widgets/MutualFunds';
import { FaCheck } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Navbar from '../Navbar/Navbar';
import GoalFidget from '../Widgets/GoalFidget';

function Goals() {
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
                    <p className="text-center text-secondary font-semibold md:text-xl">Funds</p>
                </div>
            </div>
        </div>



        <div className="bg-background md:flex md:flex-col md:justify-center md:items-center p-2 md:mt-12">
            
            <div className="pt-3 ">
            <div className="flex flex-row">
              <button className="bg-white rounded-l-lg px-2 text-sub "><IoSearch /></button>
              <input className="w-full h-12 px-2 py-2 rounded-r-lg" type="search" placeholder='Search Funds' />
            </div>
            </div>
        </div>

        <div className="mt-4 w-80 grid gap-x-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 flex flex-row pb-20 bg-background">
                <GoalFidget />
                <GoalFidget />
                <GoalFidget />
                <GoalFidget />
                <GoalFidget />
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

export default Goals