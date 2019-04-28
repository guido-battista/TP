import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//function App() {
class EstadoUsuario extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    usuarioLogueado: PropTypes.bool.isRequired
  }

  render() {
    console.log(this.props.usuarioLogueado);
    if (this.props.usuarioLogueado)
      return(
        <div>
          <b>Usuario Logueado!!!</b>
        </div>
     )
    else
    return(
      <div>
        <b>Se debe hacer login...</b>
      </div>
   )
  };
};

const mapStateToProps = state => {
  console.log("Estado usuario State <"+Object.keys(state)+">")
  const { usuarioLogueado } = state

  return {
    usuarioLogueado
  }
}

export default connect(
    mapStateToProps
  )(EstadoUsuario);