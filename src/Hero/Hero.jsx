import React from 'react'
import "./hero.css"
import Sigbutton from '../Components/SigButton/Sigbutton'
import Hbutton from '../Components/HButton/Hbutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'

export default function Hero() {
    return (
        <div className='wrapper flex'>
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

            </div>
        </div>
    )
}