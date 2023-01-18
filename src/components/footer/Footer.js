import React from 'react'
import './Footer.css';
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className="footer-section">
        <BsGithub className='git-logo2'/><a href="https://github.com/HimaGirish314" className='footer-link'>"HimaGirish"</a>
    </div>
  )
}

export default Footer