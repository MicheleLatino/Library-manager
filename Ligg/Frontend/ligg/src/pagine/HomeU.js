import React from 'react';
import CreaUtente from '../components/CreaUtente';
import ListaUtenti from '../components/ListaUtenti';
import '../App.css'




function HomeU(){
    return(
        <>
        <div className='intro'>
            <p className='desc'>Benvenuto</p>
        </div>
        <fieldset>
            <legend>Iscriviti</legend>
        <div className='container'>
            <CreaUtente />
        </div>
        </fieldset>
        <fieldset>
            <legend>Già Iscritto? Effettua l'accesso</legend>
        <div className='container'>
            <ListaUtenti/>
        </div>
        </fieldset>
        </>
        );
    }
    export default HomeU;