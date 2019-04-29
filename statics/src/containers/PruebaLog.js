import React, { Component } from "react";
import { loguearUsuario } from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Redirect
} from "react-router-dom";

class PruebaLog extends Component {
  constructor (props){
    super(props);
    this.state = {
      respuestaLog: ''
    };
    this.pruebaLogin = this.pruebaLogin.bind(this);

  }

  static propTypes = {
  }

  render() {
    
    let mensaje;
    if(this.state.respuestaLog == "OK")
        mensaje =  <h3 for="usr">Login OK!!!!</h3>
    else if (this.state.respuestaLog == "ERROR")
        mensaje =  <h3 for="usr">Sin Login...</h3>
    else if (this.state.respuestaLog == "")
        mensaje =  <h3 for="usr">Compruebe si está logueado</h3>

    return (
      <div class="center">
        <button onClick={this.pruebaLogin} class="btn btn-primary">Probar LOG</button>
        <br />
        {mensaje}
      </div>
      
    );
  }

  pruebaLogin = () => {
    console.log("Alta de Usuario");
    fetch('http://localhost:3000/pruebaLog/')
    .then(response => 
      { 
        if (response.status === 200)
        {
          this.props.dispatch(loguearUsuario());
          this.setState({respuestaLog: "OK"});
        }
        else  if (response.status === 401)
        {
          this.setState({respuestaLog: "ERROR"});
        }
      }
    )
    .catch(error => console.error('Error:', error));
  };
}

export default connect()(PruebaLog)