import React from 'react';
import NavbarAm from '../components/NavbarAm';
import CreaLibro from '../components/CreaLibro';

function PCreaLibro(){
    return(
        <>
        < NavbarAm/>
        <div className='intro'>
            <p className='desc'>Aggiungi un nuovo libro</p>
        </div>
        <div className='crea'>
        <fieldset>
            <legend>Aggiungi Libro</legend>
            < CreaLibro/>
        </fieldset>
        </div>
        </>
    )
}
export default PCreaLibro;