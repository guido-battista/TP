import React, { Component } from "react";

import {
  Redirect
} from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usr: '',
      pwd: '',
      altaOK: false
    };
    this.altaUsuario = this.altaUsuario.bind(this);
    this.handleUsuarioChange = this.handleUsuarioChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

  }

  handleUsuarioChange(event) {
    this.setState({usr: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({pwd: event.target.value});
  }

  render() {
    if (this.state.altaOk) 
    {
      console.log("Antes de hacer el Redirect");
      return <Redirect to="/LoginOk" />;
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
        <button onClick={this.altaUsuario} class="btn btn-primary">Generar Usuario</button>
        <br />
      </div>
    );
  }

  altaUsuario = () => {
    console.log("Alta de Usuario");
    fetch('http://localhost:3000/crearUsuario', {
      method: "POST",
      body: JSON.stringify({
        usuario: this.state.usr,
        password: this.state.pwd
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => 
      {
        console.log('Success:', response);
        this.setState({altaOk: true});
      }
      );
  };
}

export default Signup;