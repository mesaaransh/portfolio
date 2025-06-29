import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Education.css"
import AnimatedContent from "../ReactBits/AnimatedContent"

export default function Education() {
    return (
        <div className="wrapper" id="education">
            <div className="eduhead">
                <h3 className="subhead">My Experience</h3>
                <h1 className='head'>My <em> Professional</em> Journey</h1>

                <AnimatedContent>

                <div className="educont">

                    <div className="work">

                        <AnimatedContent
                        direction="horizontal"
                        reverse={true}>
                        <div className="eduitem">
                            <div>
                                <h2>Full Stack Intern</h2>
                                <h4>ACT Center, School of Liberal Arts & Sciences</h4>
                            </div>
                            <div>
                                <h4>Apr 24 - Feb 25</h4>
                                <h4>Patiala, India</h4>
                            </div>
                        </div>
                        </AnimatedContent>

                        <AnimatedContent
                        direction="horizontal"
                        reverse={true}>
                        <div className="eduitem">
                            <div>
                                <h2>Full Stack Intern</h2>
                                <h4>PraxisForge Ltd.</h4>
                            </div>
                            <div>
                                <h4>Aug 24 - Dec 24</h4>
                                <h4>Remote | Delhi, India</h4>
                            </div>
                        </div>
                        </AnimatedContent>
                        
                        <AnimatedContent
                        direction="horizontal"
                        reverse={true}>
                        <div className="eduitem">
                            <div>
                                <h2>Research Intern</h2>
                                <h4>Punjab Pollution Control Board</h4>
                            </div>
                            <div>
                                <h4>Sep 2022 - Sep 2023</h4>
                                <h4>Chandigarh, India</h4>
                            </div>
                        </div>
                        </AnimatedContent>
                    </div>

                </div>

                </AnimatedContent>
            </div>
        </div>
    )
}
