import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";

const data = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Service", link: "/service" },
  { name: "Project", link: "/project" },
  { name: "Contact", link: "/contact" }
]

function Nav() {

  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow">

      {/* Navbar Container */}
      <div className="max-w-[1200px] mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          MyPortfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {data.map((i, ind) => (
            <Link
              key={ind}
              to={i.link}
              className="text-[18px] font-medium text-gray-700 relative group"
            >
              {i.name}

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-gray-700"
          >
            <CiMenuFries />
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col items-center py-6 gap-6">
            {data.map((i, ind) => (
              <Link
                key={ind}
                to={i.link}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-700 hover:text-blue-600 transition"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default Nav