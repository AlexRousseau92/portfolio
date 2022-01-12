import React, {useContext} from 'react';
import { ThemeContext } from "../../Components/Context";
import { Link } from 'react-router-dom';
import logoOne from '../../Assets/Anchor_blue.svg';
import logoTwo from '../../Assets/Anchor_white.svg'
import './style.scss'
 
const About = () => {

    const light = logoOne;
    const dark = logoTwo;

    const {theme} = useContext(ThemeContext)
return (
    
    <section className={theme ? "container about light" : "container about dark"}>
        <div className="about-left">
            <div className="about-description">
                <h1 className='about-title light'>Hello there</h1>
                <div className={theme? 'about-ligne light' : 'about-ligne dark'}></div>
                <p className='about-text'>
                    After few years navigating along the Seine as a Captain,
                    I decided to change direction and focus on something I always wanted to do  Web Development. I started a 6 months course online <span className="about-js">full stack developper </span>
                    with <a className="oclock" href="https://oclock.io/formations/developpeur-web-fullstack-javascript" target="_blank" rel="noreferrer"><span className="about-oclock"> O'Clock</span></a> school in order to learn the basics of the job.
                </p>
                <p className='about-text'>
                    During this training we learned to work on Linux environment while handling Git with github, html/css and javascript <span className="about-text-hashtag">#OOP</span>  node.js with his framework Express <span className="about-text-hashtag">#SQL </span>
                    I have then specialized myself in React with Redux for a month.
                </p>
                <p className="about-text ">
                    Our project to conclude the trainning, was conceived with a team of 4 during a month. We worked together in reals conditions with a deadline.
                    You can find more informations about our project <Link to="/works"><span className='about-text-link'>here.</span></Link>
                </p>
            </div>
        </div>
        <div className="about-right">
            {
                theme ? <img className="about-anchor" src={light} alt="Half logo blue" /> : <img className="about-anchor" src={dark} alt="Half logo white" />
            }

        </div>
    </section>
            
);
}
export default About;