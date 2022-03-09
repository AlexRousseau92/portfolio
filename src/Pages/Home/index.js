import React, { useContext } from 'react';
import { ThemeContext } from '../../Components/Context';
import logo from '../../Assets/Alex.png';
import './style.scss';


const Home = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <section className={theme ? "home light" : "home dark"}>
            <div className="home-left">
                <div className="home-description">
                    {theme}
                    <p className="home-description-text">Je suis<br></br><span className="home-description-span">Rousseau</span><br></br> <span className="home-description-span">Alexandre</span> <br></br> Développeur <br></br>React  Junior<br></br> </p>
                </div>
            </div>
            <div className="home-right">
                <img className="home-hero" src={logo} alt="Alex"></img>
            </div>
        </section>
    );
}
export default Home;