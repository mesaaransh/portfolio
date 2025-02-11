import React from 'react'
import "./Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
  return (
    <div className='banner'>

      <marquee behavior="scroll" direction="left" className='bannerFont'>
        <h3>Web Designer</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>Web Designer</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>Web Designer</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>Web Designer</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>Web Designer</h3>
        <FontAwesomeIcon icon={faStarOfLife} />
        <h3>Web Designer</h3>
      </marquee>

    </div>
  )
}
