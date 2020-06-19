import React from 'react';
import Home from './components/Home';
import Kontakt from './components/Kontakt';
import Services from './components/Services';
import Partner from './components/Partner';
import ÜberUns from './components/ÜberUns';
import Footer from './components/Footer';
import Rating from './components/Rating';
import Versicherungen from './components/Versicherungen';
import MapContainer from './components/MapContainer';

function App() {
  return (
    <div className="App">
  
      <Home/>
      {/**<Versicherungen/> */}
      <Partner/>
      <Services/>
      <ÜberUns/>
      <Kontakt/>
      {/**<MapContainer/> */}
      <Rating/>
      {/**<Footer/> */}
        
     
       
    </div>
  );
}

export default App;
