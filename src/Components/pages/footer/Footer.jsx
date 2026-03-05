import React from 'react'
import { FaFacebook, FaLinkedin ,  FaGithub} from "react-icons/fa";


function Footer() {
  return (
     <>
       <div className='mt-[10%]'>
         <div className='border w-[80%] m-auto border-blue-600' ></div>
         <div className='flex justify-around gap-[30%] mt-6'>

            <div className=''>
                        <h1>&copy; my portfolio all right deserve</h1>
                        <p className='ml-[80%] '>connecting...</p>
                    </div>

                    <div>
                        <h2 className='text-2xl'>socal link 👇</h2>
                        <div className='flex gap-5 mt-3 text-2xl'>

                            <h1><FaFacebook /></h1>
                             <a href="https://www.linkedin.com/in/naim-web-755665354/?skipRedirect=true"><FaLinkedin /></a>
                            <a href="https://github.com/naimweb">< FaGithub /></a>
                        </div>

                    </div>
           
         </div>
                    <div className=' border w-[50%] m-auto mb-5 mt-5 border-amber-500'></div>
    </div>
     </>
  )
}

export default Footer