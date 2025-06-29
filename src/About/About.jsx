import React from 'react'
import "./About.css"
import me from "./assets/me2.png"
import Sigbutton from '../Components/SigButton/Sigbutton'
import CountUp from "../ReactBits/CountUp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faKaggle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import AnimatedContent from "../ReactBits/AnimatedContent"
import { useNavigate } from 'react-router-dom'

export default function About() {
  return (

    <div className='about wrapper'>
      <AnimatedContent
        distance={120}
        direction="vertical"
        reverse={false}
        duration={1}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        threshold={0.2}
        delay={0.3}
      >
        <AboutCard />
      </AnimatedContent>
    </div>

  )
}


function AboutCard() {

  const navigator = useNavigate();
  return (
    <div className="aboutCard">

      <div className='aboutContent'>
        <h1 className='head'>Who is <em>Saaransh Gupta?</em></h1>

        <p>
          Passionate problem-solver, full-stack developer, and AI enthusiast who thrives on building intuitive digital experiences and pushing creative boundaries.
        </p>

        <div className="aboutfocus">
          <div className="focusitem">
            <h2>
              <CountUp
                from={8000}
                to={10000}
                separator=","
                direction="up"
                duration={0.5}
              />
              +
            </h2>
            <p> Lines contributed on GitHub</p>
          </div>

          <div className="focusitem">
            <h2>
              <CountUp
                from={0}
                to={10}
                separator=","
                direction="up"
                duration={0.5}
              />
              +
            </h2>
            <p> Kaggle Competitions </p>
          </div>

          <div className="focusitem">
            <h2>
              <CountUp
                from={0}
                to={20}
                delay={0.1}
                separator=","
                direction="up"
                duration={0.5}
              />
              +
            </h2>
            <p> Hackathons </p>
          </div>

          <div className="focusitem">
            <h2>
              <CountUp
                from={0}
                to={2000}
                delay={0.5}
                separator=","
                direction="up"
                duration={0.5}
              />
              +
            </h2>
            <p> Users Impacted </p>
          </div>
        </div>

        <div className="btnGroup">
          <div><a href="./resume.pdf"><Sigbutton text={'View My Resume'} /></a></div>
          <div><a href="https://www.github.com/mesaaransh" target='_blank'><FontAwesomeIcon icon={faGithub}/></a></div>
          <div><a href="https://www.linkedin.com/in/saaranshgupta19/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></a></div>
          <div><a href="https://www.instagram.com/mesaaransh/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a></div>
        </div>

      </div>

      <div className='aboutphoto'>
        <div className="photo">
          <img src={me} alt="" />
        </div>
      </div>
    </div>
  )
}