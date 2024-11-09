import React from 'react';
import './Card.css'

class UtentePers extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            <div className='intro'>
                <p className='desc'>Bentornato {this.props.data.userName}!</p>
                <p>Scegli un genere per iniziare</p>
            </div>
            </div>
        )
    }
}
export default UtentePers;