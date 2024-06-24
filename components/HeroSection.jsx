import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className="about-me">
                <div className="about-me-title">
                    Hi, I'm Rupam Dhar
                    <div className="about-me-sub-title">Software Engineer</div>
                </div>
                <div className="about-me-desc">
                    I am a Computer Science Engineer based in India who can develop websites, web applications, mobile applications as well as games. I also have experience in 3D modelling.
                </div>
                <a href='/cv.pdf' download="Rupam_Dhar_CV.pdf">
                    <button className="about-me-btn">Download CV</button>
                </a>
            </div>

            {/* <div className="about-me-image">
                <img className='my-image' src="/me.jpg" alt="" />
            </div> */}
        </div>
    )
}

export default HeroSection
