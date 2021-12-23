import React from "react";

import './style.scss';
import cv from '../../Assets/cv.pdf';


const Footer = ({themeLight, toggleTheme}) => {
    
    return (
        <footer className="footer">
            <div className="footer-media">
                <i onClick={toggleTheme} className={themeLight ? "fas fa-sun" : "fas fa-moon"}></i>
                <a href={cv} target='_blank' rel="noreferrer"><i className="far fa-file-pdf"></i></a>
                <a href="https://github.com/AlexRousseau92" target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/alexandre-rousseau-a0628aaa/"target='_blank' rel='noreferrer' ><i className="fab fa-linkedin-in"></i></a>
            </div>
            {/* <p className="footer-copyright">Rousseau Alexandre © 2021</p> */}
        </footer>
    );
};

export default Footer;
