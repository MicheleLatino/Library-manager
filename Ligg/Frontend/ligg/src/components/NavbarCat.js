import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function NavbarCat(props){    

    function refreshPage() {
        window.location.reload(false);
      }


    return(
        <>
        <div className='NavCat'>
        <ul>
            <li><Link to="/PCategoria" state={{cat:"fantasy", id:props.id ,userName:props.userName}} onClick={refreshPage}>Fantasy</Link></li>
            <li><Link to="/PCategoria" state={{cat:"romanzo", id:props.id ,userName:props.userName}} onClick={refreshPage}>Romanzo</Link></li>
            <li><Link to="/PCategoria" state={{cat:"fumetto", id:props.id ,userName:props.userName}} onClick={refreshPage}>Fumetto</Link></li>
            <li><Link to="/PCategoria" state={{cat:"autobiografia", id:props.id ,userName:props.userName}} onClick={refreshPage}>Autobiografia</Link></li>
        </ul>
        </div>
        </>
    );
}

export default NavbarCat;