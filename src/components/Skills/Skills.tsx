import "./Skills.css"
import c from "./assets/c.png"
import cpp from "./assets/cpp.png"
import cs from "./assets/cs.png"
import python from "./assets/python.png"
import django from "./assets/django.png"
import css from "./assets/css.png"
import express from "./assets/express.png"
import html from "./assets/html.png"
import javascript from "./assets/javascript.png"
import mongodb from "./assets/mongodb.png"
import mysql from "./assets/mysql.png"
import nodejs from "./assets/nodejs.png"
import numpy from "./assets/numpy.png"
import opencv from "./assets/opencv.png"
import oracle from "./assets/oracle.png"
import react from "./assets/react.png"

export default function Skills() {

    const skills = [
        html,
        css,
        javascript,
        react,
        nodejs,
        express,
        python,
        django,
        mongodb,
        mysql,
        c,
        cpp,
        cs,
        numpy,
        opencv,
        oracle
    ];

    return (
        <div className="skills">

            <p>The tech I know</p>
            <h1>My Skills</h1>

            <div className="skillSelector">
                <h4>All</h4>
                <h4>All Languages</h4>
                <h4>Frontend Development</h4>
                <h4>Backend Development</h4>
                <h4>AI/ML</h4>
                <h4>Databases</h4>
            </div>

            <div className="skillSection">
                {
                    skills.map((skill, index) => (
                        <>  
                            <div className={skill.split('/')[5].split('.')[0]}>
                                <img src={skill} alt={skill.split('/')[5].split('.')[0]} className="skill" />
                            </div>
                        </>
                    ))
                }
            </div>

        </div>
    )
}
