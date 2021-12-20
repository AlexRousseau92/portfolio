import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import logo from '../../Assets/AR_logo_blue.png';

const Navbar = ({menuOpen, toggleMenu, routes}) => {

      return (

        <div className={menuOpen ? 'navbar show-nav' : 'navbar'}>
            <Link to="/"><img className="navbar-logo"src={logo} alt=" le logo d'Alex" /></Link>
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