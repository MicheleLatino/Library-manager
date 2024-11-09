import React from 'react';
import './Card.css'

class Libro extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='cont'>
                <div className='card'>
                        <div className='cardBody'>
                            <img className='cardImage' src={this.props.data.img} alt="..."/>
                            <div className='cardTitle'>    
                            <h3>{this.props.data.titolo ? this.props.data.titolo:<>SENZA titolo</>}</h3>
                            <p>{this.props.data.categoria}</p>
                            <p>By <b>{this.props.data.autore}</b></p>
                            <p><b>Possessore</b>: {this.props.data.possessore}</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default Libro;