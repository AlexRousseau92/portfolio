import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer';
import data from '../../Data/data';
import '../../Styles/index.scss';

const App = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [themeIsLight, setThemeIsLight] = useState(true)

  const isOpen = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  const changeTheme = () => {
    setThemeIsLight(!themeIsLight)
  }

  return (

    <div className={themeIsLight ? "App " : "App dark"}>
   <Navbar menuOpen={menuIsOpen} toggleMenu={isOpen} routes={data} themeLight={themeIsLight} />
    <Routes>
   {
     data.map(({page, route, id})=> (
       <Route key={id}path={route} element={page} />
     ))
   }
     </Routes>
    <Footer themeLight={themeIsLight} toggleTheme={changeTheme}/>
    </div>
  )
}
export default App;
