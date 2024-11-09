import React from 'react';
import libri from '../services/libri';
import Utente from './Utente';

class ListaUtenti extends React.Component{
    constructor(props){
        super(props);
        this.state = {utenti:[]}
        this.handleGet = this.handleGet.bind(this);
    }
    
    componentDidMount(){
        this.handleGet();
    }

    handleGet(){
        libri.getAllUtenti()
        .then(data => {
        this.setState({utenti:data.map(a =><Utente data={a}/>)}
        )}
    )
}

    render(){
        return(
            this.state.utenti.length > 0 ?(
                <>
                    {this.state.utenti}
                </>
                ) : <><div className='intro'>NESSUN ACCOUNT TROVATO</div></>)
    }
}

export default ListaUtenti;