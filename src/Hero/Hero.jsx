import React from 'react'
import "./Hero.css"
import bot from "./assets/bot.png"
import Sigbutton from '../Components/SigButton/Sigbutton'
import { useNavigate } from 'react-router-dom'

export default function Hero() {

    var navigator = useNavigate();
    function resumeRedirect() {
        navigator('/resume.pdf')
    }

    return (
        <div className='wrapper hero' id='hero'>
            <div className="herointro">
                <h4 className='square'>
                    <div className="insquare"></div>
                    Hello There!
                </h4>
                <h1>
                    I'm <em>Saaransh Gupta, </em> <br />
                    Web Developer <br />
                    Based in Punjab.
                </h1>

                <p>Building scalable solutions, crafting immersive experiences, and innovating with AI-driven full-stack development.</p>

                <a className="contactSubmit" href='/resume.pdf' target='_blank'>
                    <Sigbutton text={'View My Resume'} />
                </a>

            </div>

            <div className="herophoto">
                <img className='' src={bot} alt="" />
            </div>
        </div>
    )
}