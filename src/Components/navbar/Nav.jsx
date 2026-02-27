import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";


const data = [
     {
         name:"Home",
         link:"/"
     },
     {
        name:"About",
        link:"/about"
     },
     {
      name:"Service",
      link:"/service"
     },
      {
        name:"Project",
        link:"/project"
      },
      {
        name:"Contact",
        link:"/contact"
      }
]
function Nav() {
//  menu define
  const [open, setOpen] = useState(false)

    
  return (
      <>

        <div className=' hidden lg:flex justify-end w-[95%] mt-2  border p-4 m-auto rounded-2xl sticky top-0 '>
             {
               data.map((i,ind)=> (
                <div key={ind} className='ml-6 '>
                  <Link to ={i.link} className='text-[24px] focus:bg-red-500 rounded sticky top-0 '>{i.name}</Link>

                </div>
               ))
             }
        </div>

        {/* Mobile Button */}
<div className="lg:hidden flex justify-end p-4">
  {open && (
    <button onClick={() => setOpen(!true)} className="text-3xl">
     <CiMenuFries />
    </button>
  )}
</div>


{/* Mobile Menu */}
{!open && (
  <div className="lg:hidden flex flex-col items-center bg-gray-100 py-4 space-y-4">
    {data.map((i, ind) => (
      <Link
        key={ind}
        to={i.link}
        onClick={() => setOpen(true)}
        className="text-xl"
      >
        {i.name}
      </Link>
    ))}
  </div>
)}


      </>
  )
}

export default Nav