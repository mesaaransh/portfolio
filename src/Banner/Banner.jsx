import React from 'react'
import "./Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
  return (
    <>
    <div className='banner'>

      <marquee behavior="scroll" direction="left" className='bannerFont'>
        <h3>Web Developer</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>UI/UX Designer</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>AI/ML Specialist</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>Cloud Technologies</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>Creative Engineer</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>App Developer</h3>
      </marquee>

    </div>
    </>
  )
}
