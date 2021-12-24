import React, {useContext} from 'react';
import './style.scss';
import { ThemeContext } from '../Context';
const BtnToggle = () => {

    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <div onClick={toggleTheme}className={theme ? 'btn-toggle light' : 'btn-toggle dark'}>
           <i className={theme ? "fas fa-moon" : "fas fa-sun"}></i>
        </div>
    );
};

export default BtnToggle;