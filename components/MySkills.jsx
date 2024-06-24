import React from 'react'
import './MySkills.css'

const MySkills = () => {

    const skills = [
        {
            skillImg: '/skills/c.svg',
            skillName: 'C'
        },
        {
            skillImg: '/skills/cpp.svg',
            skillName: 'C++'
        },
        {
            skillImg: '/skills/java.svg',
            skillName: 'Java'
        },
        {
            skillImg: '/skills/html.svg',
            skillName: 'HTML'
        },
        {
            skillImg: '/skills/css.svg',
            skillName: 'CSS'
        },
        {
            skillImg: '/skills/javascript.svg',
            skillName: 'Javascript'
        },
        {
            skillImg: '/skills/mongodb.svg',
            skillName: 'MongoDB'
        },
        {
            skillImg: '/skills/express.svg',
            skillName: 'ExpressJS'
        },
        {
            skillImg: '/skills/react.svg',
            skillName: 'React'
        },
        {
            skillImg: '/skills/nodejs.svg',
            skillName: 'NodeJS'
        },
        {
            skillImg: '/skills/blender.svg',
            skillName: 'Blender'
        },
    ];

    return (
        <div id='skills' className='my-skills'>
            <span className="title skills-title" >Skills</span>

            <div className="skills-wrapper">
                {skills.map((skill, index) => (
                    <div className="skills" key={index}>
                        <img className='skill-image' src={skill.skillImg} alt="" />
                        {skill.skillName}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MySkills
