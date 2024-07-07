import { useGSAP } from "@gsap/react";
import "./TimeLine.css";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);

export default function TimeLine(props: any) {

    gsap.registerPlugin(ScrollTrigger);
    const edu: any = useRef(null)
    useGSAP(
        () => {
            gsap.from('.portfolioCardCont', {
                scrollTrigger: {
                    trigger: '#trig',
                    start: 'top bottom',
                    toggleActions: "restart none none none",
                },
                y: -100,
                opacity: 0,
                duration: 1,
                stagger: 0.5,
                delay: 0.1
            })
        },
        {scope: edu}
    )


    return (
        <div className="Education" ref={edu}>
            <h1 id="trig">{props.head}</h1>
            <div className="timeLine">
                <div className="vertBar"></div>
                <div className="information">
                    {props.data.map((item: any) => (
                        <div className="portfolioCardCont">
                            <h4>
                                {item.startDate} - {item.endDate}
                            </h4>
                            <h4>
                                {item.degree} | {item.subject}
                            </h4>

                            <div className="portfolioCard">
                                <h4>{item.institute}</h4>
                                <p>
                                    {item.description}
                                </p>
                                {item.score?<h5>Grade Point: {item.score}</h5>:<></>}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
