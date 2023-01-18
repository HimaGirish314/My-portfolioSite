import React from 'react'
import './Projects.css';
import {BsGithub,BsCart4,BsBoxArrowUpRight} from 'react-icons/bs';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>PROJECTS</h2> 
      <div className="projects">
        <div className="project-1">
          <h3>SHOPPING_KART</h3>
          <span><BsCart4 /></span>
          <div className="skills-used">
            <ul>
              <li>React JS</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>ContextAPI</li>
            </ul>
          </div>
          <div className="logo">
            <a href="https://github.com/HimaGirish314/E-Kart" target="_blank" rel='noreferrer' className='git-logo'><BsGithub /></a>
            <a href="https://ezy-kart.netlify.app/" rel="noreferrer" target="_blank" className='arrow-logo'><BsBoxArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects