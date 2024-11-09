import '../App.css'
import DescUtPersAm from '../components/DescUtPersAm';
import ListaPrestitiU from '../components/ListaPrestitiU';
import NavbarAm from '../components/NavbarAm';
import { useLocation } from 'react-router-dom';


function PagUtAm(){
    const location = useLocation();
    const utId = location.state;
    return(
        <>
        <div></div>
        <NavbarAm />
        <div className='container'>
            <DescUtPersAm ut={utId}/>
        </div>
            <fieldset >
                <legend>Libri in prestito</legend>
                <div className='container'>
                    <ListaPrestitiU id={utId}/>
                </div>
            </fieldset>
        <div >
        </div>
        </>)
        }

export default PagUtAm;