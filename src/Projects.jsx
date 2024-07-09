import React from 'react'
import "./projects.css"
import imgSrc1 from "./images/photo_2024-07-06_16-40-45.jpg"
import imgSrc2 from "./images/photo_2024-07-06_17-58-47.jpg"
import imgSrc3 from "./images/photo_2024-07-06_18-07-17.jpg"
import imgSrc4 from "./images/photo_2024-07-06_18-15-14.jpg"
import imgSrc5 from "./images/photo_2024-07-06_18-35-00.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';

function Projects() {
    const PerProject = ({ path, src, title, about
    }) => {
        return (
            <a target='_blank' href={path} className='per_project'>
                <div className="inner">
                    <h1 className='project_title' >{title}</h1>
                    <p className="project_desc" >{about}</p>
                </div>
                <img src={src} alt="" />
            </a>
        )
    }
    const Path = ({ pathSrc, title, logo }) => {
        return (
            <a target='_blank' className='about_path' href={pathSrc}>
                <> {title} {logo}</>
            </a>
        );
    };
    return (
        <div id='projects_sec' className='projects_sec_back'>
            <div className='projects_sec_main'>
                <h1 className='projects_title'>My Projects</h1>
                <h3 className="projects_desc">Here you can see some of my projects that I have done on my own</h3>
                <h3 className="projects_desc">Click on the specific project to see more</h3>
                <div className="project_content">
                    <PerProject path="https://to-do-list-silk-pi.vercel.app/" src={imgSrc4} about="A to-do list, totally made of JavaScript, that can save todoes and attach to a member of a team" title="To-Do list" />
                    <PerProject path="https://timer-gules-one.vercel.app/" src={imgSrc3} about="A timer that is totally made of JavaScript" title="JS Timer" />
                    <PerProject path="https://kinoarea-htmi-css.vercel.app/" src={imgSrc1} about="A cinema site project with the focus on CSS" title="Kinoarea" />
                    <PerProject path="https://project-for-encouraging-amazon-products.vercel.app/" src={imgSrc2} about="A site,only made of HTML and CSS, for encouraging the sale of products." title="Tech maven" />
                    <PerProject path="https://alimmamadovsimple-online-shop-khursheds-projects-10284ca4.vercel.app/" src={imgSrc5} about="A site, made mainly with the focus on HTML and CSS, for encouraging the sale of products." title="Online market" />
                </div>
                <h3 className="projects_desc">To see more and source of my projects...</h3>
        <Path logo={<GitHubIcon />} pathSrc="https://github.com/Khurshedjan04" title="Visit My GitHub" />
            </div>
        </div>
    )
}

export default Projects