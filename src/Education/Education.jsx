import "./Education.css"
import AnimatedContent from "../ReactBits/AnimatedContent"
import experience from "./experience"

export default function Education() {


    return (
        <div className="wrapper" id="education">
            <div className="eduhead">
                <h3 className="subhead">My Experience</h3>
                <h1 className='head'>My <em> Professional</em> Journey</h1>

                <AnimatedContent>

                    <div className="educont">

                        <div className="work">
                            {
                                experience.map((item, i) => (

                                    <AnimatedContent
                                        direction="horizontal"
                                        reverse={true}
                                        delay={i/3}
                                        threshold={0.2}
                                    >
                                        <div className="eduitem">
                                            <div>
                                                <h2>{item.title}</h2>
                                                <h4>{item.company}</h4>
                                            </div>
                                            <div>
                                                <h4>{item.startDate} - {item.endDate}</h4>
                                                <h4>{item.location}</h4>
                                            </div>
                                        </div>
                                    </AnimatedContent>

                                ))
                            }

                        </div>

                    </div>

                </AnimatedContent>
            </div>
        </div>
    )
}
