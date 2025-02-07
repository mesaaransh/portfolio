import React from 'react'
import "./About.css"
import Sigbutton from '../Components/SigButton/Sigbutton'

export default function About() {
  return (

    <div className='about wrapper'>

      <div className='flex'>

        <div className='aboutphoto'>
          <div className="photo">
            
          </div>
        </div>

        <div className='aboutcontent'>
          <h3 className='subhead'>
            About Me
          </h3>

          <h1 className='head'>Who is <em>Saaransh Gupta?</em></h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit qui ipsa blanditiis
            dolorem alias neque id rem nemo quas dolorum. Lorem ipsum dolor sit amet.
          </p>

          <div className="aboutfocus">
            <div className="focusitem">
              <h2> 30+ </h2>
              <p> Datasets generated on kaggle </p>
            </div>

            <div className="focusitem">
              <h2> 30+ </h2>
              <p> Datasets generated on kaggle </p>
            </div>

            <div className="focusitem">
              <h2> 30+ </h2>
              <p> Datasets generated on kaggle </p>
            </div>
          </div>

          <Sigbutton text={'View My Resume'}/>

        </div>
      </div>

    </div>

  )
}
