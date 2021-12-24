import React, {useContext} from 'react';
import './style.scss';
import logo from '../../Assets/Alex.png';
import { ThemeContext } from '../../Components/Context';


// SCSS ok
const Home = () => {
    const {theme} = useContext(ThemeContext);
return (
    
    <section className={theme ? "container home light" : 'container home dark'}>
        <div className="home-left">
            <div className="home-description">
                {theme}
                <p className={theme ? 'home-description-text light' : 'home-description-text dark'}>I'm <br></br><span className='home-description-span'>Alexandre</span>  <br></br> <span className='home-description-span'>Rousseau</span> <br></br> a French <br></br> Full Stack  <br></br> Dev <br></br> Junior </p>
            </div>
        </div>
        <div className="home-right">
            <img className="home-hero" src={logo} alt="img d'Alex moitiée du visage"></img>
        </div>
    </section>
);
}
export default Home;