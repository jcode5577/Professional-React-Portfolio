import React from 'react';
import "./about.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'


function About() {
    const textRef = useRef();

    useEffect (()=>{
       init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Passionate", " A leader", " A full stack developer"],   
       });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src= "./assets/headshot.jpg" alt="john H pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>John Hamilton</h1>
                    <h3>I Am  <span ref={textRef}></span></h3>
                    <p>Hello, I am a full stack web developer, well versed in both front-end and back-end aspects. I come front a medical background and love being apart of a team. I have a passion coding and learning. I look forward to improving myself and providing the best work possible for clients and teammates alike.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;