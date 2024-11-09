import React from 'react';
import prestito from '../services/libri';
import PrestitoAm from './PrestitoAm';

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
        prestito.getAllPrest()
        .then(data => {
        this.setState({prestiti:data.map(a =><PrestitoAm data={a}/>)}
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

export default ListaPrestiti;