import React, { Component } from "react";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

class OpcionesSinUsuario extends Component {

    static propTypes = {
      usuarioLogueado: PropTypes.bool.isRequired
    }

    render() {

      return (
        <div>
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
        </ul>
        
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    const { usuarioLogueado } = state;
  
    return {
      usuarioLogueado
    }
  }
  
  export default connect(
      mapStateToProps
    )(OpcionesSinUsuario);