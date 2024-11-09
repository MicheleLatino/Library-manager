import React from 'react';
import { useState } from 'react';
import img from '../Lente.png';
import ListaLibriPrest from '../components/ListaLibriPrest';
import ListaPrestiti from '../components/ListaPrestiti';
import NavbarAm from '../components/NavbarAm';
import { Link } from 'react-router-dom';

function PPrestiti(){
    const [utId, setUtId] = useState('');

    const handleChange = event => {
        event.preventDefault();
        setUtId(event.target.value);
    }

    return(
        <>
        <NavbarAm/>
        <div className='intro'>
            <p className='desc'>Valuta le richieste di presa in prestito di un libro</p>
        </div>
        <fieldset>
            <legend>Prestiti da Valutare</legend>
        <div className='container'>
            <ListaPrestiti />
        </div>
        </fieldset>
        <fieldset>
            <legend>Libri in prestito</legend>
        <div className='container'>
            <ListaLibriPrest />
        </div>
        </fieldset>
        <div className='src'>
        <fieldset>
            <legend>Cerca Prestiti Per Utente</legend>
            <div className='intro'>
            <div className='container'>
            <input
                type="text"
                id="utId"
                name="utId"
                placeholder='Inserisci Id Utente'
                onChange={handleChange}
                value={utId}
            />
        <Link to="/PagUtAm" className='srcImg'  state={utId}><img src={img} alt="..."/></Link>
        </div>
        </div>
        </fieldset>
        </div>

        </>
    )
}
export default PPrestiti;