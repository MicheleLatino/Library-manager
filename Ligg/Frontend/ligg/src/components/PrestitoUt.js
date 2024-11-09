import React from 'react';
import './Card.css'

class PrestitoUt extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='cont'>
                <div className='card'>
                        <div className='cardBody'>
                            <div className='cardTitle'>   
                            <p><b>{this.props.data.titolo}</b></p> 
                            <img className='cardImage' src={this.props.data.img} alt="..."/>
                            <p>By :<b>{this.props.data.autore}</b></p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default PrestitoUt;