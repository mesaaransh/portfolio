import React from 'react'
import "./Hero.css"
import bot from "./assets/bot.png"
import Sigbutton from '../Components/SigButton/Sigbutton'

export default function Hero() {
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

                <div className='flex' style={{gap: '20px'}}>
                    <Sigbutton text={'View My Resume'}/>
                </div>
            </div>
            
            <div className="herophoto">
                <img className='' src={bot} alt=""/>
            </div>
        </div>
    )
}