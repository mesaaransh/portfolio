import React from 'react'
import "./Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'

import ScrollVelocity from "../ReactBits/ScrollVelocity"

export default function Banner() {
  return (
    <>
      <div>
        <ScrollVelocity
          texts={['Web Developer', 'Designer', 'Guitarist']}
          velocity={40}
          className="custom-scroll-text"
        />
      </div>
    </>
  )
}
