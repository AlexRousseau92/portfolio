
import React, { useContext } from 'react';
import { ThemeContext } from '../../Components/Context';
import data from '../../Data/works';
import './style.scss';



const Works = () => {

    const { theme } = useContext(ThemeContext);

    return (

        <section className={theme ? 'works light' : 'works dark'}>
            {
                data.map(({ id, title, picture, link, description, dev }) => (
                    <div className={theme ? 'works-card light' : 'works-card dark'} key={id}>
                        <div className='works-card-part-img'>
                            <img src={picture} alt="capture d'ecran du projet" className='works-card-img' />
                            <div className='works-card-filter'>
                                <div className="works-card-links">
                                    <div className={theme ? 'works-card-reveal light' : 'works-card-reveal dark'}><a href={link} target="_blank" rel="noreferrer">Découvrir</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="works-card-description">
                            <h2 className='works-card-description-title'>{title}</h2>
                            <p className='works-card-description-text'>{description}</p>
                            {
                                dev && <div className={theme ? 'works-card-description-progress light' : 'works-card-description-progress dark'}>En cours de développement</div>
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
export default Works;
