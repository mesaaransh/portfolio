import React from 'react'
import "./Projects.css"
import Sigbutton from '../Components/SigButton/Sigbutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    return (
        <div className='wrapper portfolio'>

            <div className="projecthead">

                <div>
                    <h3 className='subhead'>
                        My Portfolio
                    </h3>
                    <h1 className='head'>My Latest <em>Projects</em></h1>
                </div>

                <Sigbutton text={'View More'} />

            </div>

            <div className="projects">

                <div className="col">
                    <Project />
                    <Project />
                </div>
                <div className="col">
                    <Project />
                    <Project />
                </div>

                <Sigbutton text={'View More'} />
            </div>

        </div>
    )
}






function Project() {

    return (
        <div className="project">
            <div className="image">

            </div>
            <h2 className="title">
                Smart Lost & Found
                <div className='flex'>
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            </h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus nobis nihil tenetur optio nesciunt quam enim quaerat labore eveniet.</p>
        </div>

    )

}
