'use client'

import React, { useState } from 'react'

export function TopNav() {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
    console.log("Auto Save is now:", isToggled ? "Off" : "On");
  };

  return (
    <div className='flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-gray-800 dark:bg-gray-900'>
      {/* Left Section */}
      <div className='flex items-center gap-4'>
        <h1 className='text-lg font-semibold text-gray-800 dark:text-gray-100'>
          Log Book Data
        </h1>
      </div>

      {/* Center Section */}
      {/* <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 text-sm border rounded-md bg-gray-50 dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div> */}
      <div className='flex gap-4'>
        <div className='flex items-center rounded-md px-2 py-1 text-sm gap-2'>
        <div
            className={`ml-2 flex h-5 w-10 cursor-pointer items-center rounded-full transition-colors ${
              isToggled ? 'bg-green-700' : 'bg-gray-400'
            }`}
            role='switch'
            // aria-checked={true}
            aria-checked={isToggled}
            onClick={handleToggle}
            // onClick={() => {
            //   // Handle toggle action here
            // }}
          >
            <div
              className={`h-4 w-4 transform rounded-full bg-white shadow-md transition-transform ${
                isToggled ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </div>
          <span className='text-green-700 font-medium'>Auto Save</span>
         
        </div>

        {/* Right Section */}
        <div className='flex items-center gap-4'>
   
          <div className='relative'>
            <button className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700'>
              <span className='text-sm font-medium text-gray-800 dark:text-gray-100'>
                BS
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
