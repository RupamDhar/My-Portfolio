import React, { useEffect } from 'react'
import './Education.css'

const Education = () => {

    useEffect(() => {
        const points = document.querySelectorAll('.point');

        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                setTimeout(() => {
                    if (entry.isIntersecting) entry.target.classList.add('show-point');
                }, 100 * index);
            })
        }, { threshold: 1 })

        points.forEach(point => observer.observe(point))

    }, []);

    return (
        <div id='education' className="my-education">
            <div className='bg'>EDUCATION</div>
            <span className="title education-title" >Education</span>
            <div className="edu-wrapper">
                <div className="edu-progress">
                    <div className="circle one" ></div>
                    <div className="line"></div>
                    <div className="circle two" ></div>
                </div>
                <div className="edu-info">
                    <div className="point one hidden-point">
                        <b>University of Engineering and Management, Kolkata</b>
                        <br />Completed Bachelor's Degree in Computer Science.<br />
                        <i className="fa-regular fa-calendar-days"></i>2020 - 2024
                    </div>
                    <div className="point two hidden-point">
                        <b>Hariyana Vidya Mandir</b>
                        <br />Completed Higher-Secondary with Science as major.<br />
                        <i className="fa-regular fa-calendar-days"></i>2007 - 2020
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
