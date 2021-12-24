import React, {useContext} from 'react';
import './style.scss';
import img from '../../Assets/trouvtonbike.jpg';
import { ThemeContext } from '../../Components/Context';

// Scss done
const Works = () => {
    const {theme} = useContext(ThemeContext);
return ( 
     
        <section className={theme ? "container works light" : "container works dark" }>
                <div className="works-card ">
                    <div className='works-card-left'>
                        <h1 className={theme ? 'works-card-title light' :'works-card-title dark'}>Trouv'ton vélo</h1>
                            <p className={theme ? 'works-card-description light' : 'works-card-description dark'}>
                                 Lorem ipsum, dolor sit amet  nam enim sed nemo reprehenderit unde laudantium incidunt aspernatur quis voluptates. ! <br></br> C'est par ici ! 
                            </p>
                            <img className="works-card-img" src={img} alt="plusieurs vélos couchés au sol" />
                        <div className={theme ? 'works-card-medias light' : 'works-card-medias dark'}>
                                <i className="fab fa-github-square"></i>
                                <i className="fas fa-globe"></i>
                        </div>
                            
                    </div>
                </div>
        </section>
);
}
export default Works;

