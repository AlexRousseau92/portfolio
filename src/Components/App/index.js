import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer';
import data from '../../Data/data';
import '../../Styles/index.scss';

const App = () => {

  const [burger, setBurger] = useState(false)

  const toggleBurger = () => {
    setBurger(!burger)
  }

  return (
    <div className='App'>
   <Navbar menuOpen={burger} toggleMenu={toggleBurger} routes={data}/>
    <Routes>
   {
     data.map(({page, route, id})=> (
       <Route key={id}path={route} element={page} />
     ))
   }
     </Routes>
    <Footer />
    </div>
  )
}
export default App;
