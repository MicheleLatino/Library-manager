import React from 'react';
import './CreaLibro.css'

const BASE_URL ='http://localhost:3005/api/v1',
HEADERS = {"Content-Type":"application/json"};

class Prenotazione extends React.Component{

    constructor(props){
      super(props)
      this.state = { libroObj:`${this.props.libroObj.idL}`, da:'', a:'',richiedenteObj:`${this.props.libroObj.idU}`, titolo:`${this.props.libroObj.tit}`, img:`${this.props.libroObj.img}`,userNameRich:`${this.props.libroObj.userName}`}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const { libroObj , da , a , richiedenteObj , titolo , img , userNameRich} = this.state
        event.preventDefault();
            return fetch(BASE_URL + '/prestito/'+libroObj,{
            method:'post',
            headers:HEADERS,
            body:JSON.stringify({
                libroObj:libroObj,
                da:da,
                a:a,
                richiedenteObj:richiedenteObj,
                titolo:titolo,
                img:img,
                userNameRich:userNameRich
            })
            })
            .then(()=>{ 
                alert("Richiesta riuscita");
        })
        }

    handleChange(event){
        this.setState({
          [event.target.name] : event.target.value
        })
      }

    render(){
    return(
        <div className='formCont'>
        <form  onSubmit={this.handleSubmit}>
            <label>Da:                    
                <input type="text" 
                required
                name='da'
                value={this.state.da}
                onChange={this.handleChange}
                placeholder="Inserisci data inizio"/>
            </label>
            <label>A:                    
                <input type="text" 
                required
                name='a'
                value={this.state.a}
                onChange={this.handleChange}
                placeholder="Inserisci data fine"/>
            </label>
            <button className='btncrea' type="submit">CONFERMA</button>
        </form >
        </div>
    )
    }
}
export default Prenotazione;
  