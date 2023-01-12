import React from 'react'
import './Projects.css';
import {BsGithub} from 'react-icons/bs';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>PROJECTS</h2> 
      <div className="projects">
        <div className="project-1">
          <h3>Country-Details</h3>
          <p>This Project which helps user to know the every Country in detail.</p>
          <div className="skills-used">
            <ul>
              <li>React JS</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>
          <a href="https://github.com/HimaGirish314/my-world" className='git-logo'><BsGithub /></a>
        </div>
      </div>
    </section>
  )
}

export default Projects