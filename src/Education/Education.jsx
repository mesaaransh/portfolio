import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Education.css"
import { faSchool, faSchoolFlag } from "@fortawesome/free-solid-svg-icons"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase"

export default function Education() {
    return (
        <div className="wrapper">
            <div className="eduhead">
                <h3 className="subhead">Work & Expereience</h3>
                <h1 className='head'>My <em>Academic and <br /> Professional</em> Journey</h1>

                <div className="educont">

                    <div className="edu">
                        <div className="flex">
                            <div className="icon">
                                <FontAwesomeIcon icon={faSchoolFlag} />
                            </div>
                            <h2>Education</h2>
                        </div>

                        <div className="eduitem">
                            <h4>2022 - 2026</h4>
                            <h2>Thapar University</h2>
                            <h4>Bachelor's in Computer Engineering</h4>
                        </div>

                        <div className="eduitem">
                            <h4>2020 - 2022</h4>
                            <h2>BCM Arya International</h2>
                            <h4>A/As Levels</h4>
                        </div>

                        <div className="eduitem">
                            <h4>2018 - 2020</h4>
                            <h2>BCM Arya International</h2>
                            <h4>GCSE's </h4>
                        </div>

                    </div>

                    <div className="work">
                        <div className="flex">
                            <div className="icon">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <h2>Work</h2>
                        </div>

                        <div className="eduitem">
                            <h4>May 24 - Present</h4>
                            <h2>ACT Center</h2>
                            <h4>Full Stack Intern</h4>
                        </div>

                        <div className="eduitem">
                            <h4>Aug 24 - Dec 24</h4>
                            <h2>PraxisForge Pvt. Ltd.</h2>
                            <h4>Full Stack Intern</h4>
                        </div>

                        <div className="eduitem">
                            <h4>Sep 22 - Sep 23</h4>
                            <h2>Ministry of Environment</h2>
                            <h4>Undergraduate Research Intern</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
