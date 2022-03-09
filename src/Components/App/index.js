import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer';
import data from '../../Data/data';
import NotFound from '../../Pages/NotFound';
import ThemeContextProvider from '../Context';
import '../../Styles/index.scss';
import { ThemeProvider, createTheme } from '@material-ui/core';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1a1d38',
      light: '#f0f',
    },
    secondary: {
      main: '#f3f3f3;',
    }
  },
});

const App = () => {

  // State du menu format mobile 
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  // Modification du state au clique sur le switch 
  const isOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (

    <div className="App ">
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <Navbar menuOpen={menuIsOpen} toggleMenu={isOpen} routes={data} />
          <Routes>
            {
              data.map(({ page, route, id }) => (
                <Route key={id} path={route} element={page} />
              ))
            }
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </ThemeContextProvider>
    </div>
  )
}
export default App;
