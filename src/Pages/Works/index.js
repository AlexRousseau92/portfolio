import React from 'react';
import './style.scss';

// Scss done
const Works = () => ( 
     
        <section className="container works">
                <div className="works-card ">
                    
                    <div className='works-card-left'>
                        <h1 className='works-card-title'>Trouv'ton vélo</h1>
                            <p className='works-card-description'>
                                 Lorem ipsum, dolor sit amet  nam enim sed nemo reprehenderit unde laudantium incidunt aspernatur quis voluptates. ! <br></br> C'est par ici ! 
                            </p>
                            <img className="works-card-img" src="../trouvtonbike.jpg" alt="plusieurs vélos couchés au sol" />
                        <div className="works-card-medias">
                                <i className="fab fa-github-square"></i>
                                <i className="fas fa-globe"></i>
                        </div>
                            
                    </div>
                </div>
        </section>
);

export default Works;

