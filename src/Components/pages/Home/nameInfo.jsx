import React from 'react'
import Card from './Card'

function NameInfo() {
  return (
      <>
         <div className='flex-col  lg:flex flex-row justify-center mt-5 gap-[10%] '>
             <div className='w-[90%]  lg:w-[30%] '>
                 <h1 className=' text-2xl font-bold'>HI Iam Jhackson Alvarl <br></br><span className='text-yellow-500 font-extrabold'>Expart Visual Designer</span></h1>
                <p className='mt-3 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fuga porro, mollitia iste quos similique nobis est magni possimus voluptates minima soluta rem, excepturi non ut! Nam reiciendis natus dicta.</p>
                <div className='flex pl-2 gap-2 mb-6'>
                    <button className='pr-2 pt-2 pb-2 pl-2 border rounded-2xl hover:bg-yellow-400 transition-all'>here one</button>
                    <button className=' pr-2 pt-2 pb-2 pl-2 border rounded-2xl bg-green-400 transition-all '>here two</button>
                </div>
             </div>

            <div className='ml-4 lg:mr-5 '>
                <img src="vail.png" alt="" className='h-[300px] rounded-2xl'/>
            </div>
             
         </div>

         {/* card component */}
         <Card />

      </>
  )
}

export default NameInfo;