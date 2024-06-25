import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Portfolio.css'


const Portfolio = () => {

    const projects = [
        {
            projectImg: '/portfolio/globalexperts.png',
            projectName: 'Global Auto Experts',
            projectType: 'Web Design',
            projectDesc: 'Anandi is a full-stack MERN online store platform designed to provide users with a seamless exploration experience for clothing and apparel products',
            projectLink: 'https://github.com/RupamDhar/Global-Auto-Exports-homepage'
        },
        {
            projectImg: '/portfolio/anandi.png',
            projectName: 'Anandi',
            projectType: 'Website',
            projectDesc: 'Anandi is a full-stack MERN online store platform designed to provide users with a seamless exploration experience for clothing and apparel products',
            projectLink: 'https://anandi.vercel.app'
        },
        {
            projectImg: '/portfolio/dressemporium.png',
            projectName: 'Dress Emporium',
            projectType: 'Web Design',
            projectDesc: 'The Dress Emporium is a static website, which is a responsive and elegant online dress store featuring a carousel, in-store items, and brand partners',
            projectLink: 'https://newdressemporium.web.app'
        },
        {
            projectImg: '/portfolio/technicia.png',
            projectName: 'Technicia',
            projectType: 'Website',
            projectDesc: 'Technicia is a full-stack web application for scheduling visits and booking slots, ensuring a seamless experience for customers and staff',
            projectLink: 'https://github.com/RupamDhar/Technicia'
        },
        {
            projectImg: '/portfolio/weather.png',
            projectName: 'Weather',
            projectType: 'Website',
            projectDesc: 'This MERN project fetches weather data based on user input location. It uses React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for data storage',
            projectLink: 'https://github.com/RupamDhar/Weather-MERN'
        },
        {
            projectImg: '/portfolio/endlessrunner.png',
            projectName: 'Endless Runner',
            projectType: 'Game',
            projectDesc: 'This is a game made with Unity 3D. In this game, the player(the cube) has to go as far as possible without falling off edge or hitting obstacles more than 4 times',
            projectLink: 'https://github.com/RupamDhar/Endless-Runner'
        },
    ];

    return (
        <div id='portfolio' className='portfolio'>
            <span className='title portfolio-title'>
                <b> {'<'} </b>Portfolio<b> {'>'} </b>
            </span>
            <div className="projects-wrapper">
                {projects.map((project, index) => (
                    <div className="project" key={index} target='_blank'>
                        <img src={project.projectImg} className='project-image' alt="project-image" />
                        <div className="project-info">
                            <div className="project-title">{project.projectName}</div>
                            <div className="project-type">{project.projectType}</div>
                            <div className="project-desc">{project.projectDesc}</div>
                            <a href={project.projectLink} className='project-btn' target='blank'>Visit</a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Portfolio
