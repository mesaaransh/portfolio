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

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corrupti deserunt officiis, odit optio aliquid.</p>

                <div className='flex' style={{gap: '20px'}}>
                    <Sigbutton text={'View My Resume'}/>
                    {/* <div className="heroicon">
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div> */}
                </div>
            </div>
            
            <div className="herophoto">
                <img className='' src={bot} alt=""/>
            </div>
        </div>
    )
}