import React from 'react'
import "./Projects.css"
import Sigbutton from '../Components/SigButton/Sigbutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import projectlist from './projectlist'

export default function Projects() {

    let projects = projectlist;

    return (
        <div className='wrapper portfolio' id='portfolio'>

            <div className="projecthead">

                <div>
                    <h3 className='subhead'>
                        My Portfolio
                    </h3>
                    <h1 className='head'>My Latest <em>Projects</em></h1>
                </div>

                <a className="contactSubmit" href='https://www.github.com/mesaaransh' target='_blank'>
                    <Sigbutton text={'View More'} />
                </a>

            </div>

            <div className="projects">

                <div className="col">
                    {
                        projects.map((project, i) => (
                            i % 2 == 0 ?
                                <Project name={project.name} description={project.description} /> :
                                <></>
                        ))
                    }
                </div>
                <div className="col">
                    {
                        projects.map((project, i) => (
                            i % 2 != 0 ?
                                <Project name={project.name} description={project.description} /> :
                                <></>
                        ))
                    }
                </div>

                <Sigbutton text={'View More'} />
            </div>

        </div>
    )
}


function Project({ name, description }) {

    return (
        <div className="project">
            <div className="image">

            </div>
            <h2 className="title">
                {name}
                <div className='flex'>
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            </h2>

            <p>
                {description}
            </p>
        </div>

    )

}
