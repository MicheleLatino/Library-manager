import React from 'react';
import prestito from '../services/libri';
import PrestitoUt from './PrestitoUt';

class ListaPrestiti extends React.Component{
    constructor(props){
        super(props);
        this.state = {prestiti:[]}
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount(){
        this.handleGet();
    }

    handleGet(){
        prestito.getPrestUt(this.props.id)
        .then(data => {
        this.setState({prestiti:data.map(a =><PrestitoUt data={a}/>)}
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
                ) : <><div className='intro'>NESSUN PRESTITO TROVATO</div></>
        )
    }

}

export default ListaPrestiti;