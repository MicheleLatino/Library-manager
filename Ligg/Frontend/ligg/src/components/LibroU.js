import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css'

class LibroU extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        return(
            this.props.data.stato==="Disponibile" ? (
            <div className='cont'>
                <div className='card'>
                        <div className='cardBody'>
                            <img className='cardImage' src={this.props.data.img} alt="..."/>
                            <div className='cardTitle'>    
                            <h3>{this.props.data.titolo ? this.props.data.titolo:<>SENZA titolo</>}</h3>
                            <p>{this.props.data.categoria}</p>
                            <p>By <b>{this.props.data.autore}</b></p>
                            <p><b>{this.props.data.stato}</b></p>
                            <Link className='btn' to={"/Prenotazione"} state={{ idL:this.props.data._id , tit:this.props.data.titolo , img:this.props.data.img , idU:this.props.idU , userName:this.props.userName}}>Prenota</Link>
                            </div>
                        </div>
                </div>
            </div>
        ): <>
            <div className='cont'>
                <div className='card'>
                        <div className='cardBody'>
                            <img className='cardImage' src={this.props.data.img} alt="..."/>
                            <div className='cardTitle'>    
                            <h3>{this.props.data.titolo ? this.props.data.titolo:<>SENZA titolo</>}</h3>
                            <p>{this.props.data.categoria}</p>
                            <p>By <b>{this.props.data.autore}</b></p>
                            <p><b>{this.props.data.stato}</b></p>
                            </div>
                        </div>
                </div>
            </div>
        </>
        )
    }
}
export default LibroU;