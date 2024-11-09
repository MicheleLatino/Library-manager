import React from 'react';
import libro from '../services/libri';
import LibroU from './LibroU';

class ListaLibri extends React.Component{
    constructor(props){
        super(props);
        this.state = {libri:[]}
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount(){
        this.handleGet();
    }

    handleGet(){
        libro.getAllPerCat(this.props.cat)
        .then(data => {
        this.setState({libri:data.map(a =><LibroU data={a} idU={this.props.id} userName={this.props.userName}/>)}
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
                ) : <><div className='intro'>OPS! Qui non c'è niente.<br></br><br></br> Hai scelto una categoria?</div></>
        )
    }

}

export default ListaLibri;