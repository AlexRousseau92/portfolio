import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import logoBlue from '../../Assets/AR_logo_blue.png';
import logoWhite from '../../Assets/AR_logo_white.png';
import { ThemeContext } from "../Context";
import PropTypes from 'prop-types';

const Navbar = ({menuOpen, toggleMenu, routes }) => {

    const light = <Link to="/" ><img className="navbar-logo"src={logoBlue} alt=" Alex's blue logo" /></Link>;
    const dark = <Link to="/" ><img className="navbar-logo"src={logoWhite} alt=" Alex's white logo" /></Link>;
    const {theme} = useContext(ThemeContext)

      return (
          <header className={theme ? 'header light' : 'header dark'}>
              <div className={menuOpen ? 'navbar show-nav' : 'navbar '}>
                  {theme ? light : dark}
                  <div className={theme ? "navbar-links light" : "navbar-links dark"}>
                      {
                          routes.map(({ label, route, id, classCss }) => (
                              <NavLink key={id} onClick={toggleMenu} className={classCss} to={route} > {label} </NavLink>
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
Navbar.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        classCss: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
    })).isRequired
}
export default Navbar;