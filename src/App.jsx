import React from 'react'
import Navbar from './Component/Navbar'
import Intro from './Component/Intro'
import Skills from './Component/Skills'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Works from './Component/Work'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App