import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className="about-me">
                <div className="about-me-title">
                    <span>Hi, I'm Rupam Dhar</span>
                    <div className="about-me-sub-title">Software Engineer</div>
                </div>
                <div className="about-me-desc">
                    I am a Computer Science Engineer based in India who can design and develop websites, web applications, mobile applications as well as games. Additionally, I also have experience in 3D modelling.
                </div>
                <div className="btn-container">
                    <a href='/cv.pdf' className="about-me-btn" download="Rupam_Dhar_CV.pdf">
                        <button className="about-me-btn">Download CV</button>
                    </a>
                    <a href="https://github.com/RupamDhar" target='_blank' className='github-btn'>
                        <img src="/github.svg" alt="" className='github-logo'/>
                        <span className='github-name'>GitHub</span>
                        <i className="fa-solid fa-arrow-right github-arrow"></i>
                    </a>
                </div>
                <div className='gradient'></div>
            </div>

            {/* <div className="about-me-image">
                <img className='my-image' src="/me.jpg" alt="" />
            </div> */}
        </div>
    )
}

export default HeroSection
