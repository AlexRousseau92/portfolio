import React, { useContext } from 'react';
import { ThemeContext } from "../../Components/Context";
import './style.scss';


const NotFound = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme ? "notFound light" : "notFound dark"}>
            <h1 className='notFound-title '>404 </h1>
            <h2 className='notFound-title-two '>Cette page n'éxiste pas</h2>
        </div>
    );
};

export default NotFound;