import React from 'react'

function Biography() {
  return (
    <section className="py-10 px-4">
      
      
      {/* Heading */}
      <h1 className="text-center font-semibold 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6">
        About N&M
      </h1>

      {/* Content */}
      <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto leading-relaxed md:leading-loose 
text-center mt-8 text-sm sm:text-base md:text-lg font-mono ">
        
        <p>
          A professional web development bio should be a concise, engaging summary highlighting your technical expertise, experience level, and unique value proposition. Structure it with a strong opening, key skills (e.g., React, Node.js), notable achievements, and a call-to-action or personal goal to showcase your passion for creating exceptional digital experiences.
        </p>

        <p className="mt-6">
          <span className="text-green-500 font-bold text-base md:text-lg">
            Junior/Entry Level:
          </span>{" "}
          Aspiring web developer with a strong foundation in HTML, CSS, and JavaScript. Recently completed a comprehensive bootcamp where I built responsive web apps. Eager to leverage my skills in a junior role and contribute to collaborative, fast-paced teams.
        </p>

      </div>

    </section>
  )
}

export default Biography