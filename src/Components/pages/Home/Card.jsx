import React from 'react';
import { Info } from '../Data';

function Card() {
  return (
    <div className='mt-8 px-4 flex justify-center'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl'>
        {Info.map((i, ind) => (
          <div
            key={ind}
            className='border border-amber-200 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1'
          >
            <h1 className='text-4xl text-red-600'>{i.icon}</h1>
            <h2 className='mt-4 font-semibold text-2xl'>{i.name}</h2>
            <p className='mt-2 text-gray-700'>{i.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;