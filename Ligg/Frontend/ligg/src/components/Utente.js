import React from 'react';
import { Link} from 'react-router-dom';
import './Card.css'

class Utente extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <>
            <div className='cont'>
                    <div className='card'>
                        <div className='cardBody'>  
                            <h3>{this.props.data.userName ? this.props.data.userName:<>SENZA NOME</>}</h3>
                            <button className="btn" ><Link to={'/HomeUtentePers'}  state={{id:this.props.data._id,userName:this.props.data.userName}} >ACCEDI</Link></button>
                        </div>
                    </div>
            </div>
        </>
        )
    }
}
export default Utente;