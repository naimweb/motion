import React from 'react';
import { CiMenuFries } from "react-icons/ci";
import { Info } from '../Data';

function Header() {
  return (
    <>
      {/* Header Section */}
      <div className='max-w-4xl mx-auto text-center mt-16 px-4'>
        <h1 className='font-extrabold text-2xl sm:text-3xl md:text-4xl'>
          Why You Hire Me For <span className='text-orange-500'>Your Siul Project</span>
        </h1>
        <p className='mt-4 text-gray-600 text-sm sm:text-base md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor ullam adipisci ipsam unde rerum praesentium cupiditate aperiam asperiores totam!
        </p>
      </div>

      {/* Cards + Image Section */}
      <div className='mt-12 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-16 px-4 max-w-6xl mx-auto'>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {Info.map((i, ind) => (
            <div
              key={ind}
              className='bg-white border rounded-2xl p-6 md:p-8 flex flex-col gap-4 items-center text-center hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 mx-auto'
            >
              <div className='flex flex-col items-center gap-2'>
                <CiMenuFries className='text-orange-500 text-2xl' />
                <h2 className='font-semibold text-lg md:text-xl'>{i.name}</h2>
              </div>
              <p className='text-gray-700 text-sm md:text-base'>{i.p}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className='mt-10 lg:mt-0 flex justify-center w-full lg:w-auto'>
          <img
            src="./vail.png"
            alt="Illustration"
            className='w-full max-w-md rounded-2xl shadow-lg object-cover'
          />
        </div>

      </div>
    </>
  )
}

export default Header;