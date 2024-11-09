import './App.css';
import Navbar from './components/Navbar';
import Home from "./pagine/Home";
import HomeU from "./pagine/HomeU";
import HomeAm from "./pagine/HomeAm";
import CreaLibro from "./pagine/PCreaLibro";
import PPrestiti from "./pagine/PPrestiti";
import HomeUtentePers from './pagine/HomeUtentePers';
import PCategoria from './pagine/PCategoria';
import Prenotazione from './pagine/Prenotazione';
import PagUtAm from './pagine/PagUtAm';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='wrapper'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="Utente" element={<HomeU />} />
              <Route exact path="Amministratore" element={<HomeAm />} />
              <Route exact path="CreaLibro" element={<CreaLibro />} />
              <Route exact path="Prestiti" element={<PPrestiti />} />
              <Route exact path="HomeUtentePers" element={<HomeUtentePers />} />
              <Route exact path="PCategoria" element={<PCategoria />} />
              <Route exact path="Prenotazione" element={<Prenotazione />} />
              <Route exact path="PPrestiti" element={<PPrestiti />} />
              <Route exact path="PagUtAm" element={<PagUtAm />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
