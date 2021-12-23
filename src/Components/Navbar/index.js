import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import logoBlue from '../../Assets/AR_logo_blue.png';
import logoWhite from '../../Assets/AR_logo_white.png';

const Navbar = ({menuOpen, toggleMenu, routes, themeLight}) => {

    if (themeLight) {
        themeLight && <Link to="/"><img className="navbar-logo"src={logoBlue} alt=" le logo d'Alex" /></Link>
    } else {
        themeLight && <Link to="/"><img className="navbar-logo"src={logoWhite} alt=" le logo d'Alex" /></Link>
    }

      return (

        <div className={menuOpen ? 'navbar show-nav' : 'navbar'}>

            {themeLight ? (
                <Link to="/"><img className="navbar-logo"src={logoBlue} alt=" le logo d'Alex" /></Link>
            ) : (
                <Link to="/"><img className="navbar-logo"src={logoWhite} alt=" le logo d'Alex" /></Link>
            )}
            <div  className="navbar-links">
                {
                    routes.map(({label, route, id, classCss})=> (
                        <NavLink key={id} onClick={toggleMenu} className={classCss}  to={route} > {label} </NavLink>
                    ))
                }
                
            </div>
            <button className="navbar-burger" onClick={toggleMenu}>
                <span className="navbar-bar"></span>
             </button>
        </div>
    );
}

export default Navbar;