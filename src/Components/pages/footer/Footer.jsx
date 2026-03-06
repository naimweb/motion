import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20">

      <div className="w-[90%] md:w-[80%] mx-auto border-t border-blue-600 pt-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left side */}
          <div className="text-center md:text-left">
            <h1 className="text-sm md:text-base">
              © 2026 My Portfolio. All rights reserved.
            </h1>
            <p className="text-gray-500 text-sm">Connecting...</p>
          </div>

          {/* Social links */}
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Social Links 👇
            </h2>

            <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-700">

              <a
                href="#"
                className="hover:text-blue-600 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/naim-web-755665354/?skipRedirect=true"
             
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/naimweb"
               
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaGithub />
              </a>

            </div>
          </div>

        </div>

     <div className="w-[90%] md:w-[40%] mx-auto border-t border-blue-600 pt-5 mt-3"></div>

      </div>

    </footer>
  )
}

export default Footer