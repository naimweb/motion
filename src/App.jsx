import React from 'react'
import Home from "./Components/pages/Home/Home"
import About from "./Components/pages/About/About"
import ErrorFound from "./Components/pages/errorFound"
import Nav from './Components/navbar/Nav'
import Project from './Components/pages/Project/Project'
import Service from './Components/pages/Service/Service'
import Contact from './Components/pages/Contact/Contact'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='flex'>

         <Nav />
      </div>
      <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/about" element = {<About />} />
            <Route path = "/project" element = {<Project />} />
            <Route path = "/service" element = {<Service />} />
            <Route path = "/contact" element = {<Contact />} />
             <Route path = "*" element = {<ErrorFound />} />

       
   
      
      </Routes>
     </>
  )
}

export default App