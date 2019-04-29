import React, { Component } from "react";
import EstadoUsuario from './EstadoUsuario';
import Logout from '../containers/Logout';

import {Link} from "react-router-dom";

class Principal extends Component {

    render() {
      return (
        <div>
          <EstadoUsuario />
          <ul>
            <li>
              <Link to="/Login">Sign In</Link>
            </li>
            <li>
              <Link to="/SignUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/PruebaLog">Prueba Login</Link>
            </li>
            <li>
              <Logout />
            </li>
        </ul>
        </div>
      );
    }
  }
  
  export default Principal;