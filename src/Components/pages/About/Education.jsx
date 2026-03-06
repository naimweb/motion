import React from "react";
import Footer from "../footer/Footer";

function Education() {
  return (
    <>
    <section className="bg-gradient-to-r from-[#0f2027] to-[#203a43] py-16 px-6 text-white">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Education
        </h2>

        <div className="relative border-l-2 border-gray-500">

          {/* Item 1 */}
          <div className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-900 rounded-full ring-8 ring-[#0f2027]"></span>
            <p className="text-gray-300">2027 – Future</p>
            <h3 className="text-xl md:text-2xl font-semibold mt-1">
              Planning to take BSC in Computer Science and Engineering
            </h3>
            <p className="text-gray-400 mt-1">
              Planning to take BSC in Computer Science and Engineering
            </p>
          </div>

          {/* Item 2 */}
          <div className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-[#0f2027]"></span>
            <p className="text-gray-300">2023 – 2027</p>
            <h3 className="text-xl md:text-2xl font-semibold mt-1">
              TMSS Textile Engineering Institute
            </h3>
            <p className="text-gray-400 mt-1">
              Computer Science 5th semester running..
            </p>
          </div>

          {/* Item 3 */}
          <div className="ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full ring-8 ring-[#0f2027]"></span>
            <p className="text-gray-300">2023</p>
            <h3 className="text-xl md:text-2xl font-semibold mt-1">
                Usti BS High School
            </h3>
            <p className="text-gray-400 mt-1">
              SSC passed in Science
            </p>
          </div>

        </div>
      </div>

    <Footer />
    </section>
    </>
  
  );
}

export default Education;