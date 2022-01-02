import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import logoBlue from '../../Assets/AR_logo_blue.png';
import logoWhite from '../../Assets/AR_logo_white.png';
import { ThemeContext } from "../Context";

const Navbar = ({menuOpen, toggleMenu, routes }) => {

    const light = <Link to="/"><img className="navbar-logo"src={logoBlue} alt=" le logo d'Alex" /></Link>;
    const dark = <Link to="/"><img className="navbar-logo"src={logoWhite} alt=" le logo d'Alex" /></Link>;
    const {theme} = useContext(ThemeContext)

      return (

        <header className={theme ? 'header light' : 'header dark'}>
        <div className={menuOpen ? 'navbar show-nav' : 'navbar '}>

            {theme ? light : dark}

            <div  className={theme ? "navbar-links light" : "navbar-links dark"}>
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
        </header>
    );
}

export default Navbar;