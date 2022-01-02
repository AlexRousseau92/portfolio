import React, {useContext} from 'react';
import './style.scss'
import logo from '../../Assets/Anchor.svg';
import { ThemeContext } from "../../Components/Context";
import { Link } from 'react-router-dom';
 
const About = () => {

    const {theme} = useContext(ThemeContext)
return (
    
            <section className={theme ? "container about light" : "container about dark"}>
                <div className="about-left">
                    <div className="about-description">
                        <h1 className={theme ? 'about-title light' : 'about-title dark'}>Hello there</h1>

                        <p className={theme ? 'about-text  light' : 'about-text  dark'}>
                        After few years navigating along the Seine as a Captain,
                        i decided to change direction and focus on something i always wanted to do ! Web Development.<br></br> I started a 6 months course online <span className="about-js">full stack developper </span>
                        with <a className="oclock" href="https://oclock.io/formations/developpeur-web-fullstack-javascript" target="_blank"  rel="noreferrer"><span className="about-oclock"> O'Clock</span></a> school in order to learn the basics of the job.
                        </p>
                        <p className={theme ? 'about-text  light' : 'about-text  dark'}>
                        During this training we learned to work on Linux environment while handling Git with github, html/css and javascript <span className="about-text-hashtag">#OOP</span>  node.js with his framework Express <span className="about-text-hashtag">#SQL </span>
                        I have then specialized myself in React with Redux for a month.

                            {/* Durant cette formation nous avons appris à travailler sur  un environnement Linux tout en manipulant Git avec GitHub.
                            Apprentissage de HTML/CSS et javascript <span className="about-text-hashtag" >#POO</span>, découverte de node.js avec Express <span className="about-text-hashtag" >#SQL</span>,
                            puis passage sur le FrameWork  React pendant 1 mois avec notamment <span className="about-text-hashtag" >Redux</span> !
                 */}
                        </p>
                        <p className={theme ? "about-text light " : "about-text dark"}>
                        Our project to conclude the trainning, was conceived with a team of 4 during a month. We worked together in reals conditions with a deadline.
                        You can find more informations about our project <Link to="/works"><span className='about-text-link'>here</span></Link>
                        </p>
                    </div>
                </div>
                <div className="about-right">
                    <img className="about-anchor" src={logo} alt="Demi logo Alex" />
                </div>
            </section>
            
);
}
export default About;