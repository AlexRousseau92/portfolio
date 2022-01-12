import React, {useContext} from 'react';
import './style.scss';
import { ThemeContext } from "../../Components/Context";

const NotFound = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme ? "notFound light" : "notFound dark"}>
            <h1 className='notFound-title dark'>404 </h1>
            <h2 className='notFound-title-two dark'>Not Found ...</h2>
        </div>
    );
};

export default NotFound;