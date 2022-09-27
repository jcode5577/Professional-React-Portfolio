import React from 'react';
import "./resume.scss"


function Resume() {

    return (
        <div className="resume" id="resume">
            <h2>John Hamilton Resume</h2>
            <p>Note: Please find a <a href="https://drive.google.com/drive/folders/1tSjv0tc_gumLqyroG1DgGZlXIDt1tWrh" target="_blank" rel="noreferrer">downloadable resume here</a></p>
            <p></p>
            <h3>Full Stack Development Experience</h3>
            <p>As a full stack developer in the KU Extension Full Stack Development Coding Bootcamp, I have developed proficiency with these technologies:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default Resume;