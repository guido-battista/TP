import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Logout from '../containers/login/Logout';

import {Link} from "react-router-dom";

class OpcionesUsuario extends Component {

    static propTypes = {
        usuarioLogueado: PropTypes.bool.isRequired
      }
    

    render() {
        return (
            <div>
                <ul>
                    <li>
                      <Link to="/ConsultarVenues">Consultar Venues</Link>
                    </li>
                    <li>
                      <Logout />
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
    )(OpcionesUsuario);