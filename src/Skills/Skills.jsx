import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'
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
import tensorflow from "./assets/Tensorflow.png"
import keras from "./assets/keras.png"
import nextjs from "./assets/nextjs.png"
import graphql from "./assets/graphql.png"
import git from "./assets/git.png"
import github from "./assets/github.png"
import jenkins from "./assets/jenkins.png"
import docker from "./assets/docker.png"
import kubernetes from "./assets/kubernetes.png"
import AnimatedContent from '../ReactBits/AnimatedContent'


function toSentenceCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return "";
  }
  const lowercasedStr = str.toLowerCase();
  return lowercasedStr.charAt(0).toUpperCase() + lowercasedStr.slice(1);
}

export default function Skills() {

    const languages = [c, cpp, javascript, python, html, css]
    const Frontend = [nextjs, react, django]
    const Backend = [nodejs, express, django, graphql]
    const devops = [git, github, jenkins, docker, kubernetes]
    const Ai = [numpy, opencv, tensorflow, keras]
    const database = [oracle, mongodb, mysql]
    const allskills = [...languages, ...Frontend, ...Backend, ...devops, ...Ai, ...database];
    const skills = [...new Set(allskills)]
    
    let [selectedSkill, setSelectedSkill] = useState(1);

    function skillshow(){

        const map = {
            1: skills,
            2: languages,
            3: Frontend,
            4: Backend,
            5: devops,
            6: Ai,
            7: database
        }

        return(

            skills.map((skill, i) => {

                let text = skill.split('/')[4].split('.')[0]
                
                return (
                <AnimatedContent
                    threshold={0}
                >
                <Tooltip id={"t" + i} />
                <div data-tooltip-id={"t" + i} data-tooltip-content={toSentenceCase(text)}>
                    {
                        map[selectedSkill].includes(skill)?
                        <img src={skill} alt={skill} className="skill" />:
                        <img src={skill} alt={skill} className="skill fade" />
                    }
                </div>
                </AnimatedContent>
            )})

        )

    }

    return (
        <div className='wrapper' id='skills'>
        <AnimatedContent threshold={0}>
            <menu className="skillmenu" onMouseOut={() => setSelectedSkill(1)}>
                {/* <li className='un' onMouseOver={() => setSelectedSkill(1)}>All</li> */}
                <li className='un' onMouseOver={() => setSelectedSkill(2)}>Languages</li>
                <li className='un' onMouseOver={() => setSelectedSkill(3)}>Frontend</li>
                <li className='un' onMouseOver={() => setSelectedSkill(4)}>Backend</li>
                <li className='un' onMouseOver={() => setSelectedSkill(5)}>Devops</li>
                <li className='un' onMouseOver={() => setSelectedSkill(6)}>AI/ML</li>
                <li className='un' onMouseOver={() => setSelectedSkill(7)}>Databases</li>
            </menu>
        </AnimatedContent>

            <div className="skillset">
            {
                skillshow()
            }
            </div>

        </div>
    )
}
