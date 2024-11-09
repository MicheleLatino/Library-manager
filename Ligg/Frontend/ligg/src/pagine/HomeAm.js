import React from 'react';
import ListaLibri from "../components/ListaLibri";
import NavbarAm from '../components/NavbarAm';
import '../App.css'



function HomeAm(){
    return(
        <>
        < NavbarAm/>
        <div className='intro'>
            <p className='desc'>Ecco i nostri Libri</p>
        </div>
        <div className='Libri'>
        <fieldset>
            <legend>Libri e loro possessore</legend>
        <div className='container'>
            <ListaLibri />
        </div>
        </fieldset>
        </div>
        </>
        );
    }
    export default HomeAm;