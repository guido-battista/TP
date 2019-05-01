import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Redirect
} from "react-router-dom";

class ConsultarVenues extends Component {
  constructor (props){
    super(props);
    this.state = {
      latitud: '',
      longitud: '',
      texto: ''
    };
    this.buscarVenues = this.buscarVenues.bind(this);
    this.handleLatitudChange = this.handleLatitudChange.bind(this);
    this.handleLongitudChange = this.handleLongitudChange.bind(this);
    this.handleTextoChange = this.handleTextoChange.bind(this);

  }

  //static propTypes = {
  //  latitud:  PropTypes.string.isRequired,
  //  longitud: PropTypes.string.isRequired,
  //  texto: PropTypes.func.isRequired
  //}

  handleLatitudChange(event) {
    this.setState({latitud: event.target.value});
  }

  handleLongitudChange(event) {
    this.setState({longitud: event.target.value});
  }

  handleTextoChange(event) {
    this.setState({texto: event.target.value});
  }


  render() {
    return (
      <div class="center">
        <h2>Consultar Venues</h2>
        <label for="long">Longitud</label>
        <input type="text" class="form-control" id="long" value={this.state.longitud} onChange={this.handleLongitudChange} />
        <br />
        <label for="lat">Latitud</label>
        <input type="text" class="form-control" id="lat" value={this.state.latitud} onChange={this.handleLatitudChange} />
        <br />
        <label for="query">Texto</label>
        <input type="text" class="form-control" id="query" value={this.state.texto} onChange={this.handleTextoChange} />
        <br />
        <button onClick={this.buscarVenues} class="btn btn-primary">Buscar eventos</button>
        <br />
      </div>
    );
  }

  buscarVenues = () => {
    var params = "?latitud=" + this.state.latitud;
    params = params + "&longitud=" + this.state.longitud;
    params = params + "&texto=" + this.state.texto;

    fetch('http://localhost:3000/venues/'+params)
    .then(response => 
      { 
        if (response.status === 200)
        {
            console.log(response);
        }
      }
    )
    .catch(error => console.error('Error:', error));
  };
}

export default connect()(ConsultarVenues)