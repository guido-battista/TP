import React, { Component } from "react";
import { loguearUsuario } from '../../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Redirect
} from "react-router-dom";

class Signup extends Component {
  constructor (props){
    super(props);
    this.state = {
      usr: '',
      pwd: '',
      loginOk: false,
      loginError: false
    };
    this.login = this.login.bind(this);
    this.handleUsuarioChange = this.handleUsuarioChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  static propTypes = {
    usuario:  PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  handleUsuarioChange(event) {
    this.setState({usr: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({pwd: event.target.value});
  }

  render() {
    if (this.state.loginOk) 
    {
      return <Redirect to="/" />;
    }

    if(this.state.loginError)
    {
      return (
        <div class="center">
          <label for="usr">Error en el Login</label>
        </div>
      )
    }
    return (
      <div class="center">
        <h2>Sign Up</h2>
        <label for="usr">Usuario</label>
        <input type="text" class="form-control" id="usr" value={this.state.usr} onChange={this.handleUsuarioChange} />
        <br />
        <label for="pwd">Password</label>
        <input type="password" class="form-control" id="pwd" value={this.state.pwd} onChange={this.handlePasswordChange} />
        <br />
        <button onClick={this.login} class="btn btn-primary">Login</button>
        <br />
      </div>
    );
  }

  login = () => {
    var params = "?nombre=" + this.state.usr + "&pass=" + this.state.pwd;
    fetch('http://localhost:3000/login/'+params)
    .then(response => 
      { 
        if (response.status === 200)
        {
          this.props.dispatch(loguearUsuario());
          this.setState({loginOk: true});
        }
        else
        {
          this.setState({loginError: true});
        }
      }
    )
    .catch(error => console.error('Error:', error));
  };
}

export default connect()(Signup)