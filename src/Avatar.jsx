import React from 'react'
import "./avatar.css"
import imgSrc from "./images/photo_2024-07-09_23-28-11.jpg"
function Avatar() {
    return (
        <div className='avatar_main'>
            <img className='avatar_img' src={imgSrc} alt="" />
            <h1>Xurshed Alimmamadov</h1>
            <h2>Front-End Web-Developer</h2>
            <a className='avatar_path' href='#about'>Enter Partfolio</a>
        </div>
    )
}

export default Avatar