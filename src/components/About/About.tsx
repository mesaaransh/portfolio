import "./About.css"

import sign from "./assets/sign-01.png"
import {FaCode, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"

export default function About() {
  return (
    <div className="about">
        
        <div className="aboutLeft">
            <h1>About Me</h1>
            <p>Get to know me</p>
            <div className="aboutButtons">
                <button className="button">Resume</button>
                <button className="icon"> <FaGithub/> </button>
                <button className="icon"> <FaLinkedinIn/> </button>
                <button className="icon"> <FaInstagram/> </button>
                <button className="icon"> <FaCode/> </button>
            </div>
        </div>


        <div className="aboutRight">
            <p>I am a highly motivated and results-oriented computer engineering student with a strong passion for web development. I have a proven ability to create efficient, scalable, and user-friendly web applications using React, Node.js, and other cutting-edge technologies.</p>
            <img src={sign} alt="" className="sign" />
        </div>

    </div>
  )
}
