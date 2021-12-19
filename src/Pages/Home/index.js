import React from 'react';
import './style.scss';
// SCSS ok
const Home = () => (
    
    <section className="container home">
        <div className="home-left">
            <div className="home-description">
                <p className='home-description-text'>I'm <br></br><span className='home-description-span'>Alexandre</span>  <br></br> <span className='home-description-span'>Rousseau</span> <br></br> a French <br></br> Full Stack  <br></br> Dev <br></br> Junior </p>
            </div>
        </div>
        <div className="home-right">
            <img className="home-hero" src="./media/Alex.png" alt="img d'Alex moitiée du visage"></img>
        </div>
    </section>
);

export default Home;