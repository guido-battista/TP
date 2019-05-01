import React, { Component } from "react";
import { connect } from 'react-redux'
import OpcionesUsuario from './OpcionesUsuario';
import OpcionesSinUsuario from './OpcionesSinUsuario';
import PropTypes from 'prop-types';


class Principal extends Component {

    static propTypes = {
      usuarioLogueado: PropTypes.bool.isRequired
    }

    render() {

      console.log("Entro a Principal");

      if (this.props.usuarioLogueado)
      {
        return(
        <OpcionesUsuario />
        )
      }
      else
      {
        return(
        <OpcionesSinUsuario />
        )
      }
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
    )(Principal);