import React, {useContext} from 'react';
import { ThemeContext } from '../../Components/Context';
import './style.scss';
import data from '../../Data/works';


const Works = () => {
    
    const {theme} = useContext(ThemeContext);

    return ( 

    <section className={theme ? "container works light" : "container works dark "} >
        <div className="works-card ">
            {
                data.map(({ id, title, description, link, img, alt }) => (
                    <div key={id} className='works-card-left'>
                        <h1 className='works-card-title'>{title}</h1>
                        <img className="works-card-img" src={img} alt={alt} />
                        <p className='works-card-description '>
                            {description}
                        </p>
                        <div className='works-card-medias'>
                            <a href={link} target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
);
}
export default Works;
