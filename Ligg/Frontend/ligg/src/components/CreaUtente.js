import React from 'react';
import './CreaLibro.css'

const BASE_URL ='http://localhost:3005/api/v1',
HEADERS = {"Content-Type":"application/json"};

class CreaUtente extends React.Component{

    constructor(props){
      super(props)
      this.state = { userName:''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        const { userName} = this.state
        event.preventDefault();
            return fetch(BASE_URL + '/libro/utente/',{
            method:'post',
            headers:HEADERS,
            body:JSON.stringify({
                userName:userName,
            })
            })
            .then(()=>{ 
                window.location.reload(false);
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
            <label>Username:                    
                <input type="text" 
                required
                name='userName'
                value={this.state.userName}
                onChange={this.handleChange}
                placeholder="Username"/>
            </label>
            <button className='btncrea' type="submit" >Iscriviti</button>
        </form >
        </div>
    )
    }
}
export default CreaUtente;
  