import React from 'react';
import Pprenotazione from '../components/Prenotazione';
import { useLocation } from 'react-router-dom';

function Prenotazione(){
    const location = useLocation();
    const libro = location.state;
    return(
        <>
        <div className='intro'>
            <p className='desc'>Definisci da quando a quando</p>
        </div>
        <div className='crea'>
        <fieldset>
            <legend>Periodo Prestito</legend>
            <Pprenotazione libroObj={libro}/>
        </fieldset>
        </div>
        </>
    )
}
export default Prenotazione;