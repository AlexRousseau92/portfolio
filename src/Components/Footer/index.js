import React, {useContext} from "react";
import { ThemeContext } from "../Context";
import cv from '../../Assets/cv.pdf';
import './style.scss';

const Footer = () => {

    const {theme} = useContext(ThemeContext)
    
    return (
        <footer className={theme ? "footer light" : "footer dark"}>
            <div className="footer-medias ">
                <a href={cv} target='_blank' rel="noreferrer"><i className="far fa-file-pdf"></i></a>
                <a href="https://github.com/AlexRousseau92" target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/alexandre-rousseau-a0628aaa/"target='_blank' rel='noreferrer' ><i className="fab fa-linkedin-in"></i></a>
            </div>
            {/* <p className={theme ? "footer-copyright light" : "footer-copyright dark" }>Rousseau Alexandre © 2021</p> */}
        </footer>
    );
};

export default Footer;
