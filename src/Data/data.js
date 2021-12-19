import Home from '../Pages/Home';
import About from '../Pages/About';
import Works from '../Pages/Works';
import Contact from '../Pages/Contact';

const data = [
    { 
      label: 'Home',  
      route: '/',
      page: <Home />,
      id: 1,
      classCss: 'navbar-link first',
    },
    {
      label: 'About',  
      route: '/about',
      page: <About />,
      id: 2,
      classCss: 'navbar-link second',
    },
    {
      label: 'Works',
      route: '/works',
      page: <Works />,
      id: 3,
      classCss: 'navbar-link third',
    },
    {
      label: 'Contact',  
      route: '/contact',
      page: <Contact />,
      id: 4,
      classCss: 'navbar-link four',
    },
];
  
  export default data;