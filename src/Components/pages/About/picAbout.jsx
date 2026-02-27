import React from 'react'
import Biography from './Biography'
import Education from './Education'
import Skill from './Skill'

function PicAbout() {
  return (
       <>
 <section className="h-[500px] relative">

  <div className="w-full h-full pt-1 relative ">
    
    <img
      src="picAbout.avif"
      alt="Financial services illustration"
      className="h-[90%] w-[98%] m-auto object-cover"
    />

    <div className="absolute inset-0 flex justify-center items-center">
      <h1 className="text-white text-4xl font-bold mt-[-50px]">
       To more info...
      </h1>
    </div>

  </div>  {/* end cover pic */}

  {/* more information with bio */}

  <Biography />
  {/* skill comonent */}
      <Skill />

  <Education />

    
</section>
       </>
       
  )
}

export default PicAbout