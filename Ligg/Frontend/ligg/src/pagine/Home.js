import React from 'react';
import { Link } from 'react-router-dom';
import "../components/Card.css" 

function Home(){
    return(
        <>
        <div className="intro">
        <p className='desc'>Benvenuti in Ligg</p>
        </div>
        <fieldset>
            <legend>Accedi come</legend>
        <div className='container'>
            <div className='card'>
                <div className='cardBody'>
                    <img src="https://thumbs.dreamstime.com/b/open-book-icon-open-book-icon-yellow-background-100389342.jpg"  alt=""/>
                    <h3>Utente</h3>
                    <p> Esplora e prenota i libri a disposizione</p>
                    <button className='btn'><Link to="/Utente">Accedi</Link></button>
                </div>
            </div>
            <div className='card'>
                <div className='cardBody'>
                    <img src="https://media.istockphoto.com/vectors/computer-monitor-icon-with-long-shadow-on-textured-yellow-background-vector-id1394645224?b=1&k=20&m=1394645224&s=170667a&w=0&h=SZkdrqrv9lIcGT4J4H9hR3wcqjjJkqIW-fHEXIqmGE8="  alt=""/>
                    <h3>Amministratore</h3>
                    <p>Gestisci libri e prenotazioni</p>
                    <button className="btn"><Link to="/Amministratore">Accedi</Link></button>
                </div>
            </div>                   
        </div>
        </fieldset>
        </>
        );
}
export default Home;