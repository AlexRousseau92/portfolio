import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer';
import data from '../../Data/data';
import ThemeContextProvider from '../Context';
import BtnToggle from '../BtnToggle';
import NotFound from '../../Pages/NotFound';
import '../../Styles/index.scss';

const App = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)
 
  const isOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  }
  
  return (
  
    <div className= "App ">
      <ThemeContextProvider>
        <BtnToggle />
     <Navbar menuOpen={menuIsOpen} toggleMenu={isOpen} routes={data} />
     <Routes>
    {
      data.map(({page, route, id})=> (
        <Route key={id}path={route} element={page} />
      ))
    }
    <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </ThemeContextProvider>
    </div>
  )
}
export default App;
