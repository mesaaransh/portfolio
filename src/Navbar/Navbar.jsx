import React, { useState } from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons/faHamburger'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'

export default function Navbar() {

  let [show, setShow] = useState(false)

  function navMenuToggle() {
    setShow(!show)
  }

  function NavMenu() {

    return (
      <div className="navmenuphone">
        <div className="close" onClick={navMenuToggle}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <menu className='navmenulistphone' onClick={navMenuToggle}>
          <a href="#hero" className='un'>Home</a>
          <a href="#skills" className='un'>Skills</a>
          <a href="#portfolio" className='un'>Projects</a>
          <li className='un'><a href="https://blogs.saaranshgupta.com" target='_blank'>Blogs</a></li>
          <a href="#education" className='un'>Experience</a>
          <a href='#contact' className='un'>Contact</a>
        </menu>

      </div>
    )

  }

  return (
    <>
      <div className='navbar'>

        <menu className='navmenu'>
          <li className='un'><a href="#hero">Home</a></li>
          <li className='un'><a href="#about">About</a></li>
          <li className='un'><a href="#skills">Skills</a></li>
          <li className='un'><a href="#portfolio">Projects</a></li>
          <li className='un'><a href="https://blogs.saaranshgupta.com" target='_blank'>Blogs</a></li>
          <li className='un'><a href="#education">Experience</a></li>
          <li className='un'><a href="#contact">Contact</a></li>
        </menu>

        <div className="navbutton phone" onClick={navMenuToggle}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
      </div>

      {show ? <NavMenu /> : <></>}
    </>
  )
}