import '../App.css'
import {Link, useLocation } from 'react-router-dom';
import DescUtPers from '../components/DescUtPers';
import ListaPrestitiU from '../components/ListaPrestitiU';
import ListaRichUt from '../components/ListaRichUt';


function HomeUtentePers(){
    const location = useLocation();
    const utId = location.state;
    return(
        <>
        <div></div>
        <div className='NavCat'>
        <ul>
            <li><Link to="/PCategoria" state={{cat:"fantasy", id:utId.id ,userName:utId.userName}} >Fantasy</Link></li>
            <li><Link to="/PCategoria" state={{cat:"romanzo", id:utId.id ,userName:utId.userName}} >Romanzo</Link></li>
            <li><Link to="/PCategoria" state={{cat:"fumetto", id:utId.id ,userName:utId.userName}} >Fumetto</Link></li>
            <li><Link to="/PCategoria" state={{cat:"autobiografia", id:utId.id ,userName:utId.userName}} >Autobiografia</Link></li>
        </ul>
        </div>
        <div className='container'>
            <DescUtPers ut={utId.id}/>
        </div>
            <fieldset >
                <legend>I tuoi Libri in prestito</legend>
                <div className='container'>
                    <ListaPrestitiU id={utId.id}/>
                </div>
            </fieldset>
            <fieldset >
                <legend>Le tue richieste</legend>
                <div className='container'>
                    <ListaRichUt id={utId.id}/>
                </div>
            </fieldset>
        </>)
        }

export default HomeUtentePers;