import React from 'react'
import {BsCurrencyRupee, BsPersonFillAdd, BsLinkedin} from 'react-icons/bs'


function CheckFunds() {
  return (
    <>
    <div className="h-14 bg-white mt-4 rounded px-2 py-1 relative">
        <div className="flex flex-row">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 mt-1" />
            <p className="text-sm font-medium ml-2">Axis Blue Chip Fund</p>
        </div>
        <div className="flex flex-row justify-between absolute inset-x-0 bottom-0 p-1">
            <p className="text-xs font-medium text-sub">Equity</p>
            <p className="flex text-xs font-medium text-sub"><BsCurrencyRupee className="mt-1" />  53.3x3.83K = <BsCurrencyRupee className="mt-1"/> 33.3L</p>
        </div>
    </div>
    </>
  )
}

export default CheckFunds