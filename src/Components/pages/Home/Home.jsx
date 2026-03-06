import React from 'react'
import NameInfo from './nameInfo'
import Header from './Header'
import Footer from '../footer/Footer'
import PicAbout from '../About/picAbout'
import Service from '../Service/Service'
import Project from '../Project/ProjectLive'
import Contact from "../Contact/Contact"
import Skill from '../About/Skill'
import Biography from '../About/Biography'



function Home() {
  return (
     <>
            <NameInfo />
            {/* Header */}
            <Header />
            <Biography />
         
           <Skill />
            <Project />
           <Contact />
     

     </>
  )
}

export default Home