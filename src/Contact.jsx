import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./contact.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';


function Contact() {
    const Logo = ({ lgSrc, hrefto }) => {
        return (
            <a target='_blank' className='contact_logo_path' href={hrefto || "#"}>
                {lgSrc}
            </a>
        );
    };
    return (
        <div id='contact' className='contact_sec'>
            <div className='contact_sec_main'>
                <h1>Contact Me</h1>
                <h2>Email: <a href="mailto:alimmamadovxurshed12@gmail.com"> <span>alimmamadovxurshed12@gmail.com</span></a></h2>
                <h2>Phone: <span>+998904524946</span></h2>
                <h2>Telegram: <span>@alimmamadov_12</span></h2>
                <h2> {<LocationOnIcon />} Address: <span>Uzbekistan St. 182A, Samarkand, Samarkand, Uzbekistan.</span></h2>
                <Logo hrefto="https://www.instagram.com/khurshedjan_12.06/" lgSrc={<InstagramIcon fontSize="large" />} />
                <Logo hrefto="https://github.com/Khurshedjan04" lgSrc={<GitHubIcon fontSize="large" />} />
                <Logo hrefto="mailto:alimmamadovxurshed12@gmail.com" lgSrc={<MailOutlineIcon fontSize="large" />} />
                <p className='author'> Copyright © Xurshed Alimmamadov</p>
                <a href='#' className='go_top'>Go to the top {<VerticalAlignTopIcon className='go_top_logo' />} </a>
            </div>
        </div>
    )
}

export default Contact