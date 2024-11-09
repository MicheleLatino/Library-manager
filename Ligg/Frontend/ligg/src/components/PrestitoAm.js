import React from 'react';
import libri from '../services/libri';
import './Card.css'

class PrestitoAm extends React.Component{
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
                            <p>da: {this.props.data.da}</p>
                            <p>a: {this.props.data.a}</p>
                            <p><b>Richiedente</b>: {this.props.data.userNameRich}</p>
                            <p><b>Id richiedente</b>: {this.props.data.richiedenteObj}</p>
                            <button className="appr" onClick={()=> libri.approvaPrest(this.props.data._id).then(()=>window.location.reload(false))}>Approva</button>
                            <button className="noAppr" onClick={()=> libri.NoApprPrestito(this.props.data._id).then(()=>window.location.reload(false))}>No</button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
export default PrestitoAm;