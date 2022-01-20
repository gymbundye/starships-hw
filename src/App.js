import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Starship from './Components/Starship';
import Nav from './Components/Nav';

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
    <div className="App">
      <Routes>
      <Route path="AboutUs" element={<AboutUs/>}/>
      <Route path="ContactUs" element={<ContactUs/>}/>
      <Route path="Starship" element={<Starship/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
