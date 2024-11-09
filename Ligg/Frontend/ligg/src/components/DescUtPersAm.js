import React from 'react';
import libri from '../services/libri';
import UtentePAm from './UtentePAm';


class DescUtPersAm  extends React.Component{
    constructor(props){
        super(props);
        this.state = {datiA:[]};
        this.handleGet = this.handleGet.bind(this);
    }

    componentDidMount(){
        this.handleGet();
    }


handleGet(){
    libri.getOne(this.props.ut)
    .then(ut => <UtentePAm data={ut} />)
    .then(data => { 
        this.setState({datiA:data})
        console.log(this.state.datiA)}
        )
    }


    render(){
        return(
                <>
                    {this.state.datiA}
                </>
                )
    }
}
export default DescUtPersAm ;