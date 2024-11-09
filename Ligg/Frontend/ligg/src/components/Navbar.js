import React from 'react';
import img from '../LogoMio.png';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <>
        
        <ul>
            <li className='liimmagine' style={{float:"left"} }><Link to ="/"> <img src={img} alt="..." className='immagine'/></Link></li>
        </ul>
        </>
    );
}

export default Navbar;