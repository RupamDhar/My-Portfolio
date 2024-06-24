import React from 'react'
import './Contact.css'

const Contact = () => {


    return (
        <div id='contact' className='contact-section'>
            <div className="title contact-title">Contact</div>
            <div className="contact-methods">
                <div className="contact">
                    <img src="/contacts/gmail.svg" alt="" />
                    <div className="contact-name">rupamdhar1000@gmail.com</div>
                </div>
                <div className="contact">
                    <img src="/contacts/phone.svg" alt="" />
                    <div className="contact-name">+91 90074 70139</div>
                </div>
                <a href='https://www.linkedin.com/in/rupam-dhar-692888202/' target='_blank' className="contact">
                    <img src="/contacts/linkedin.svg" alt="" />
                    <div className="contact-name">Rupam Dhar</div>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a href='https://x.com/siegexghost/' target='_blank' className="contact">
                    <img src="/contacts/twitter.svg" alt="" />
                    <div className="contact-name">Rupam Dhar</div>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>


    )
}


export default Contact
