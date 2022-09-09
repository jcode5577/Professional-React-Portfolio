import React from 'react';
import "./topbar.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Topbar() {

    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">John Hamilton</a>
                    <div className="itemContainer">
                        <ul>
                            <li><a href="https://github.com/jcode5577" target="_blank" rel="noreferrer"><GitHubIcon className="icon"></GitHubIcon></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon"></LinkedInIcon></a></li>
                        </ul>
                    </div>
                </div>

                <div className="right">
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#resume">Resume</a></li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default Topbar;