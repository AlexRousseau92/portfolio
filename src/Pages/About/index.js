import React from 'react';
import './style.scss'
import logo from '../../Assets/Anchor.svg';
// SCSS DONE 
const About = () => (
    
            <section className="container about">
                <div className="about-left">
                    <div className="about-description">
                        <h1 className='about-title'>Hello,</h1><br></br>
                        <p className='about-text'> Après quelques années, <br></br>de navigation sur la Seine en tant que capitaine de bateau,
                            j'ai décidé de changer complètement de cap et de me tourner vers ce qui m'a toujours attiré
                            le développement web. J'ai suivi une formation de 6 mois <span className="about-js">"Développeur Web FullStack Javascript"</span> avec l'école
                            <a className="oclock" href="https://oclock.io" target="_blank"  rel="noreferrer"><span className="about-oclock"> O'Clock</span></a> afin d'apprendre les <span className='about-base'>"bases du métier"</span>.
                        </p>
                            <ul className='about-skills'>
                                <li className='about-skill'><i class="fab fa-html5"></i></li>
                                <li className='about-skill'><i class="fab fa-css3-alt"></i></li>
                                <li className='about-skill'><i class="fab fa-js"></i></li>
                                <li className='about-skill'><i class="fab fa-react"></i></li>
                                <li className='about-skill'><i class="fab fa-node"></i></li>
                            </ul>
                    </div>
                </div>
                <div className="about-right">
                    <img className="about-anchor" src={logo} alt="Demi logo Alex" />
                </div>
            </section>
            
);

export default About;