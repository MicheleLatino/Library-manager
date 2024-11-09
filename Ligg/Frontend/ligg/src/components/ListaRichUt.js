import React from 'react';
import prestito from '../services/libri';
import PrestUtAttesa from './PrestUtAttesa';

class ListaRichUt extends React.Component{
    constructor(props){
        super(props);
        this.state = {prestiti:[]}
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount(){
        this.handleGet();
    }

    handleGet(){
        prestito.getRichPUt(this.props.id)
        .then(data => {
        this.setState({prestiti:data.map(a =><PrestUtAttesa data={a}/>)}
        )
        
    }
    )
}

    render(){
        
            return(
                
            this.state.prestiti.length > 0 ? (
                <>
                    {this.state.prestiti}
                </>
                ) : <><div className='intro'>NESSUNA RICHIESTA TROVATA</div></>
        )
    }

}

export default ListaRichUt;