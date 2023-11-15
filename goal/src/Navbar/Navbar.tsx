import React from 'react'
import { GoGoal } from "react-icons/go";
import { IoCashOutline } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";

function Navbar() {
  return (
    <>
    <div className="flex flex-row h-16 pt-1 pb-1 text-sub z-40 sticky bottom-0 bg-white">
        <div className="basis-1/3 flex justify-center w-full">
            <button>
            <div className="flex justify-center">
            <GoGoal size={28}/>
            </div>

            <p className="text-sm font-medium">Goals</p>
            </button>
        </div>
        <div className="basis-1/3 flex justify-center w-full">
        <button>
        <div className="flex justify-center">
            <IoCashOutline size={28}/>
            </div>

            <p className="text-sm font-medium text-center">Assets</p>
            </button>
        </div>
        <div className="basis-1/3 flex justify-center w-full">
        <button>
        <div className="flex justify-center">
            <IoPersonCircleSharp size={28}/>
            </div>
            <p className="text-sm font-medium">Profile</p>
            </button>
        </div>
    </div>
    </>
  )
}

export default Navbar