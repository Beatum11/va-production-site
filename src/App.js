import './App.css';
import Menu from './modules/menuModules/Menu';
import MainPart from './modules/MainPart';
import AboutPart from './modules/AboutPart';
import PortfolioPart from './modules/PortfolioPart';
import Contacts from './modules/Contacts';
import Footer from './modules/Footer';

function App() {
  return (
    <div>
      <Menu/>
      <MainPart/>
      <AboutPart/>
      <PortfolioPart/>
      <Contacts/>
      <Footer/>
    </div>
    
  );
}

export default App;
