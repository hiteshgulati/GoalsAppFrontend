import React from 'react'
import { BsCurrencyRupee } from 'react-icons/bs'

function GoalFidget() {
  return (
    <>
    <div className="w-40 h-40 rounded-lg p-2 m-2 bg-white">
            <p className="font-semibold text-base">Play Station 5 with Remote</p>
            <div className="w-full rounded h-4 dark:bg-gray-300 mt-4 md:basis-3/4 basis-3/5">
                    <div className="bg-main h-4 rounded" style={{width:"40%"}}></div>
                    <div className="flex flex-row justify-between mb-4">
                    <p className="flex text-xs font-bold"> <span className="text-main flex"><BsCurrencyRupee className="mt-1" /> 40K </span> / <BsCurrencyRupee className="mt-1"/> 54K</p>
                    <p className="text-xs font-bold">52%</p>
                    </div>
                    <p className="text-xs font-bold">40 Days to go</p>
                    <p className="text-xs font-bold">Nov 1, 2023</p>
                </div>
    </div>
    </>
  )
}

export default GoalFidget