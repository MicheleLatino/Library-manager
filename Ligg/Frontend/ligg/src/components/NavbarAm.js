import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function NavbarAm(){
    return(
        <>
        <div className='NavAdmin'>
        <ul>
            <li><Link to="/Amministratore">Libri</Link></li>
            <li><Link to="/CreaLibro">CreaLibro</Link></li>
            <li><Link to="/Prestiti">Prestiti</Link></li>
        </ul>
        </div>
        </>
    );
}

export default NavbarAm;