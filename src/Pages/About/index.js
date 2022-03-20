import React, { useContext } from 'react';
import { ThemeContext } from "../../Components/Context";
import logoOne from '../../Assets/Anchor_blue.svg';
import logoTwo from '../../Assets/Anchor_white.svg'
import './style.scss'

const About = () => {

    const light = logoOne;
    const dark = logoTwo;

    const { theme } = useContext(ThemeContext)
    return (

        <section className={theme ? "about light" : "about dark"}>
            <div className="about-left">
                <div className="about-description">
                    <h1 className="about-title light">Hello</h1>
                    <div className={theme ? "about-ligne light" : "about-ligne dark"}></div>
                    <p className='about-text'>
                        Après quelques années de navigation sur la seine en tant que Capitaine de bateaux, j'ai décidé de changer complétement de cap et de tourner vers ce qui m'a toujours attiré le développement web !
                        J'ai suivi une formation de 6 mois de <span className="about-js">Développeur web FullStack</span> avec l'école <a className="oclock" href="https://oclock.io/formations/developpeur-web-fullstack-javascript" target="_blank" rel="noreferrer"><span className="about-oclock"> O'Clock </span></a>
                        dans le but d'apprendre les "bases" du métier.
                    </p>
                    <p className="about-text">
                        Durant cette formation nous avons appris à travailler sous l'environment Linux tout en manipulant Git avec GitHub ainsi que le HTML/CSS/Javascript et node.js avec son framework Express.
                        Pendant 1 mois j'ai appris les bases de React avec redux.<br></br>
                        <span className="about-text-hashtag">#POO #SQL #API #AJAX</span>
                    </p>
                    <p className="about-text ">
                        Notre projet de fin de formation a été concu par une équipe de 4 personnes durant 1 mois réparti en 4 sprint.
                        J'ai développé la partie front de l'application " Trouv ton vélo".
                    </p>
                </div>
            </div>
            <div className="about-right">
                {
                    theme ? <img className="about-anchor" src={light} alt="Demi logo bleu" /> : <img className="about-anchor" src={dark} alt="demi logo blanc" />
                }
            </div>
        </section>

    );
}
export default About;