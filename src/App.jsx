import React from 'react'
import Home from "./Components/Home"
import About from "./Components/About"
import ErrorFound from "./Components/errorFound"
import Nav from './Components/navbar/Nav'
import Project from './Components/Project'
import Service from './Components/Service'
import Contact from './Components/Contact'
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