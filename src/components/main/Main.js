import React from 'react'
import About from './about/About';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import './Main.css'
const Main = () => {
  return (
    <div className='main-div'>
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
  )
}

export default Main