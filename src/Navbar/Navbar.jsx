import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navlogo"></div>
        <p className="navname">Saaransh</p>

        <menu className='navmenu'>
            <li className='un'>Home</li>
            <li className='un'>Skills</li>
            <li className='un'>Projects</li>
            <li className='un'>Education</li>
            <li className='un'>Experience</li>
        </menu>

        <div className="navbutton">
            Contact Me
        </div>
    </div>
  )
}
