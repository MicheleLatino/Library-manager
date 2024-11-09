import React from 'react';
import './Card.css'

class UtentePAm extends React.Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
            <div className='intro'>
                <p className='desc'>{this.props.data.userName}</p>
                <p className='desc'>ID :<b>{this.props.data._id}</b></p>
            </div>
            </div>
        )
    }
}
export default UtentePAm;