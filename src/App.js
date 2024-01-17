import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
    </div>
  )
}

export default App
