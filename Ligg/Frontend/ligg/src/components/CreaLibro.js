import React from 'react';
import './CreaLibro.css'

const BASE_URL ='http://localhost:3005/api/v1',
HEADERS = {"Content-Type":"application/json"};

class CreaLibro extends React.Component{

    constructor(props){
      super(props)
      this.state = { nome:'',categoria:'', immagine:'', autore:''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const { titolo, categoria, immagine ,autore} = this.state
        event.preventDefault();
            return fetch(BASE_URL + '/libro/',{
            method:'post',
            headers:HEADERS,
            body:JSON.stringify({
                titolo:titolo,
                categoria:categoria,
                img:immagine,
                autore:autore
            })
            })
            .then(()=>{ 
                alert('Libro aggiunto al sistema');
                window.location.href = "http://localhost:3000/Amministratore";
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
            <label>Titolo:                    
                <input type="text" 
                required
                name='titolo'
                value={this.state.titolo}
                onChange={this.handleChange}
                placeholder="Titolo Libro"/>
            </label>
            <label>Autore:                    
                <input type="text" 
                required
                name='autore'
                value={this.state.autore}
                onChange={this.handleChange}
                placeholder="Autore del Libro"/>
            </label>
            <label>immagine:
                <input type="text" 
                name='immagine'
                value={this.state.immagine}
                onChange={this.handleChange}
                placeholder="copia il link di un'immagine del web"/>
            </label>
            <label>Categoria:
                <input type="text" 
                required
                name='categoria'
                value={this.state.categoria.toLowerCase()}
                onChange={this.handleChange}
                placeholder=" Fantasy / Fumetto / Romanzo / Autobiografia"/>
            </label>
            <button className='btncrea' type="submit">Crea</button>
        </form >
        </div>
    )
    }
}
export default CreaLibro;
  