import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {PiPencilSimpleLight} from 'react-icons/pi'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'
import Navbar from '../Navbar/Navbar'



function GoalDetails() {
  return (
    <>
    <div className="h-screen w-screen bg-background relative">
        <div className="sticky top-0">
            <div className="flex flex-row h-14 bg-white items-center">
                <div className="basis-1/3">
                    <p className="text-xl pl-2 md:pl-4">
                    <MdOutlineKeyboardArrowLeft size={28}/>
                    </p>
                </div>
                <div className="basis-1/3">
                    <p className="text-center text-secondary font-semibold md:text-xl">Goal Details</p>
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
            
            <div className="w-full rounded h-5 dark:bg-gray-300 mt-4 md:basis-3/4">
                <div className="bg-main h-5 rounded" style={{width:"0%"}}></div>
            <p className="text-main font-medium">0%</p>

            </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-12">
                <div>
                    <p className="flex text-base font-bold"><span className="flex text-main">
                        <BsCurrencyRupee className="mt-1" /> 0
                    </span> /
                    <BsCurrencyRupee className="mt-1"/>
                    54,990
                    </p>
                </div>
                <p className="mt-3 text-base font-bold">40 Days to go</p>
                <p className="text-base font-bold">Maturing on Nov 1, 2023</p>
            </div>
            <hr className="h-px my-2 bg-gray-300 border-1 dark:bg-gray-300"></hr>
            <div className="flex flex-row justify-between">
                <div>
                <p className="text-base font-semibold">Assests</p>

                </div>
                <PiPencilSimpleLight />
            </div>

            <div className="flex flex-col justify-center items-center p-2 mt-12">
                <p className="text-base font-semibold text-center">You don't have any Funds alloacted for this goal</p>
                <p className="text-base font-semibold"><span className="text-main">Click Here</span> to start adding Funds</p>
            </div>
        </div>
        <Navbar />
    </div>

    </>
  )
}

export default GoalDetails

{/* <div className="basis-3/4 flex flex-row justify-between">
            <div>
                <p className="text-xl font-bold">Play Station 5</p>
            </div>
                    <PiPencilSimpleLight />
            
            </div>
            <div>
                <p className="text-xm font-medium">Gadgets</p>
            </div>
        </div>
        <div className="w-full rounded h-5 dark:bg-gray-300">
                <div className="bg-main h-5 rounded" style={{width:"45%"}}></div>
                <div className="flex flex-row justify-between">
                    <p className="flex flex-row text-secondary font-semibold">
                        <span className="text-main flex flex-row">
                            <BsCurrencyRupee className='pt-1' size={20}/> 4.53L/
                            </span>
                        <BsCurrencyRupee className='pt-1' size={20}/>19.69L</p>     
                    <p className="text-main font-semibold">73%</p>
                </div>
            </div> */}