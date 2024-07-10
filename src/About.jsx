import React from 'react'
import "./about.css"
import imgSrc from "./images/photo_2024-07-09_23-54-05.jpg"
import AboutRight from './AboutRight.jsx'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Resume from "./resume.pdf"

function About() {
    const Logo = ({ lgSrc, hrefto }) => {
        return (
            <a target='_blank' className='about_logo_path' href={hrefto || "#"}>
                {lgSrc}
            </a>
        );
    };
    const Path = ({ pathSrc, title, logo }) => {
        return (
            <a className='about_path' href={pathSrc}>
                <> {title} {logo}</>
            </a>
        );
    };
    function ResumeButton() {
        const handleDownload = () => {
            const resumeUrl = Resume; // Replace with your actual filename
            window.open(resumeUrl, "_blank"); // Open in a new tab
        };

        return (
            <button className='resume_about' onClick={handleDownload}>{<FilePresentIcon className='resume_icon' />} Resume  </button>
        );
    }
    return (
        <div className='about_main'>
            <div className="about_back">
                <div id='about' className="about_page">
                    <div className="about_left">
                        <img className='about_img' src={imgSrc} alt="" />
                        <div className="socials">
                            <Logo hrefto="https://www.instagram.com/khurshedjan_12.06/" lgSrc={<InstagramIcon fontSize="large" />} />
                            <Logo hrefto="https://github.com/Khurshedjan04" lgSrc={<GitHubIcon fontSize="large" />} />
                            <Logo hrefto="mailto:alimmamadovxurshed12@gmail.com" lgSrc={<MailOutlineIcon fontSize="large" />} />
                        </div>
                    </div>
                    <AboutRight />
                </div>
                <h1 className='path_above'>Learn more about my</h1>
                <div className="paths">
                    <Path pathSrc="#skilld_sec" title="Skills" />
                    <Path pathSrc="#projects_sec" title="Projects" />
                    <ResumeButton />
                </div>
            </div>
        </div>
    )
}

export default About