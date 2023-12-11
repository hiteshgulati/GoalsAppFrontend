import React from 'react'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import Navbar from '../Navbar/Navbar'
import {ImHeadphones} from 'react-icons/im'
import {RiWhatsappFill} from 'react-icons/ri'
import {FaTelegramPlane, FaInstagram} from 'react-icons/fa'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'


function AssetsInfo() {
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
            <p className="text-sm font-medium">
            A Long Text explaining the process of adding asset to the app. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed non ante vulputate, facilisis velit vel, sagittis quam. Nunc hendrerit ligula in massa bibendum, sed porta sem vehicula. 
            Quisque sit amet malesuada justo. Nullam id justo et libero aliquam condimentum. Integer id dictum nulla. Fusce euismod sem 
            id quam varius, in feugiat ligula laoreet. In euismod consequat sapien, non finibus nunc convallis ac. Cras in neque eu massa 
            pharetra suscipit. Curabitur vestibulum bibendum odio, id pellentesque est. Sed sagittis ipsum ac tortor venenatis, ac luctus 
            metus cursus. Sed tristique quam sed urna viverra hendrerit. Nunc blandit turpis in ligula aliquet, ac convallis urna euismod. 
            Sed vehicula augue in ligula viverra, in dignissim turpis.A Long Text explaining the process of adding asset to the app. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante vulputate, facilisis velit vel, sagittis quam. 
            Nunc hendrerit ligula in massa bibendum, sed porta sem vehicula. Quisque sit amet malesuada. A Long Text explaining 
            the process of adding asset to the app. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante vulputate, 
            facilisis velit vel, sagittis quam. Nunc hendrerit ligula in massa bibendum, sed porta sem vehicula. Quisque sit amet malesuada justo.
             Nullam id justo et libero aliquam condimentum. Integer id dictum nulla. Fusce euismod sem id quam varius, in feugiat ligula laoreet. 
             In euismod consequat sapien, non finibus nunc convallis ac. Cras in neque eu massa pharetra suscipit. Curabitur vestibulum bibendum 
             odio, id pellentesque est. Sed sagittis ipsum ac tortor venenatis, ac luctus metus cursus. Sed tristique quam sed urna viverra 
             hendrerit. Nunc blandit turpis in ligula aliquet, ac convallis urna euismod. Sed vehicula augue in ligula viverra, in dignissim 
             turpis suscipit.
            </p>
        
        </div>
        <div>
        <div className="flex flex-row pt-4 items-center justify-center fixed bottom-16 bg-background pb-5 h-16 w-screen">
            <div className="basis-1/5 pt-1 pl-6 text-main">
                <ImHeadphones size={18}/>
            </div>
            <div className="basis-4/5 flex flex-row">
                <p className="text-secondary font-semibold pl-10">Contact</p>
                <div className="w-7 mr-3">
                <a href="https://wa.me/9319223096/?text=Hi">
                <RiWhatsappFill  className="ml-6 md:ml-40 text-main" size={22} />
                </a>
                </div>
                <FaTelegramPlane  className="ml-3 text-main" size={22}/>
                <BsLinkedin  className="ml-3 text-main" size={22}/>
                <FaInstagram className="ml-3 text-main" size={22}/>
            </div>
        </div>
        {/* <div className="flex flex-row justify-center items-center pt-3 absolute inset-x-0 bottom-0 p-4 bg-white w-screen"> */}
        
        <Navbar />
        </div>

    </div>

    </>
  )
}

export default AssetsInfo