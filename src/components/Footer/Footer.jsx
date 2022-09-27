import React from 'react';
import "./footer.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {

    return (
        <div className="footer" id="footer">
        <ul>
            <li><a href="https://github.com/jcode5577" target="_blank" rel="noreferrer"><GitHubIcon className="icon"></GitHubIcon></a></li>
            <li><a href="https://www.linkedin.com/in/john-hamilton-56360a251/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon"></LinkedInIcon></a></li>
            <li><a href="https://twitter.com/JohnHam67833835" target="_blank" rel="noreferrer"><TwitterIcon className="icon"></TwitterIcon></a></li>
        </ul>
    </div>
        );
}

export default Footer;