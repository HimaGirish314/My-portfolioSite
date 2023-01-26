import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-center'>
        <h1>Hi, I am <span className="about__name">HimaGirish.</span></h1>
        <h2>Front End Developer</h2>
        <p className='my-info'>Hi, I am Seeking a role as a front-end developer (but want to be full-stack one day    ). so I
am passionate about taking risks and solving them by communicating and sharing experience and knowledge.I've been learning web development since a year, and I am loving the process. I have learnt and grown quite a lot in this learning process.</p>
        <div>
          <a href="Himagirish.pdf"  className="resume" download>resume</a>
        </div>
    </div>
  )
}

export default About