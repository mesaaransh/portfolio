import { useRef, useState } from "react"
import "./Hero.css"
import { TypeAnimation } from "react-type-animation";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);

export default function Hero() {

    const photo: any = useRef();

    useGSAP(
        () => {
            gsap.from('.heroImage', {x:100, opacity: 0, ease: "power2.inOut",})
        },
        {scope: photo}
    )


    return (
        <div className="hero">

            <div className="heroItems" ref={photo}>

                <div className="herotext">
                    <p>Hello, I am</p>
                    <h1>
                        <TypeAnimation
                            sequence={[
                                'Saaransh Gupta',
                                2000,
                                'Web Developer',
                                2000,
                                'Data Analyst',
                                2000,
                                'UI/UX Designer',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p>Web developer crafting efficient and user-friendly solutions <br />
                     with React, Node.js, and a passion for innovation.</p>

                    <div className="heroButtons twoButtons">
                        <button type="button" className="button">Resume</button>
                        <button type="button" className="button">Freelancing</button>
                    </div>
                </div>

                <div className="heroImage">

                </div>
            </div>


            <svg width="100%" viewBox="0 0 1920 650" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave">
                <path d="M391.704 598.547C169.588 598.547 38.0198 506.092 0 459.864V650H1920V0C1692.38 0 669.349 598.547 391.704 598.547Z" fill="#EDDEFF" />
            </svg>

        </div>
    )
}
