import React from 'react'
import "./About.css"
import me from "./assets/me2.png"
import Sigbutton from '../Components/SigButton/Sigbutton'

export default function About() {
  return (

    <div className='about wrapper'>

      <div className='flex'>

        <div className='aboutphoto'>
          <div className="photo">
            <img src={me} alt="" />
          </div>
        </div>

        <div className='aboutcontent'>
          <h3 className='subhead'>
            About Me
          </h3>

          <h1 className='head'>Who is <em>Saaransh Gupta?</em></h1>

          <p>
            Passionate problem-solver, full-stack developer, and AI enthusiast who thrives on building intuitive digital experiences and pushing creative boundaries.
          </p>

          <div className="aboutfocus">
            <div className="focusitem">
              <h2> 10000+ </h2>
              <p> Lines contributed on GitHub</p>
            </div>

            <div className="focusitem">
              <h2> 10+ </h2>
              <p> Competitions mastered on kaggle </p>
            </div>

            <div className="focusitem">
              <h2> 10+ </h2>
              <p> Hackathons participated and mentored </p>
            </div>
          </div>

          <a className="contactSubmit" href='/resume.pdf' target='_blank'>
            <Sigbutton text={'View My Resume'} />
          </a>

        </div>
      </div>

    </div>

  )
}
