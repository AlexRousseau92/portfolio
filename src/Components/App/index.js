import '../../Styles/index.scss';
import Navbar from '../Navbar'
import data from '../../Data/data';

const App = () => {

  return (
    <>
    <Navbar routes={data}/>
    </>
  )
}
export default App;
