import "./Projects.css"
import Sigbutton from '../Components/SigButton/Sigbutton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import projectlist from './projectlist'
import AnimatedContent from '../ReactBits/AnimatedContent'

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
                                <Project key={i} images={project.imgURL} name={project.name} description={project.description} tags={project.tags} links={project.links} /> :
                                <></>
                        ))
                    }
                </div>
                <div className="col">
                    {
                        projects.map((project, i) => (
                            i % 2 != 0 ?
                                <Project key={i} images={project.imgURL} name={project.name} description={project.description} tags={project.tags} links={project.links} /> :
                                <></>
                        ))
                    }
                </div>

                <Sigbutton text={'View More'} />
            </div>

        </div>
    )
}


function Project({ key, tags, images, links, name, description }) {

    return (
        <AnimatedContent>
        <div className="project">
            <div className="image">
                {
                    images.map((image) => (
                        <img src={image} style={{flexBasis: images.length>2?'45%':'100%'}} alt="" />
                    ))
                }
            </div>
            <h2 className="title">
                {name}
                <div className='flex'>
                    {
                        links.github &&
                        <a href={links.github} target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    }
                    {
                        links.live &&
                        <a href={links.live} target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faPlay} />
                        </a>
                    }
                </div>
            </h2>

            <p>
                {description}
            </p>

            <div className="tags">
                {
                    tags.map((tag, i) => (
                        <div className="tag" key={i}>{tag}</div>
                    ))
                }
            </div>
        </div>
        </AnimatedContent>
    )

}
