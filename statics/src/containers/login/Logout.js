import React, { Component } from "react";
import { logOut } from '../../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  Redirect
} from "react-router-dom";

class Logout extends Component {
  constructor (props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <button onClick={this.logout} class="btn btn-link borderlessButton">Logout</button>
        <br />
      </div>
    );
  }

  logout = () => {
    //En principio lo único que hace es borrar el JWT
    fetch('http://localhost:3000/logout/')
    .then(response => 
      { 
        if (response.status === 200)
        {
          this.props.dispatch(logOut());
        }
      }
    )
    .catch(error => console.error('Error:', error));
  };
}

export default connect()(Logout)