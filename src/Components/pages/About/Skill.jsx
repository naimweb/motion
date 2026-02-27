
import React from 'react'
import { FaHtml5, FaJs,FaReact,FaBootstrap, FaCss3, FaNode   } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";



function Skill() {
 

const techStack = [
  {
    icon :<FaHtml5  className=' text-red-600'/>,
    name: "HTML5",
    type: "Frontend",
    description: "Semantic structure, accessibility, responsive markup.",
  },
  {
    icon :<FaCss3  className=' text-blue-600'/>,
    name: "CSS3",
    type: "Frontend",
    description: "for the stylis.",
  },
  {
    icon:<FaJs className='text-yellow-400' /> ,
    name: "JavaScript",
    type: "Frontend",
    description: "Dynamic functionality, ES6+, and DOM manipulation.",
  },
  {
    icon:<FaReact  className='text-blue-300'/>,
    name: "React",
    type: "Frontend",
    description: "Component-based UI, hooks, router, and SPA structure.",
  },
  {
    icon:<SiTailwindcss className='text-blue-300'/>,
    name: "Tailwind CSS",
    type: "Frontend",
    description: "Utility-first styling with fast responsive design.",
  },
  {
    icon:<FaBootstrap className='text-blue-700' />,
    name: "Bootstrap",
    type: "Frontend",
    description: "Utility-first styling with fast responsive design.",
  },
 
 

  {
    icon:<FaNode className='text-green-500'/>,
    name: "Node.js",
    type: "Backend",
    description: "JavaScript runtime for building fast, scalable server-side apps.",
  },
];


  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Tech Stack</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {techStack.map(({ icon,name, type, description}) => (
          <div
            key={name}
            className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 "
          >
        
         <div className='flex items-center gap-4'>

            <div className='text-5xl'>{icon} </div>
               
            <h2 className="text-xl font-semibold mb-2 text-white  items-center ">
              {name} 
              <h2><span className="text-sm font-normal text-gray-400">{type}</span></h2>
            </h2>
        </div>
            
               
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Skill