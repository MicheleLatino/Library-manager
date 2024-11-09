import React from 'react';
import ListaLibriU from '../components/ListaLibriU';
import NavbarCat from '../components/NavbarCat';
import {useLocation } from 'react-router-dom';

function PCategoria(props) {
    const location = useLocation();
    const cate = location.state;
        return(
            <>
            <NavbarCat id={cate.id} userName={cate.userName}/>
            <div className='intro'>
            <p className='gen'>{cate.cat}</p>
            </div>
            <div className='container'>
            <ListaLibriU cat={cate.cat} id={cate.id} userName={cate.userName}/>
            </div>
            </>
        )
    }

export default PCategoria;