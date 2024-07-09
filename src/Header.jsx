import React, { useState, useEffect } from 'react'
import "./header.css"
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Resume from "./resume.pdf"

function Header() {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledPosition = window.scrollY;
            setIsFixed(scrolledPosition >= 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function ResumeButton() {
        const handleDownload = () => {
            const resumeUrl = Resume; // Replace with your actual filename
            window.open(resumeUrl, "_blank"); // Open in a new tab
        };

        return (
            <button className="list_items" onClick={handleDownload}>{<FilePresentIcon />} Resume  </button>
        );
    }
    return (
        <div className="header_alt"
            style={{ background: isFixed ? "" : 'transparent' }}
        >
            <div className={isFixed ? 'header header_shrink' : 'header'}

            >

                <a href='#' className="name">
                    Xurshed Alimmamadov
                </a>
                <button className='menuBar'> Menu</button>
                <ul className="list">
                    <a href='#about' className="list_items">About</a>
                    <a href='#skilld_sec' className="list_items">Skills</a>
                    <a href='#projects_sec' className="list_items">Projects</a>
                    <a href='#contact' className="list_items list_button">Contact</a>
                    <ResumeButton />
                </ul>
            </div>
        </div>
    )
}

export default Header