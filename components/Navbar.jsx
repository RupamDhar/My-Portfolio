import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='navbar-title'>
                Rupam<span style={{color:'brown'}}>.</span>
                </span>

            <ul className="navbar-list">
                <li><a href='#' className="navbar-list-item active">Home</a></li>
                <li><a href='#skills' className="navbar-list-item">Skills</a></li>
                <li><a href='#education' className="navbar-list-item">Education</a></li>
                <li><a href='#portfolio' className="navbar-list-item">Portfolio</a></li>
                <li><a href='#contact' className="navbar-list-item">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar
