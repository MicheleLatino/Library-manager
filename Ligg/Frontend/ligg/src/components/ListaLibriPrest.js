import React from 'react';
import libro from '../services/libri';
import Libro from './Libro';

class ListaLibriPrest extends React.Component{
    constructor(props){
        super(props);
        this.state = {libri:[]}
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount(){
        this.handleGet();
    }

    handleGet(){
        libro.getLibriPrestati()
        .then(data => {
        this.setState({libri:data.map(a =><Libro data={a}/>)}
        )
        
    }
    )
}

    render(){
        
            return(
                
            this.state.libri.length > 0 ? (
                <>
                    {this.state.libri}
                </>
                ) : <><div className='intro'>NESSUN BRANO TROVATO</div></>
        )
    }

}

export default ListaLibriPrest;