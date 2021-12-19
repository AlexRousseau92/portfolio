import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

// SCSS FOOTER DONE 
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-media">
                <Link to="./cv.pdf" target="_blank"  rel="noreferrer"><i className="far fa-file-pdf"></i></Link>
                <a href="https://github.com/AlexRousseau92" target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/alexandre-rousseau-a0628aaa/"target='_blank' rel='noreferrer' ><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p className="footer-copyright">Rousseau Alexandre © 2021</p>
        </footer>
    );
};

export default Footer;
