import React from "react";

import './style.scss';
import cv from '../../Assets/cv.pdf';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-media">
                <a href={cv} target='_blank' rel="noreferrer"><i className="far fa-file-pdf"></i></a>
                <a href="https://github.com/AlexRousseau92" target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/alexandre-rousseau-a0628aaa/"target='_blank' rel='noreferrer' ><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="footer-copyright">Rousseau Alexandre © 2021</p>
        </footer>
    );
};

export default Footer;
