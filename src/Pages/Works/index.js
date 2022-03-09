import React, { useContext } from 'react';
import { ThemeContext } from '../../Components/Context';
import data from '../../Data/works';
import './style.scss';


const Works = () => {

    const { theme } = useContext(ThemeContext);

    return (

        <section className={theme ? 'works light' : 'works dark'}>
            <div className='works-cards'>
                {
                    data.map(({ id, title, description, link, git }) => (
                        <div key={id} className={`works-card ${id}`}>
                            <h1 className='works-card-title'>{title}</h1>
                            <p className='works-card-description'>{description}</p>
                            <div className='works-card-medias'>
                                <a href={link} target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
                                <a href={git} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Works;
