import React from 'react'
import './Footer.css'

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="footer">

                <div className="footer-top">

                    <div className="footer-brand">
                        <h1>Abdul Rehman</h1>
                        <h5>Full Stack Developer</h5>
                    </div>

                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                </div>

                <hr />

                <div className="footer-bottom">

                    <p>&copy; 2026 Abdul Rehman. All rights reserved.</p>

                    <div className="footer-social">

                        <a
                            href="https://www.linkedin.com/in/abdul-rehman-763b11396/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://github.com/abdurehman19"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                        </a>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;