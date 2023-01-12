import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-center'>
        <h1>Hi, I am <span className="about__name">HimaGirish.</span></h1>
        <h2> A Front End Engineer</h2>
        <p className='my-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio dolore reiciendis ipsa accusamus voluptatum quibusdam? Fuga vel amet nesciunt, dolorem labore illo incidunt modi aspernatur earum est eum sed esse laborum animi consequatur cum sequi fugiat! </p>
        <div>
          <a href=" ">
            <span typeof='button' className="resume">resume</span>
            </a>
        </div>
    </div>
  )
}

export default About