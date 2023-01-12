import React from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
        <div className="navbar">
            <h2 className='navbar-head'><a href="/">HG.</a> </h2>
            <nav>
                <ul className="nav-list">
                    <li className='link__nav'><a href="#projects" className='link'>projects</a> </li>
                    <li className='link__nav'><a href="#skills" className=' link'>skills</a></li>
                    <li className='link__nav'><a href="#contact" className='link '>contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header