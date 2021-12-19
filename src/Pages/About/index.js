import React from 'react';
import './style.scss'
// SCSS DONE 
const About = () => (
    
            <section className="container about">
                <div className="about-left">
                    <div className="about-description">
                        <h1 className='about-title'>Hey,</h1><br></br>
                        <p className='about-text'> Après quelques années, <br></br>de navigation sur la Seine en tant que capitaine de bateau,
                            j'ai décidé de changer complètement de cap et de me tourner vers ce qui m'a toujours attiré
                            le développement web. J'ai suivi une formation de 6 mois <span className="about-js">"Développeur Web FullStack Javascript"</span> avec l'école
                            <a className="oclock" href="https://oclock.io" target="_blank"  rel="noreferrer"><span className="about-oclock"> O'Clock</span></a> afin d'apprendre les <span className='about-base'>"bases du métier"</span>.
                        </p>
                    </div>
                </div>
                <div className="about-right">
                    <img className="about-anchor" src="./media/Anchor.svg" alt="Demi logo Alex" />
                </div>
            </section>
);

export default About;