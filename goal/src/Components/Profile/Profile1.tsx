import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {PiPencilSimpleLight} from 'react-icons/pi'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'
import {TbLogout} from 'react-icons/tb'
import {ImHeadphones} from 'react-icons/im'
import {RiWhatsappFill} from 'react-icons/ri'
import {FaTelegramPlane, FaInstagram} from 'react-icons/fa'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'



function Profile1() {
  return (
    <>
    <div className="h-screen w-screen bg-base-color relative">
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
    <div className="bg-base-color md:flex md:justify-center md:items-center">

    <div className="p-4 md:w-800 md:mt-10">
        <div className="flex flex-row">
            <div className="basis-1/4 p-1">
                <img className="rounded-full h-14 w-14 md:h-20 md:w-20" src="https://cdn.pixabay.com/photo/2017/06/18/18/26/holi-2416686_640.jpg" alt="" />
            </div>
            <div className="basis-3/4 p-1 flex flex-row justify-between">
                <div>
                    <p className="text-lg font-semibold">Jane Doe</p>
                    <p className="text-sm">9310223096</p>
                </div>
                <Link to="edit">
                <PiPencilSimpleLight />
                </Link>
            </div>
        </div>
        
        <div className="flex flex-row pt-1 pr-3">
            <div className="basis-1/4"></div>
            <div className="basis-3/4">
                <p className="text-xl sm:text-2xl font-bold pb-2">Goals</p>
            <div className="w-full rounded h-5 dark:bg-gray-300">
                <div className="bg-panels h-5 rounded" style={{width:"45%"}}></div>
                <div className="flex flex-row justify-between">
                    <p className="flex flex-row text-secondary font-semibold">
                        <span className="text-panels flex flex-row">
                            <BsCurrencyRupee className='pt-1' size={20}/> 4.53L/
                            </span>
                        <BsCurrencyRupee className='pt-1' size={20}/>19.69L</p>     
                    <p className="text-panels font-semibold">73%</p>
                </div>
            </div>
            </div>
        </div>
        <div className="flex flex-row pt-9 pr-3">
            <div className="basis-1/4"></div>
            <div className="basis-3/4">
                <p className="text-xl md:text-2xl font-bold pb-2">Assets</p>
            <div className="w-full rounded h-8 dark:bg-gray-300">
                <div className="bg-panels h-8 rounded" style={{width:"45%"}}></div>
                </div>
                <div className="flex flex-row justify-between text-sm pt-1">
                    <p className="flex flex-row font-semibold">
                        Allocated (89%)
                    </p>   
                    <p className="text-panels font-semibold flex flex-row"> <BsCurrencyRupee className='pt-1' size={20}/> 4.53L</p>
                </div>
                <div className="flex flex-row justify-between text-sm pt">
                    <p className="flex flex-row font-semibold">
                        Free Use (11%)
                    </p>   
                    <p className="text-panels font-semibold flex flex-row"> <BsCurrencyRupee className='pt-1' size={20}/> 55.3K</p>
                </div>
                <div className="flex flex-row justify-between text-sm pt">
                    <p className="flex flex-row font-semibold">
                        Total (100%)
                    </p>   
                    <p className="text-panels font-semibold flex flex-row"> <BsCurrencyRupee className='pt-1' size={20}/> 5.09L</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row pt-20">
            <div className="basis-1/4 pt-1 pl-10 text-panels"><TbLogout size={24}/></div>
            <div className="basis-3/4">
                <p className="text-secondary font-semibold">Logout</p>
            </div>
        </div>
        <div className="flex flex-row pt-4">
            <div className="basis-1/4 pt-1 pl-10 text-panels">
                <ImHeadphones size={18}/>
            </div>
            <div className="basis-3/4 flex flex-row">
                <p className="text-secondary font-semibold">Contact Us</p>
                <div className="w-7 mr-3">
                <a href="https://wa.me/9319223096/?text=Hi">
                <RiWhatsappFill  className="ml-6 md:ml-40 text-panels" size={22} />
                </a>
                </div>
                <FaTelegramPlane  className="ml-3 text-panels" size={22}/>
                <BsLinkedin  className="ml-3 text-panels" size={22}/>
                <FaInstagram className="ml-3 text-panels" size={22}/>
            </div>
        </div>
        <div className="flex flex-row pt-4">
            <div className="basis-1/4 pt-1 pl-10 text-panels">
                <BsPersonFillAdd  size={20}/>
            </div>
            <div className="basis-3/4">
                <p className="text-secondary font-semibold">Invite Friends</p>
            </div>
        </div>
    </div>
    </div>
    <Navbar />
    </div>
    
    </>
  )
}

export default Profile1